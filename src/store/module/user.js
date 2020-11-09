import _customerService from 'service/_customer.service'
import utility from 'config/utility'

export default {
  state: {
    id: '',
    isForumAdministrator: false,
    isForumBanned: false,
    nickName: '',
    customerSex: -1,
    phone: '',
    email: '',
    avatar: '',
    companyName: '',
    companyTaxId: '',
    province: '',
    city: '',
    area: '',
    address: '',
    sectorCategory: -1,
    position: '',
    createdTime: '',
    customerNo: '',
    devCertificateType: '',
    token: utility.getToken(),
    hasGetInfo: false,
    profile: {},
  },
  mutations: {
    setUserId(state, guid) {
      state.id = guid
    },
    setIsForumAdministrator(state, isForumAdministrator) {
      state.isForumAdministrator = isForumAdministrator
    },
    setIsForumBanned(state, isForumBanned) {
      state.isForumBanned = isForumBanned
    },
    setNickName(state, nickName) {
      state.nickName = nickName
    },
    setCustomerSex(state, sex) {
      state.customerSex = sex
    },
    setPhone(state, phone) {
      state.phone = phone
    },
    setEmail(state, email) {
      state.email = email
    },
    setAvatar(state, avatar) {
      state.avatar = avatar
    },
    setCompanyName(state, companyName) {
      state.companyName = companyName
    },
    setCompanyTaxId(state, companyTaxId) {
      state.companyTaxId = companyTaxId
    },
    setProvince(state, province) {
      state.province = province
    },
    setCity(state, city) {
      state.city = city
    },
    setArea(state, area) {
      state.area = area
    },
    setAddress(state, address) {
      state.address = address
    },
    setSectorCategory(state, sectorCategory) {
      state.sectorCategory = sectorCategory
    },
    setPosition(state, position) {
      state.position = position
    },
    setCreatedTime(state, createdTime) {
      state.createdTime = createdTime
    },
    setCustomerNo(state, customerNo) {
      state.customerNo = customerNo
    },
    setDevCertificateType(state, devCertificateType) {
      state.devCertificateType = devCertificateType
    },
    setHasGetInfo(state, status) {
      state.hasGetInfo = status
    },
  },
  actions: {
    getUserInfo({state, commit}) {
      return new Promise((resolve, reject) => {
        try {
          _customerService.getUserInfo(state.token).then(response => {
            const data = response.data
            if (response.data.code === 999) {
              resolve(response.data)
            }
            commit('setUserId', data.id)
            commit('setIsForumAdministrator', data.isForumAdministrator)
            commit('setIsForumBanned', data.isForumBanned)
            commit('setNickName', data.nickName)
            commit('setCustomerSex', data.customerSex)
            commit('setPhone', data.phone)
            commit('setEmail', data.email)
            commit('setAvatar', data.avatar)
            commit('setCompanyName', data.companyName)
            commit('setCompanyTaxId', data.companyTaxId)
            commit('setProvince', data.province)
            commit('setCity', data.city)
            commit('setArea', data.area)
            commit('setAddress', data.address)
            commit('setSectorCategory', data.sectorCategory)
            commit('setPosition', data.position)
            commit('setCreatedTime', data.createdTime)
            commit('setCustomerNo', data.customerNo)
            commit('setDevCertificateType', data.devCertificateType)
            commit('setHasGetInfo', true)
            resolve(data)
          })
        } catch (error) {
          reject(error)
        }
      })
    },
  },
}
