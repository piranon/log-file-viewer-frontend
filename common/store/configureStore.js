import { createStore, applyMiddleware } from 'redux'
import { apiMiddleware } from 'redux-api-middleware'
import thunk from 'redux-thunk'
import rootReducer from '../reducers'

const configureStore = (preloadedState) => {
  const middlewares = [thunk, apiMiddleware]

  const store = createStore(
    rootReducer,
    preloadedState,
    applyMiddleware(...middlewares)
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
