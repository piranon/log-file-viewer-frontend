import { LOAD_CONTENT_SUCCESS, LOAD_CONTENT_FAILURE } from '../constants/actionTypes'

const content = (state = [], action) => {
  console.log(action, '###########################')
  switch(action.type) {
    case LOAD_CONTENT_SUCCESS:
      return action.payload
    case LOAD_CONTENT_FAILURE:
      return action.payload
    default:
      return state
  }
}

export default content