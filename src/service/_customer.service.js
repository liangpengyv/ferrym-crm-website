import http from 'config/http'

const _customerService = {
  getUserInfo: () => {
    return http.post(process.env.VUE_APP_AUTHORITY_URL + '/Customer/Profile')
  },
  getUnReadNotificationCount: () => {
    return http.post(process.env.VUE_APP_AUTHORITY_URL + '/Customer/GetUnReadNotificationCount')
  },
}

export default _customerService
