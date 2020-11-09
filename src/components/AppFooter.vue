<template>
  <div class="app-footer">
    <div class="container center-block">
      <div class="section-top">
        <div class="column-1">
          <img class="logo" src="../assets/img/components/_common/nav-logo.png" alt="">
          <h1 class="slogan">Power Everyone with Automation</h1>
          <p class="description">
            天行智能是一家专注于 RPA （机器人流程自动化）产品研发及解决方案提供的公司，在致力于研发优质国产 RPA 软件的同时，也为汽车、地产、金融、能源、运营商等诸多龙头企业提供解决方案与实施服务。
          </p>
        </div>
        <div class="column-2">
          <h2 class="title">RPA 平台</h2>
          <a class="item" :href="callbackUrl + '/#uni-studio'">Uni Studio</a>
          <a class="item" :href="callbackUrl + '/#uni-workforce'">Uni Workforce</a>
          <a class="item" :href="callbackUrl + '/#uni-control-center'">Uni Control Center</a>
        </div>
        <div class="column-3">
          <h2 class="title">解决方案</h2>
          <a class="item" :href="callbackUrl + '/#solution-container'">基于流程自动化尝试需求</a>
          <a class="item" :href="callbackUrl + '/#solution-container'">基于明确的应用场景需求</a>
          <a class="item" :href="callbackUrl + '/#solution-container'">基于自动化能力提升诉求</a>
          <a class="item" :href="callbackUrl + '/#solution-container'">数字化劳动力团队构建服务</a>
        </div>
        <div class="column-4">
          <h2 class="title">关于我们</h2>
          <a class="item" :href="callbackUrl + '/#company-introduction'">公司简介</a>
          <a class="item" :href="callbackUrl + '/#development-path'">发展历程</a>
          <a class="item" :href="callbackUrl + '/#team-introduction'">团队简介</a>
        </div>
        <div class="column-5 text-center">
          <h2 class="title">关注我们</h2>
          <img class="uni-rpa-wechat" src="../assets/img/components/app-footer/uni-rpa-wechat.png" alt="">
          <span class="description">微信公众号</span>
        </div>
      </div>
      <div class="section-bottom text-center">
        <p class="contact">
          商务合作：business@cn-tianxing.com
          <span class="spacer">|</span>
          加入我们：hr@cn-tianxing.com
        </p>
        <p class="contact">
          地址：北京市朝阳区天畅园8号楼25层
          <span class="spacer">|</span>
          深圳市南山区讯美科技广场3号楼23A层
        </p>
        <p class="copyright">
          Copyright© 2017-2020 Uni 北京天行有灵科技有限公司
          <span class="spacer">|</span>
          <a class="record" href="http://www.beian.miit.gov.cn/" target="_blank">京ICP备20008217号-1</a>
        </p>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'AppFooter',
    data() {
      return {
        callbackUrl: process.env.VUE_APP_CALLBACK_URL,
      }
    },
  }
</script>

<style scoped lang="less">
  @import "../assets/css/variable-definitions";

  .app-footer {
    background-color: #000403;
    padding: 13.6rem 0 7.2rem 0;
    min-width: 144rem;

    @media screen and (max-width: @mobileWidth) {
      min-width: unset;
    }

    .container {
      width: 144rem;

      @media screen and (max-width: @mobileWidth) {
        width: 100%;
      }

      .section-top {

        .column-1 {
          display: inline-block;
          vertical-align: top;
          width: 33%;

          @media screen and (max-width: @mobileWidth) {
            width: 90%;
            display: block;
            margin-left: auto;
            margin-right: auto;
            text-align: center;
            margin-top: -8rem;
          }

          .logo {
            width: 23.5rem;

            @media screen and (max-width: @mobileWidth) {
              width: 16rem;
            }
          }

          .slogan {
            font-size: 2rem;
            font-weight: 400;
            color: #FFFFFF;
            line-height: 2.8rem;
            margin: 1.6rem 0 0 0;

            @media screen and (max-width: @mobileWidth) {
              font-size: 1.8rem;
            }
          }

          .description {
            width: 33rem;
            font-size: 1.4rem;
            font-weight: 400;
            color: #aeafae;
            line-height: 2.5;
            margin: 1.6rem 0 0 0;

            @media screen and (max-width: @mobileWidth) {
              width: 90%;
              display: block;
              margin-left: auto;
              margin-right: auto;
              text-align: center;
            }
          }
        }

        .column-2 {
          display: inline-block;
          vertical-align: top;
          width: 17%;

          @media screen and (max-width: @mobileWidth) {
            display: none;
          }

          .title {
            font-size: 2rem;
            font-weight: 800;
            color: #FFFFFF;
            line-height: 2.8rem;
            margin: 2.4rem 0 1.4rem 0;
          }

          .item {
            display: block;
            font-size: 1.4rem;
            font-weight: 400;
            color: #aeafae;
            line-height: 2;
            margin: .8rem 0;

            &:hover {
              color: white;
            }
          }
        }

        .column-3 {
          display: inline-block;
          vertical-align: top;
          width: 20%;

          @media screen and (max-width: @mobileWidth) {
            display: none;
          }

          .title {
            font-size: 2rem;
            font-weight: 800;
            color: #FFFFFF;
            line-height: 2.8rem;
            margin: 2.4rem 0 1.4rem 0;
          }

          .item {
            display: block;
            font-size: 1.4rem;
            font-weight: 400;
            color: #aeafae;
            line-height: 2;
            margin: .8rem 0;

            &:hover {
              color: white;
            }
          }
        }

        .column-4 {
          display: inline-block;
          vertical-align: top;
          width: 16%;

          @media screen and (max-width: @mobileWidth) {
            display: none;
          }

          .title {
            font-size: 2rem;
            font-weight: 800;
            color: #FFFFFF;
            line-height: 2.8rem;
            margin: 2.4rem 0 1.4rem 0;
          }

          .item {
            display: block;
            font-size: 1.4rem;
            font-weight: 400;
            color: #aeafae;
            line-height: 2;
            margin: .8rem 0;

            &:hover {
              color: white;
            }
          }
        }

        .column-5 {
          display: inline-block;
          vertical-align: top;
          width: 14%;

          @media screen and (max-width: @mobileWidth) {
            width: 90%;
            display: block;
            margin-left: auto;
            margin-right: auto;
            margin-top: 4.8rem;
          }

          .title {
            font-size: 2rem;
            font-weight: 800;
            color: #FFFFFF;
            line-height: 2.8rem;
            margin: 2.4rem 0 1.6rem 0;
          }

          .uni-rpa-wechat {
            width: 16.6rem;
            height: 16.6rem;
          }

          .description {
            display: block;
            font-size: 1.4rem;
            font-weight: 400;
            color: #aeafae;
            line-height: 2rem;
            margin-top: .8rem;
          }
        }
      }

      .section-bottom {
        margin-top: 7.2rem;

        @media screen and (max-width: @mobileWidth) {
          width: 90%;
          display: block;
          margin-left: auto;
          margin-right: auto;
          margin-top: 4.8rem;
        }

        .contact {
          font-size: 1.6rem;
          font-weight: 400;
          color: #aeafae;
          line-height: 2;

          .spacer {
            margin: 0 1rem;

            @media screen and (max-width: @mobileWidth) {
              display: block;
              visibility: hidden;
              height: 0;
              margin-left: auto;
              margin-right: auto;
            }
          }
        }

        .copyright {
          font-size: 1.4rem;
          font-weight: 400;
          color: #666666;
          line-height: 2;

          .spacer {
            margin: 0 .8rem;

            @media screen and (max-width: @mobileWidth) {
              display: block;
              visibility: hidden;
              height: 0;
              margin-left: auto;
              margin-right: auto;
            }
          }

          .record {
            color: #666666;

            &:hover {
              color: #868686;
            }
          }
        }
      }
    }
  }
</style>
