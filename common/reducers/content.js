import { LOAD_CONTENT_SUCCESS } from '../constants/actionTypes'

const content = (state = [], action) => {
  switch(action.type) {
    case LOAD_CONTENT_SUCCESS:
      return action.payload
    default:
      return state
  }
}

export default content