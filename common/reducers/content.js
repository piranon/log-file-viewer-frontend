import { LOAD_CONTENT_SUCCESS, LOAD_CONTENT_FAILURE } from '../constants/actionTypes'

const content = (state = [], action) => {
  switch(action.type) {
    case LOAD_CONTENT_SUCCESS:
      return action.payload.data
    case LOAD_CONTENT_FAILURE:
      return []
    default:
      return state
  }
}

export default content