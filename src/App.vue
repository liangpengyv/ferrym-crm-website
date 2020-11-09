<template>
  <div id="app">
    <router-view></router-view>
    <!-- set progressbar -->
    <vue-progress-bar></vue-progress-bar>
  </div>
</template>

<script>
  export default {
    methods: {
      userLoaded: function () {
        console.log('I am listening to the user loaded event in vuex-oidc')
      },
    },
    mounted() {
      window.addEventListener('vuexoidc:userLoaded', this.userLoaded)
    },
    destroyed() {
      window.removeEventListener('vuexoidc:userLoaded', this.userLoaded)
    },
  }
</script>

<style lang="less">
  @import "vendor/element/theme/index.css";
  @import "~@csstools/normalize.css";
  @import "~swiper/dist/css/swiper.min.css";
  @import "assets/css/main";
  @import "assets/css/tools";
  @import "assets/css/element-custom";
</style>
