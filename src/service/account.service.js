import http from 'config/http'

const accountService = {
  ask: (data) => {
    return http.post('/Account/Ask', data)
  },
  send: (data) => {
    return http.post('/Account/Send', data)
  },
  apply: (data) => {
    return http.post('/Account/Apply', data)
  },
}

export default accountService
