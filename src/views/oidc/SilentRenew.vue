<template>
  <div></div>
</template>

<script>
  import { vuexOidcProcessSilentSignInCallback } from 'vuex-oidc'

  export default {
    name: 'signout-callback-oidc',
    mounted() {
      vuexOidcProcessSilentSignInCallback()
    },
  }
</script>
