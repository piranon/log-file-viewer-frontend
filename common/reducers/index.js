import { combineReducers } from 'redux'
import { reducer as formReducer } from 'redux-form'
import content from './content'

const rootReducer = combineReducers({
  form: formReducer,
  content
})

export default rootReducer