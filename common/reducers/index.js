import { combineReducers } from 'redux'
import { loadingBarReducer as loadingBar } from 'react-redux-loading-bar'
import form from './form'
import content from './content'
import pagination from './pagination'

const rootReducer = combineReducers({
  content,
  form,
  pagination,
  loadingBar
})

export default rootReducer