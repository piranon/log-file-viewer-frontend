import {
  CHANGE_PATH_FILE,
  SET_PATH_FILE_ERROR,
  LOAD_CONTENT_FAILURE
} from '../constants/actionTypes'

const form = (state = {}, action) => {
  switch(action.type) {
    case CHANGE_PATH_FILE:
      return Object.assign({}, state, action.payload)
    case SET_PATH_FILE_ERROR:
      return Object.assign({}, state, action.payload)
    case LOAD_CONTENT_FAILURE:
      console.log(action)
      return Object.assign({}, state, {
        errors: {
          pathFile: action.payload.response.error.message
        }
      })
    default:
      return state
  }
}

export default form