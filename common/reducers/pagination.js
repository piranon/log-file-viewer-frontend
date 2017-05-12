import { LOAD_CONTENT_SUCCESS, LOAD_CONTENT_FAILURE } from '../constants/actionTypes'

const calculatePagination = (action) => {
  const LIMIT = 10
  const data = action.payload.data
  var back = ''
  var next = ''

  if (data[0].line > 1) {
    back = `${data[0].line - LIMIT},${data[0].line}`
  }
  if (data.length === 10) {
    next = `${data[0].line + LIMIT},${data[9].line + LIMIT}`
  }

  let obj = {
    'total_count' : action.payload.total_count,
    back,
    next
  }

  return obj
}

const pagination = (state = {}, action) => {
  switch(action.type) {
    case LOAD_CONTENT_SUCCESS:
      return calculatePagination(action)
    case LOAD_CONTENT_FAILURE:
      return {}
    default:
      return state
  }
}

export default pagination