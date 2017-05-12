import { createStore, applyMiddleware } from 'redux'
import { apiMiddleware } from 'redux-api-middleware'
import { loadingBarMiddleware } from 'react-redux-loading-bar'
import thunk from 'redux-thunk'
import rootReducer from '../reducers'

const configureStore = (preloadedState) => {
  const middleWares = [thunk, apiMiddleware, loadingBarMiddleware({
    promiseTypeSuffixes: ['REQUEST', 'SUCCESS', 'FAILURE']
  })]

  const store = createStore(
    rootReducer,
    preloadedState,
    applyMiddleware(...middleWares)
  )

  if (module.hot) {
    // Enable Webpack hot module replacement for reducers
    module.hot.accept('../reducers', () => {
      const nextRootReducer = require('../reducers').default
      store.replaceReducer(nextRootReducer)
    })
  }

  return store
}

export default configureStore
