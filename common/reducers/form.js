import { LOAD_CONTENT_SUCCESS, LOAD_CONTENT_FAILURE } from '../constants/actionTypes'

const form = (state = {}, action) => {
  switch(action.type) {
    case 'CHANGE_PATH_FILE':
      return Object.assign({}, state, action.payload);
    case 'SET_PATH_FILE_ERROR':
      return Object.assign({}, state, action.payload);
    default:
      return state
  }
}

export default form