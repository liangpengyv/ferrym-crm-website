<template>
  <div></div>
</template>

<script>
  import { mapActions } from 'vuex'

  export default {
    name: 'OidcCallback',
    methods: {
      ...mapActions([
        'oidcSignInCallback',
        'signOutOidcSilent',
        'removeOidcUser',
        'authenticateOidcSilent',
      ]),
    },
    mounted() {
      this.oidcSignInCallback()
        .then(redirectPath => {
          this.$router.push(redirectPath)
        })
        .catch(() => {
          this.removeOidcUser()
          this.signOutOidcSilent()
        })
    },
  }
</script>
