import { combineReducers } from 'redux'
import { reducer as form } from 'redux-form'
import { loadingBarReducer as loadingBar } from 'react-redux-loading-bar'
import content from './content'
import pagination from './pagination'
import pathFile from './pathFile'

const rootReducer = combineReducers({
  content,
  form,
  pagination,
  pathFile,
  loadingBar
})

export default rootReducer