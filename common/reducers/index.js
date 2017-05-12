import { combineReducers } from 'redux'
import { reducer as formReducer } from 'redux-form'
import content from './content'
import pagination from './pagination'
import pathFile from './pathFile'

const rootReducer = combineReducers({
  content,
  form: formReducer,
  pagination,
  pathFile
})

export default rootReducer