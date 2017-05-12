import { CALL_API } from 'redux-api-middleware'
import { FILES_ENDPOINT, LINES_PARAM } from '../constants/endpoints'
import {
  LOAD_CONTENT_REQUEST,
  LOAD_CONTENT_SUCCESS,
  LOAD_CONTENT_FAILURE,
  CHANGE_PATH_FILE,
  SET_PATH_FILE_ERROR
} from '../constants/actionTypes'

const buildEndpoint = (pathFile, queryString) => {
  let endpoint = `${FILES_ENDPOINT}${pathFile[0] === '/' ? pathFile.slice(1) : pathFile}`

  if (queryString)
    endpoint += `?${LINES_PARAM}=${queryString}`

  return endpoint
}

export const loadContent = (pathFile, queryString = '') => ({
  [CALL_API]: {
    endpoint: buildEndpoint(pathFile, queryString),
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET',
      'Access-Control-Allow-Credentials': true
    },
    method: 'GET',
    types: [
      LOAD_CONTENT_REQUEST,
      {
        type: LOAD_CONTENT_SUCCESS,
        meta: { pathFile }
      },
      LOAD_CONTENT_FAILURE
    ]
  }
})

export const pathFileChange = (pathFile) => {
  return {
    type: CHANGE_PATH_FILE,
    payload: {
      fields: {
        pathFile: pathFile
      }
    }
  };
};

export const setPathFileError = (error) => {
  return {
    type: SET_PATH_FILE_ERROR,
    payload: {
      errors: {
        pathFile: error
      }
    }
  };
};