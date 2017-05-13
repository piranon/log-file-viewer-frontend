let API_ROOT = 'http://api.logfileviewer.tk'

if (process.env.NODE_ENV !== 'production')
  API_ROOT = 'http://localhost:8081'


export const FILES_ENDPOINT = `${API_ROOT}/files/`

export const LINES_PARAM = 'lines'