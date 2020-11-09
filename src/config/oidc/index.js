const oidcSetting = {
  authority: process.env.VUE_APP_AUTHORITY_URL,
  client_id: 'masterwebsiteclient',
  redirect_uri: process.env.VUE_APP_CALLBACK_URL + '/sign-in-callback',
  response_type: 'code',
  scope: 'openid profile phone email IdentityServerApi',
  post_logout_redirect_uri: process.env.VUE_APP_CALLBACK_URL + '/sign-out-callback',
  silentRedirectUri: process.env.VUE_APP_CALLBACK_URL + '/oidc-silent-renew',
  automaticSilentSignin: true,
}

export default oidcSetting
