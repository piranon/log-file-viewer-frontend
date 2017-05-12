import { LOAD_CONTENT_SUCCESS, LOAD_CONTENT_FAILURE } from '../constants/actionTypes'

const calculatePagination = ({ data, total_count }) => {
  const LIMIT = 10
  let first = ''
  let back = ''
  let next = ''
  let last = ''

  if (data.length > 0 && total_count > 10 && data[0].line > 10) {
    first = '1,10'
  }
  if (data[0].line > 1) {
    back = `${data[0].line - LIMIT},${data[0].line - 1}`
  }
  if (data.length === LIMIT) {
    next = `${data[0].line + LIMIT},${data[9].line + LIMIT}`
    last = `${total_count - ((total_count % LIMIT) - 1)},${total_count - (total_count % LIMIT) + LIMIT}`
  }

  return {
    first,
    back,
    next,
    last
  }
}

const pagination = (state = {}, action) => {
  switch(action.type) {
    case LOAD_CONTENT_SUCCESS:
      return calculatePagination(action.payload)
    case LOAD_CONTENT_FAILURE:
      return {}
    default:
      return state
  }
}

export default pagination