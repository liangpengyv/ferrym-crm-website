<template>
  <div class="app-header" :style="{background: backgroundStyle}">
    <div class="container center-block clear-fix">
      <div class="float-left pull-left">
        <a class="nav-logo" href="/"></a>
        <div class="nav">
          <i class="mobile-menu el-icon-menu"></i>
          <ul class="nav-menu-list">
            <li>
              <a href="/">
                <span class="nav-active">首页</span>
              </a>
            </li>
            <li>
              <a :href="appMarketUrl" target="_blank">
                <span>应用市场</span>
              </a>
            </li>
            <li>
              <a :href="forumUrl" target="_blank">
                <span>社区</span>
              </a>
            </li>
            <li>
              <a :href="documentUrl" target="_blank">
                <span>用户手册</span>
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div class="float-right pull-right">
        <a :href="systemNotificationUrl" target="_blank">
          <el-badge
            class="system-notification"
            v-if="hasGetInfo"
            :value="currentSystemInfoCount > 0 ? currentSystemInfoCount : ''"
            :max="99"
          >
            <i class="system-notification-icon el-icon-message-solid"></i>
          </el-badge>
        </a>
        <div class="account">
          <div class="on-logout" v-if="!hasGetInfo">
            <ul>
              <li>
                <a @click="handleLogin()">登录</a>
              </li>
              <li>
                <a class="register" :href="personalUrl + '/#/register'" target="_blank">注册</a>
              </li>
            </ul>
          </div>
          <div class="on-login" v-if="hasGetInfo">
            <div class="icon">
              <img
                :src="$store.state.customer.avatar ? $store.state.customer.avatar : defaultAvatarContent"
                alt="User Avatar"
              />
            </div>
            <div class="name">
              <!--              <span class="nickname">{{$store.state.customer.nickName}}</span>-->
              <span class="nickname">会弹吉他的程序员</span>
              <span class="arrows"></span>
            </div>
            <div class="dropdown-content">
              <a :href="personalUrl" target="_blank">
                <img src="../assets/img/components/app-header/nav-icon-01.svg" alt="个人中心"/>
                <span>个人中心</span>
              </a>
              <a :href="personalUrl + '/#/custom'" target="_blank">
                <img src="../assets/img/components/app-header/nav-icon-02.svg" alt="应用管理"/>
                <span>应用管理</span>
              </a>
              <a :href="personalUrl + '/#/invoice'" target="_blank">
                <img src="../assets/img/components/app-header/nav-icon-03.svg" alt="发票管理"/>
                <span>发票管理</span>
              </a>
              <a :href="appMarketUrl + '/#/cart'" target="_blank">
                <img src="../assets/img/components/app-header/nav-icon-04.svg" alt="购物车"/>
                <span>购物车</span>
              </a>
              <a :href="personalUrl + '/#/order'" target="_blank">
                <img src="../assets/img/components/app-header/nav-icon-05.svg" alt="订单管理"/>
                <span>订单管理</span>
              </a>
              <a :href="personalUrl + '/#/myForum'" target="_blank">
                <img src="../assets/img/components/app-header/nav-icon-06.svg" alt="我的社区"/>
                <span>我的社区</span>
              </a>
              <a class="logout" @click="signOutOidc()">
                <img src="../assets/img/components/app-header/nav-icon-logout.svg" alt="退出"/>
                <span>退出</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import oidc from 'oidc-client'
  import oidcSetting from 'config/oidc'
  import { mapGetters, mapActions } from 'vuex'
  import _customerService from 'service/_customer.service'
  import defaultAvatarContent from 'model/_common/default-avatar-content'

  let mgr = new oidc.UserManager(oidcSetting)

  export default {
    name: 'AppHeader',
    data() {
      return {
        defaultAvatarContent: defaultAvatarContent,
        personalUrl: process.env.VUE_APP_PERSONAL_CENTER_URL,
        appMarketUrl: process.env.VUE_APP_APP_MARKET_URL,
        forumUrl: process.env.VUE_APP_FORUM_URL,
        documentUrl: 'https://docs.unirpa.com/',
        systemNotificationUrl: process.env.VUE_APP_PERSONAL_CENTER_URL + '/#/myForum',

        currentSystemInfoCount: 0,
        backgroundStyle: 'rgba(23, 38, 51, 0.2)',
      }
    },
    computed: {
      ...mapGetters(['oidcIsAuthenticated']),
      hasAccess: function () {
        return this.oidcIsAuthenticated
      },
      hasGetInfo() {
        return this.$store.state.customer.hasGetInfo
      },
      isForumBanned() {
        return this.$store.state.customer.isForumBanned
      },
    },
    watch: {
      hasGetInfo: function (value) {
        if (value) {
          // 当登录状态改变，且是变为已登录的状态时，进行必要的初始化
          this.whenLoggedInitTasks()
        }
      },
      isForumBanned: function (value) {
        if (value) {
          // 当封号状态改变，且是变为已封号的状态时，弹出提示，并退出登录
          this.$message.error('因违规操作，当前账号已被封号！')
          setTimeout(() => {
            this.signOutOidc()
          }, 1000)
        }
      },
    },
    methods: {
      ...mapActions(['authenticateOidcSilent']),
      whenLoggedInitTasks() {
        if (this.hasGetInfo) {
          if (this.hasGetInfo) {
            this.initSystemNotificationCount()
            setInterval(() => {
              this.initSystemNotificationCount()
            }, 60 * 1000)
          }
        }
      },
      initSystemNotificationCount() {
        if (this.hasGetInfo) {
          _customerService.getUnReadNotificationCount().then((response) => {
            if (response.code === 200) {
              this.currentSystemInfoCount = response.data
            } else {
              this.$message.error('系统消息状态获取失败，' + response.message)
            }
          })
        } else {
          sessionStorage.clear()
        }
      },
      watchScrollToChangeBackground() {
        let scrollTop =
          window.pageYOffset ||
          document.documentElement.scrollTop ||
          document.body.scrollTop
        this.backgroundStyle = 'rgba(23, 38, 51, ' + (scrollTop / 1000 + 0.2) + ')'
      },
      ...mapActions(['signOutOidc']),
      handleLogin() {
        window.sessionStorage.setItem('vuex_oidc_active_route', this.$route.path)
        mgr.signinRedirect()
      },
    },
    mounted() {
      window.addEventListener('scroll', this.watchScrollToChangeBackground)
    },
    destroyed() {
      window.removeEventListener('scroll', this.watchScrollToChangeBackground)
    },
  }
</script>

<style scoped lang="less">
  @import "../assets/css/variable-definitions";

  .app-header {
    width: 100%;
    height: 6rem;
    background: rgba(23, 38, 51, 1);
    box-shadow: 0 0.2rem 0.4rem 0 rgba(0, 0, 0, 0.23);
    position: fixed;
    top: 0;
    z-index: 99;

    .container {
      width: 144rem;
      height: inherit;

      @media screen and (max-width: @mobileWidth) {
        width: 100%;
      }

      .float-left {

        .nav-logo {
          display: inline-block;
          width: 16.6rem;
          height: 3.2rem;
          margin-top: 1.4rem;
          margin-right: 2.7rem;
          background-image: url("../assets/img/components/_common/nav-logo.png");
          background-size: cover;
          cursor: pointer;

          @media screen and (max-width: @mobileWidth) {
            margin-left: .8rem;
            margin-right: 1.2rem;
          }
        }

        .nav {
          display: inline-block;
          height: 1.4rem;
          margin-bottom: 0.3rem;

          &:hover .nav-menu-list {
            @media screen and (max-width: @mobileWidth) {
              display: block;
            }
          }

          .mobile-menu {
            display: none;

            @media screen and (max-width: @mobileWidth) {
              display: inline-block;
              font-size: 3.6rem;
              color: white;
            }

            &:hover {
              cursor: pointer;
            }
          }

          .nav-menu-list {

            @media screen and (max-width: @mobileWidth) {
              display: none;
              position: absolute;
              background-color: #f9f9f9;
              box-shadow: 0 0.5rem 1rem 0 rgba(0, 0, 0, 0.2);
              padding: 1rem 1.6rem;
              font-size: 1.4rem;
              text-align: left;
              margin-top: .9rem;
              margin-left: .4rem;
            }

            li {
              float: left;

              @media screen and (max-width: @mobileWidth) {
                float: none;
                padding: 1.5rem 0;
              }

              a {
                padding: 0.9rem;
                margin-left: 0.1rem;
                font-size: 1.4rem;
                font-weight: 400;
                color: rgba(255, 255, 255, 1);

                @media screen and (max-width: @mobileWidth) {
                  color: #666666;
                }

                &:hover {
                  span {
                    color: rgba(0, 163, 174, 1);
                    color: white;
                    border-bottom: 0.2rem solid;
                    padding-bottom: 0.1rem;

                    @media screen and (max-width: @mobileWidth) {
                      color: #1ca2be;
                      border-bottom: 0 solid;
                      padding-bottom: 0;
                    }
                  }
                }

                .nav-active {
                  color: rgba(0, 163, 174, 1);
                  color: white;
                  border-bottom: 0.2rem solid;
                  padding-bottom: 0.1rem;

                  @media screen and (max-width: @mobileWidth) {
                    color: #666666;
                    border-bottom: 0 solid;
                    padding-bottom: 0;
                  }
                }
              }
            }
          }
        }
      }

      .float-right {
        height: 100%;
        position: relative;

        .system-notification {
          position: absolute;
          top: 1.8rem;
          left: -5.6rem;
          cursor: pointer;

          @media screen and (max-width: @mobileWidth) {
            left: -4rem;
          }

          .system-notification-icon {
            font-size: 2.8rem;
            color: white;
          }
        }

        .account {
          display: inline-block;
          height: 100%;

          .on-logout {
            height: 100%;

            ul {
              list-style-type: none;

              li {
                width: 8rem;
                display: inline-block;
                padding-top: 2rem;

                @media screen and (max-width: @mobileWidth) {
                  width: 6.4rem;
                  padding-top: 2.3rem;
                }

                a {
                  border: 0.1rem solid #3bb8c0;
                  padding: 0.3rem 1.5rem;
                  font-size: 1.8rem;
                  color: white;

                  &:hover {
                    cursor: pointer;
                  }

                  @media screen and (max-width: @mobileWidth) {
                    padding: 0.3rem 0.8rem;
                  }
                }

                .register {
                  background-color: #3bb8c0;
                }
              }
            }
          }

          .on-login {
            width: 4.1rem;
            height: 4.1rem;
            padding-top: 1rem;
            padding-bottom: 0.9rem;

            @media screen and (max-width: @mobileWidth) {
              width: 100%;
            }

            &:hover {
              cursor: pointer;
            }

            &:hover .dropdown-content {
              display: block;
            }

            .icon {
              width: 4.1rem;
              height: 4.1rem;
              border-radius: 50%;
              overflow: hidden;

              img {
                width: inherit;
              }
            }

            .name {
              width: 14rem;
              height: 4.1rem;
              font-size: 1.6rem;
              position: relative;
              padding-left: 5.8rem;
              bottom: 3.2rem;
              font-weight: 400;
              color: rgba(255, 255, 255, 1);
              line-height: 2.2rem;

              @media screen and (max-width: @mobileWidth) {
                width: 8.4rem;
                padding-left: 5rem;
              }

              .nickname {
                display: inline-block;
                max-width: 10rem;
                overflow: hidden;
                text-overflow: ellipsis;
                white-space: nowrap;

                @media screen and (max-width: @mobileWidth) {
                  max-width: 5.6rem;
                }
              }

              .arrows {
                display: inline-block;
                position: relative;
                left: 0.5rem;
                top: 0.1rem;
                border: 0.7rem solid transparent;
                border-top-color: rgba(255, 255, 255, 1);

                @media screen and (max-width: @mobileWidth) {
                  left: .1rem;
                }
              }
            }

            .dropdown-content {
              display: none;
              position: absolute;
              background-color: #f9f9f9;
              box-shadow: 0 0.5rem 1rem 0 rgba(0, 0, 0, 0.2);
              padding: 1rem 1.6rem;
              font-size: 1.4rem;
              text-align: left;
              margin-top: -3.2rem;
              margin-left: 2.1rem;

              @media screen and (max-width: @mobileWidth) {
                margin-left: 0.8rem;
              }

              a {
                color: #666666;
                padding: 1.5rem 1rem 1.5rem 0;
                display: block;
                position: relative;

                &:hover {
                  color: #1ca2be;
                  margin-top: 0;
                }

                img {
                  background-size: cover;
                  display: inline-block;
                  width: 2.6rem;
                  height: 2.6rem;
                  position: absolute;
                  top: 50%;
                  transform: translate(0, -50%);
                }

                span {
                  margin-left: 3.6rem;
                  display: inline-block;
                  width: 120%;
                }
              }
            }
          }
        }
      }
    }
  }
</style>
