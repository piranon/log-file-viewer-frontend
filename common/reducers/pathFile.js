import { LOAD_CONTENT_SUCCESS, LOAD_CONTENT_FAILURE } from '../constants/actionTypes'

const pathFile = (state = '', action) => {
  switch(action.type) {
    case LOAD_CONTENT_SUCCESS:
      return action.meta.pathFile
    case LOAD_CONTENT_FAILURE:
      return ''
    default:
      return state
  }
}

export default pathFile