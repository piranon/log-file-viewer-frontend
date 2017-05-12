import { CALL_API } from 'redux-api-middleware'
import { push } from 'react-router-redux'
import { FILES_ENDPOINT } from '../constants/endpoints'
import {
  LOAD_CONTENT_REQUEST,
  LOAD_CONTENT_SUCCESS,
  LOAD_CONTENT_FAILURE
} from '../constants/actionTypes'

export const loadContent = (pathFile) => ({
  [CALL_API]: {
    endpoint: `${FILES_ENDPOINT}${pathFile}`,
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET'
    },
    method: 'GET',
    types: [LOAD_CONTENT_REQUEST, LOAD_CONTENT_SUCCESS, LOAD_CONTENT_FAILURE]
  }
})
