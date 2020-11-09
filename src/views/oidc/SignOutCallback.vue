<template>
  <div></div>
</template>

<script>
  import { mapActions } from 'vuex'
  import utility from 'config/utility'

  export default {
    name: 'signout-callback-oidc',
    methods: {
      ...mapActions([
        'signOutOidc',
        'removeOidcUser',
        'signOutOidcSilent',
      ]),
    },
    mounted() {
      utility.setToken('')
      window.localStorage.clear()
      window.sessionStorage.clear()
      this.removeOidcUser()
      this.signOutOidcSilent()
      this.$router.push('/')
    },
  }
</script>
