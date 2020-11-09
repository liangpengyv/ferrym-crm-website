<template>
  <div class="home">
    <app-header></app-header>
    <div class="main">
      <div class="banner">
        <el-carousel :height="bannerElCarouselContainerHeight">
          <el-carousel-item class="banner-item-1">
            <div class="banner-item-1-container center-block">
              <el-button class="go-to-studio" type="primary" @click="$router.push('/uni-studio')">开始试用</el-button>
            </div>
          </el-carousel-item>
          <el-carousel-item class="banner-item-2">
            <div class="banner-item-2-container center-block">
              <a class="go-to-app-market" :href="appMarketUrl" target="_blank"></a>
            </div>
          </el-carousel-item>
          <el-carousel-item class="banner-item-3">
          </el-carousel-item>
        </el-carousel>
      </div>
      <div class="about-rpa">
        <div class="about-rpa-container center-block">
          <div class="about-uni-rpa clear-fix">
            <div class="about-uni-rpa-left pull-left">
              <h3 class="title">关于中大 RPA</h3>
              <div class="spacer"></div>
              <p class="description">
                中大RPA是采用标准的RPA的技术架构，重在针对SaaS云ERP以及传统的ERP，CRM,PLM,MES等企业核心系统的业务单元软件智能机器人，其底层技术架构采用三层架构，即
                RPA设计器、数字员工Workforce和机器人管理控制平台Control
                Center部分。设计器可供用户开发、配置、发布流程；控制平台端提供计划任务和调度方案的执行和监控，可将工作任务分配给数字员工；数字员工被部署于 PC
                端，用于接收控制平台分配的工作，在计算机终端中执行由设计器设计的流程任务。
              </p>
            </div>
            <div class="about-uni-rpa-right pull-right">
              <img class="image-framework" src="../assets/img/views/home/about-rpa-framework.png" alt="关于 Uni RPA">
            </div>
          </div>
          <div class="rpa-superiority">
            <h3 class="title">中大 RPA 特色</h3>
            <div class="spacer"></div>
            <div class="superiority-list">
              <ul>
                <li>
                  <div class="container">
                    <img src="../assets/img/views/home/about-rpa-superiority-1.svg" alt="收益显著">
                    <p>
                      顾问群体
                      <br>
                      我们不仅懂RPA智能机器人 ，更懂ERP核心业务流程
                    </p>
                  </div>
                </li>
                <li>
                  <div class="container">
                    <img src="../assets/img/views/home/about-rpa-superiority-2.svg" alt="前期投入">
                    <p>
                      兼容性更高
                      <br>
                      兼容市场上主流RPA厂商产品，可以统一管理各个厂商的RPA机器人
                    </p>
                  </div>
                </li>
                <li>
                  <div class="container">
                    <img src="../assets/img/views/home/about-rpa-superiority-3.svg" alt="IT支持">
                    <p>
                      更多附加价值
                      <br>
                      在解决业务痛点的同时，可以帮你优化业务流程
                    </p>
                  </div>
                </li>
                <li>
                  <div class="container">
                    <img src="../assets/img/views/home/about-rpa-superiority-4.svg" alt="灵活性强">
                    <p>
                      更多业务价值
                      <br>
                      在实施RPA的同时，提供复杂ERP业务流程优化，直接带来客户收益
                    </p>
                  </div>
                </li>
                <li style="display: none;">
                  <div class="container">
                    <img src="../assets/img/views/home/about-rpa-superiority-5.svg" alt="非侵入式架构">
                    <p>
                      非侵入式架构
                      <br>
                      对IT系统无干扰
                    </p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div class="production">
        <div class="production-title">
          <h1 class="title">底层基础架构介绍</h1>
        </div>
        <div class="uni-studio" id="uni-studio">
          <div class="container clear-fix center-block">
            <div class="studio-section-left pull-left">
              <h3 class="title"><span class="emphasize"></span>中大 RPA Studio</h3>
              <p class="abstract">设计器 - 训练专属于您的数字员工</p>
              <ul>
                <li>封装了超过300种动作组件，通过拖拽的方式轻松编写指令</li>
                <li>高度灵活的流程编辑逻辑，随心绘制自动化流程路径</li>
                <li>集成最佳实践模板，帮助您快速设计稳定的自动化流程</li>
                <li>支持浏览器、桌面、应用程序、企业系统等多平台识别与操作</li>
                <li>开放式AI集成平台，可设计具备多种AI能力的数字员工</li>
              </ul>
              <el-button class="go-to-studio" type="primary" @click="$router.push('/uni-studio')">开始试用</el-button>
            </div>
            <div class="studio-section-right pull-right">
              <img src="../assets/img/views/home/product-studio.png" alt="split">
            </div>
          </div>
        </div>
        <div class="production-split-1"></div>
        <div class="uni-workforce" id="uni-workforce">
          <div class="container clear-fix center-block">
            <div class="workforce-section-left pull-left">
              <img src="../assets/img/views/home/product-workforce.png" alt="split">
            </div>
            <div class="workforce-section-right pull-right">
              <h3 class="title"><span class="emphasize"></span>中大 RPA Workforce</h3>
              <p class="abstract">数字员工 - RPA 机器人工作平台</p>
              <ul>
                <li>易于管理，连接至 Uni Control Center，实现云端调度与状态反馈</li>
                <li>7*24 任意时间迅速执行自动化业务流程，提高流程时效性</li>
                <li>部署简单，可通过一键式安装，将数字化劳动力部署在 PC 端</li>
                <li>精确记录，进行日志记录，便于对业务执行情况进行追溯管理</li>
                <li>不出差错，每一个数字劳动力的流程执行精确率均可达到 100%</li>
              </ul>
            </div>
          </div>
        </div>
        <div class="uni-control-center" id="uni-control-center">
          <div class="container clear-fix center-block">
            <div class="control-center-section-left pull-left">
              <h3 class="title"><span class="emphasize"></span>中大 RPA Control Center</h3>
              <p class="abstract">控制中心 - 通用型数字员工管理平台</p>
              <ul>
                <li>集中控制机器人，支持集中部署与分布部署</li>
                <li>能够同时监控及调度上千个不同类型的机器人</li>
                <li>收集及分析机器人日志，形成审计记录</li>
                <li>支持大屏的可视化监控分析，助力您进行数字员工管理</li>
                <li>尤为注重企业信息安全，采用严格的权限管理及数据加密措施</li>
              </ul>
              <el-tooltip effect="dark" content="Coming soon..." placement="top">
                <el-button class="go-to-control-center" type="primary">开始试用</el-button>
              </el-tooltip>
            </div>
            <div class="control-center-section-right pull-right">
              <img src="../assets/img/views/home/product-control-center.png" alt="split">
            </div>
          </div>
        </div>
        <div class="production-split-2"></div>
      </div>
      <div class="solution">
        <el-dialog
          class="solution-detail-dialog"
          :visible.sync="isShowSolutionDetailDialog"
          width="42rem"
          top="10vh"
        >
          <img class="header-image" :src="currentShowSolutionDetailItem.headerImage" alt="">
          <h4 class="title">{{ currentShowSolutionDetailItem.title }}</h4>
          <div class="spacer"></div>
          <p class="description" v-html="currentShowSolutionDetailItem.description"></p>
        </el-dialog>
        <div class="solution-title">
          <h1 class="title">RPA 行业解决方案</h1>
        </div>
        <div class="solution-container center-block" id="solution-container">
          <swiper class="solution-swiper" :options="swiperOption">
            <swiper-slide v-for="(item, index) in solutionDetailList" :key="index">
              <img class="header-image" :src="item.headerImage" alt="">
              <h4 class="title">{{ item.title }}</h4>
              <div class="spacer"></div>
              <p class="description" v-html="item.description"></p>
              <el-button class="show-detail" type="primary" plain @click="showSolutionDetail(index)">查看详情</el-button>
            </swiper-slide>
            <div class="swiper-pagination" slot="pagination"></div>
          </swiper>
        </div>
      </div>
      <div class="about-us">
        <div class="about-us-title">
          <h1 class="title">关于我们</h1>
        </div>
        <div class="company-introduction center-block clear-fix" id="company-introduction">
          <div class="company-introduction-section-left pull-left">
            <h3 class="title">公司简介</h3>
            <p class="description">
              中大图灵，以助力客户成功为公司使命，ERP + RPA 业界优秀的顾问群体为客户量身定做数字化转型架构咨询、工业 4.0 和中国制造 2025 的方案咨询、提供从 RPA 智能机器人到 ERP
              应用的端到端的整体解决方案和高级技术实施服务。提供本地 ERP + RPA 产品实施服务同时，还提供基于 SaaS 云模式的 ERP + RPA + Process
              Mining产品和技术服务。
            </p>
          </div>
          <div class="company-introduction-section-right pull-right">
            <img src="../assets/img/views/home/about-us-company.png" alt="">
          </div>
        </div>
        <div class="development-path center-block" id="development-path">
          <h3 class="title">发展历程</h3>
          <div class="development-path-image"></div>
        </div>
        <div class="team-introduction center-block clear-fix" id="team-introduction">
          <div class="team-introduction-section-left pull-left">
            <img src="../assets/img/views/home/about-us-team.png" alt="">
          </div>
          <div class="team-introduction-section-right pull-right">
            <h3 class="title">团队简介</h3>
            <p class="description">
              天行智能团队核心成员来自罗兰贝格、腾讯、安永、德勤、同程、汽车之家、氚云等知名跨国咨询公司及顶尖互联网企业。创始人团队通过在各自工作领域与 RPA 行业的深入接触，对 RPA
              的创新发展有着不同维度的研究及理解，经多重磨合探讨与构思后正式成立团队，研发打造 Uni 模型，共同实施 RPA 理念的落地。各行业优质人才的组合，汇聚国内外顶级企业运营思维、国际化行业分析视野、全球顶尖 IT
              技术实力、资深 RPA 行业创新发展运作经验，使得团队不仅对行业发展趋势有着极为敏感的判断力，同时具备强大的资源整合能力，在团队创始之初已拥有不俗的创新力和执行力。
            </p>
          </div>
        </div>
        <div class="use-and-consult center-block clear-fix">
          <div class="use-or-consult-container pull-left clear-fix">
            <div class="icon pull-left">
              <img src="../assets/img/views/home/about-us-btn-use-product.png" alt="">
            </div>
            <div class="content pull-right">
              <h4 class="title">免费使用</h4>
              <p class="description">
                立即注册，成为 Uni 用户
                <br>
                免费试用 Uni-RPA
              </p>
              <el-button class="go-to-btn" type="primary" @click="$router.push('/uni-studio')">立即使用</el-button>
            </div>
          </div>
          <div class="use-or-consult-container pull-right clear-fix">
            <div class="icon pull-left">
              <img src="../assets/img/views/home/about-us-btn-business-consulting.png" alt="">
            </div>
            <div class="content pull-right">
              <el-dialog
                :visible.sync="isShowConsultFormDialog"
                width="40rem"
                :close-on-press-escape="false"
                :close-on-click-modal="false"
                :before-close="onConsultDialogBeforeClose"
              >
                <el-form
                  ref="consultDialogForm"
                  :model="consultDialogFormData"
                  :rules="consultDialogFormRules"
                >
                  <el-form-item label="您的姓名" prop="name">
                    <el-input v-model="consultDialogFormData.name" placeholder="请填写您的姓名"></el-input>
                  </el-form-item>
                  <el-form-item label="您的邮箱" prop="email">
                    <el-input v-model="consultDialogFormData.email" placeholder="请填写您的邮箱"></el-input>
                  </el-form-item>
                  <el-form-item label="您的电话" prop="mobilePhone">
                    <el-input v-model="consultDialogFormData.mobilePhone" placeholder="请填写您的电话"></el-input>
                  </el-form-item>
                  <el-form-item label="您的问题" prop="questionContent">
                    <el-input type="textarea" v-model="consultDialogFormData.questionContent" placeholder="请填写您想要咨询的问题"></el-input>
                  </el-form-item>
                  <el-form-item class="text-center">
                    <el-button type="primary" @click="submitConsultDialogForm">提交</el-button>
                    <el-button @click="resetConsultDialogForm">重置</el-button>
                  </el-form-item>
                </el-form>
              </el-dialog>
              <h4 class="title">业务咨询</h4>
              <p class="description">
                为客户提供特色定制服务
                <br>
                并提供专业的技术支持
              </p>
              <el-button class="go-to-btn" type="primary" @click="isShowConsultFormDialog = true">立即咨询</el-button>
            </div>
          </div>
        </div>
      </div>
    </div>
    <app-footer></app-footer>
  </div>
</template>

<script>
  import AppHeader from 'components/AppHeader'
  import AppFooter from 'components/AppFooter'
  import { Swiper, SwiperSlide } from 'vue-awesome-swiper'
  import solutionDetailHeaderImage1 from 'assets/img/views/home/solution-list-1.png'
  import solutionDetailHeaderImage2 from 'assets/img/views/home/solution-list-2.png'
  import solutionDetailHeaderImage3 from 'assets/img/views/home/solution-list-3.png'
  import solutionDetailHeaderImage4 from 'assets/img/views/home/solution-list-4.png'
  import accountService from 'service/account.service'

  export default {
    name: 'Home',
    components: {
      'app-header': AppHeader,
      'app-footer': AppFooter,
      'swiper': Swiper,
      'swiper-slide': SwiperSlide,
    },
    data() {
      const checkConsultDialogFormName = (rule, value, callback) => {
        if (!value) {
          callback(new Error('请输入您的姓名'))
        } else if (value.length > 30) {
          callback(new Error('长度在 30 个字符以内'))
        } else {
          callback()
        }
      }
      const checkConsultDialogFormEmail = (rule, value, callback) => {
        if (!value) {
          callback(new Error('请输入您的邮箱'))
        } else if (!/^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/.test(value)) {
          callback(new Error('邮箱格式不正确，请填写正确的邮箱地址'))
        } else {
          callback()
        }
      }
      const checkConsultDialogFormMobilePhone = (rule, value, callback) => {
        if (!value) {
          callback(new Error('请输入您的电话'))
        } else if (!/^1[0-9]{10}$/.test(value)) {
          callback(new Error('电话格式不正确，请填写正确的 11 位手机号码'))
        } else {
          callback()
        }
      }
      const checkConsultDialogFormQuestionContent = (rule, value, callback) => {
        if (!value) {
          callback(new Error('请输入您的问题'))
        } else if (value.length > 500) {
          callback(new Error('长度在 500 个字符以内'))
        } else {
          callback()
        }
      }
      return {
        appMarketUrl: process.env.VUE_APP_APP_MARKET_URL,
        bannerElCarouselContainerHeight: window.innerWidth > 768 ? '108.0rem' : '100vh',
        swiperOption: {
          slidesPerView: window.innerWidth > 768 ? 3 : 1,
          spaceBetween: window.innerWidth > 768 ? 24 : 24,
          autoplay: {
            delay: 3000,
            disableOnInteraction: false,
          },
          navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
          },
          pagination: {
            el: '.swiper-pagination',
            clickable: true,
          },
        },

        solutionDetailHeaderImage1: solutionDetailHeaderImage1,
        solutionDetailHeaderImage2: solutionDetailHeaderImage2,
        solutionDetailHeaderImage3: solutionDetailHeaderImage3,
        solutionDetailHeaderImage4: solutionDetailHeaderImage4,
        solutionDetailList: [
          {
            headerImage: solutionDetailHeaderImage1,
            title: 'ORACLE ERP RPA 业务场景',
            description: '收集发票并分类<br>将发票与货运和采购订单进行匹配<br>转换货币<br>分配 GL 代码<br>创建付款凭证<br>转换计量单位<br>创建新的销售订单<br>发送货运通知',
          },
          {
            headerImage: solutionDetailHeaderImage2,
            title: 'SAP ERP RPA 业务场景',
            description: 'SAP 发票录入 RPA 智能机器人<br>SAP 物料价格维护 RPA 智能机器人<br>SAP 汇率维护 RPA 智能机器人<br>SAP 输入供应商发票智能机器人<br>SAP 创建开票凭证智能机器人<br>SAP 输入收货通知单智能机器人',
          },
          {
            headerImage: solutionDetailHeaderImage3,
            title: 'RPA 在财务、税务领域应用',
            description: '合同录入 RPA 智能机器人<br>收入冲红调整 RPA 智能机器人<br>银企对账 RPA 智能机器人<br>批量开票 RPA 智能机器人<br>资金余额日报 RPA 智能机器人',
          },
          {
            headerImage: solutionDetailHeaderImage4,
            title: 'RPA 在人力资源使用',
            description: '学历验证 RPA 智能机器人<br>简历批量制作 RPA 智能机器人<br>项目资源配置及调整 RPA 智能机器人<br>文件解析 RPA 智能机器人',
          },
        ],
        isShowSolutionDetailDialog: false,
        currentShowSolutionDetailItem: {},

        isShowConsultFormDialog: false,
        consultDialogFormData: {
          name: '',
          email: '',
          mobilePhone: '',
          questionContent: '',
        },
        consultDialogFormRules: {
          name: [{required: true, validator: checkConsultDialogFormName, trigger: 'blur'}],
          email: [{required: true, validator: checkConsultDialogFormEmail, trigger: 'blur'}],
          mobilePhone: [{required: true, validator: checkConsultDialogFormMobilePhone, trigger: 'blur'}],
          questionContent: [{required: true, validator: checkConsultDialogFormQuestionContent, trigger: 'blur'}],
        },
      }
    },
    methods: {
      showSolutionDetail(index) {
        this.currentShowSolutionDetailItem = this.solutionDetailList[index]
        this.isShowSolutionDetailDialog = true
      },
      submitConsultDialogForm() {
        this.$refs['consultDialogForm'].validate((valid) => {
          if (valid) {
            accountService.ask(this.consultDialogFormData).then(response => {
              if (response.code === 200) {
                this.$alert('您提交的问题已收到，工作人员将在 3 个工作日内与您联系，请您留意短信和邮件通知', {
                  confirmButtonText: '我已知晓',
                  showClose: false,
                  center: true,
                  callback: action => {
                    if (action === 'confirm') {
                      this.onConsultDialogBeforeClose()
                    }
                  },
                })
              } else {
                this.$message.error('业务咨询提交失败，' + response.message)
              }
            })
          } else {
            return false
          }
        })
      },
      resetConsultDialogForm() {
        this.$refs['consultDialogForm'].resetFields()
      },
      onConsultDialogBeforeClose() {
        this.$refs['consultDialogForm'].resetFields()
        this.isShowConsultFormDialog = false
      },
    },
    mounted() {
      window.onresize = () => {
        this.bannerElCarouselContainerHeight = window.innerWidth > 768 ? '108.0rem' : '100vh'
      }
    },
  }
</script>

<style scoped lang="less">
  @import "../assets/css/variable-definitions";

  .home {

    .main {

      .banner {
        min-width: 144rem;

        @media screen and (max-width: @mobileWidth) {
          min-width: unset;
        }

        .banner-item-1 {
          background: url("../assets/img/views/home/banner-1-pc.png") center center no-repeat;
          background-color: #010a23;
          background-size: cover;

          .banner-item-1-container {
            width: 144rem;
            position: relative;

            @media screen and (max-width: @mobileWidth) {
              width: 100%;
            }

            .go-to-studio {
              width: 27.8rem;
              height: 8.8rem;
              font-size: 4rem;
              font-weight: 500;
              color: #FFFFFF;
              line-height: 5.6rem;
              position: absolute;
              left: .8rem;
              top: 63rem;
              display: none;

              @media screen and (max-width: @mobileWidth) {
                width: 80%;
                left: 10%;
                height: 5.6rem;
                font-size: 2.4rem;
                line-height: 1.4rem;
                top: 88vh;
              }
            }
          }
        }

        .banner-item-2 {
          background: url("../assets/img/views/home/banner-2-pc.jpg") center center no-repeat;
          background-color: #20a098;
          background-size: cover;

          .banner-item-2-container {
            width: 144rem;
            position: relative;

            @media screen and (max-width: @mobileWidth) {
              width: 100%;
            }

            .go-to-app-market {
              display: block;
              width: 48.9rem;
              height: 10.6rem;
              border-radius: 5.4rem;
              position: absolute;
              left: 44.9rem;
              top: 41.6rem;
              display: none;

              &:hover {
                border: .1rem solid #59d9c9;
              }

              @media screen and (max-width: @mobileWidth) {
                background: url("../assets/img/views/home/banner-2-mobile-button.png") center center no-repeat;
                background-size: contain;
                width: 60vw;
                height: 13vw;
                left: 20vw;
                top: 35vh;
              }
            }
          }
        }

        .banner-item-3 {
          background: url("../assets/img/views/home/banner-3-pc.png") center center no-repeat;
          background-color: #010a23;
          background-size: cover;
        }
      }

      .about-rpa {

        .about-rpa-container {
          width: 144rem;
          margin-top: 13.3rem;

          @media screen and (max-width: @mobileWidth) {
            width: 100%
          }

          .about-uni-rpa {

            @media screen and (max-width: @mobileWidth) {
              width: 90%;
              display: block;
              margin-left: auto;
              margin-right: auto;
            }

            .about-uni-rpa-left {

              .title {
                font-size: 6rem;
                font-weight: 800;
                color: #333333;
                line-height: 8.4rem;
                margin: 0;

                @media screen and (max-width: @mobileWidth) {
                  font-size: 3rem;
                  line-height: 4.2rem;
                  margin-top: -8rem;
                }
              }

              .spacer {
                width: 6rem;
                height: 1.7rem;
                background: #00A3AE;
                margin: 2.9rem 0 5.2rem 0;

                @media screen and (max-width: @mobileWidth) {
                  width: 3rem;
                  height: .8rem;
                  margin: 1.4rem 0 2.6rem 0;
                }
              }

              .description {
                width: 64rem;
                font-size: 1.8rem;
                font-weight: 400;
                color: #666666;
                line-height: 3.4rem;
                margin: 0;

                @media screen and (max-width: @mobileWidth) {
                  width: 100%;
                  display: block;
                  margin-left: auto;
                  margin-right: auto;
                }
              }
            }

            .about-uni-rpa-right {

              .image-framework {
                width: 75rem;
                height: 30rem;
                margin-top: 5rem;

                @media screen and (max-width: @mobileWidth) {
                  width: 90%;
                  height: 36%;
                  display: block;
                  margin-left: auto;
                  margin-right: auto;
                }
              }
            }
          }

          .rpa-superiority {
            margin-top: 7.6rem;
            margin-bottom: 17.1rem;

            @media screen and (max-width: @mobileWidth) {
              width: 90%;
              margin-top: 4.8rem;
              margin-bottom: 5.6rem;
              display: block;
              margin-left: auto;
              margin-right: auto;
            }

            .title {
              font-size: 6rem;
              font-weight: 800;
              color: #333333;
              line-height: 8.4rem;
              margin: 0;

              @media screen and (max-width: @mobileWidth) {
                font-size: 3rem;
                line-height: 4.2rem;
              }
            }

            .spacer {
              width: 6rem;
              height: 1.7rem;
              background: #00A3AE;
              margin: 2.1rem 0 6.5rem 0;

              @media screen and (max-width: @mobileWidth) {
                width: 3rem;
                height: .8rem;
                margin: 1rem 0 3.2rem 0;
              }
            }

            .superiority-list {

              ul {
                display: flex;
                flex-flow: row nowrap;
                justify-content: center;

                @media screen and (max-width: @mobileWidth) {
                  display: block;
                  flex-flow: unset;
                  justify-content: unset;
                }

                li {

                  &:not(:first-child) {
                    margin-left: 3.2rem;

                    @media screen and (max-width: @mobileWidth) {
                      margin-left: 0;
                    }
                  }

                  .container {
                    width: 26.4rem;
                    height: 39.1rem;
                    text-align: center;
                    box-shadow: 0 .5rem 1rem #e7e7e7;

                    &:hover {
                      cursor: pointer;
                      box-shadow: 0 .5rem 1rem #d4d4d4;
                    }

                    @media screen and (max-width: @mobileWidth) {
                      width: 100%;
                      height: 12rem;
                      text-align: unset;
                      margin-bottom: 1.6rem;
                    }

                    img {
                      width: 12rem;
                      height: 12rem;
                      margin-top: 8.4rem;
                      margin-bottom: 2.6rem;

                      @media screen and (max-width: @mobileWidth) {
                        width: 8rem;
                        height: 8rem;
                        margin-top: 1.8rem;
                        margin-bottom: 0;
                        margin-left: 4.8rem;
                      }
                    }

                    p {
                      font-size: 1.8rem;
                      font-weight: 400;
                      color: #666666;
                      line-height: 3.3rem;
                      margin: 0 1rem;

                      @media screen and (max-width: @mobileWidth) {
                        margin-top: -7.6rem;
                        margin-left: 14.6rem;
                        margin-right: 1.6rem;
                        text-align: center;
                        overflow: hidden; //超出的文本隐藏
                        text-overflow: ellipsis; //溢出用省略号显示
                        white-space: nowrap; //溢出不换行
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }

      .production {

        .production-title {
          height: 80rem;
          background: url("../assets/img/views/home/product-title.png") center center no-repeat;
          background-color: #01151a;
          min-width: 144rem;
          background-size: cover;
          text-align: center;

          @media screen and (max-width: @mobileWidth) {
            background-size: cover;
            height: 26.6rem;
            min-width: unset;
          }

          .title {
            font-size: 10rem;
            line-height: 70rem;

            @media screen and (max-width: @mobileWidth) {
              font-size: 4rem;
              line-height: 25rem;
            }
          }
        }

        .uni-studio {

          .container {
            width: 144rem;

            @media screen and (max-width: @mobileWidth) {
              width: 90%;
            }

            .studio-section-left {
              margin-top: 16.5rem;
              margin-bottom: 12.1rem;

              @media screen and (max-width: @mobileWidth) {
                margin-top: 5.6rem;
                margin-bottom: 4.8rem;
              }

              .title {
                font-size: 4rem;
                font-weight: 800;
                color: #333333;
                line-height: 8.4rem;
                margin: 0;

                @media screen and (max-width: @mobileWidth) {
                  font-size: 3rem;
                  line-height: 6.4rem;
                }

                .emphasize {
                  color: #00A3AE;
                }
              }

              .abstract {
                font-size: 3rem;
                font-weight: 500;
                color: #333333;
                line-height: 3.7rem;
                margin: .1rem 0 1rem 0;

                @media screen and (max-width: @mobileWidth) {
                  font-size: 2.2rem;
                }
              }

              ul {

                li {
                  font-size: 1.8rem;
                  font-weight: 400;
                  color: #666666;
                  line-height: 2.8rem;
                  margin-top: 2.8rem;
                  width: 57rem;

                  @media screen and (max-width: @mobileWidth) {
                    width: 100%;
                  }

                  &:before {
                    display: inline-block;
                    content: "";
                    width: 1.2rem;
                    height: 1.2rem;
                    background: #00A3AE;
                    margin-right: 1.2rem;
                  }
                }
              }

              .go-to-studio {
                width: 16rem;
                height: 4.4rem;
                font-size: 1.8rem;
                font-weight: 500;
                line-height: 1.4rem;
                color: #FFFFFF;
                margin-top: 4.7rem;
              }
            }

            .studio-section-right {
              margin-top: 16.5rem;

              @media screen and (max-width: @mobileWidth) {
                margin-top: 0;
              }

              img {
                width: 87rem;
                height: 56rem;

                @media screen and (max-width: @mobileWidth) {
                  width: 100%;
                  height: 100%;
                }
              }
            }
          }
        }

        .production-split-1 {
          height: 15.1rem;
          background: url("../assets/img/views/home/product-split-right.png") right bottom no-repeat;
          background-size: contain;
          min-width: 144rem;

          @media screen and (max-width: @mobileWidth) {
            height: 8rem;
            min-width: unset;
          }
        }

        .uni-workforce {
          background-color: #f6fbfd;

          .container {
            width: 144rem;

            @media screen and (max-width: @mobileWidth) {
              width: 90%;
            }

            .workforce-section-left {
              margin-top: 14.8rem;

              @media screen and (max-width: @mobileWidth) {
                margin-top: 5.6rem;
              }

              img {
                width: 76rem;
                height: 56rem;
                margin-left: -4.8rem;

                @media screen and (max-width: @mobileWidth) {
                  width: 100%;
                  height: 100%;
                  margin-left: 0;
                }
              }
            }

            .workforce-section-right {
              margin-top: 21.8rem;
              margin-bottom: 21rem;

              @media screen and (max-width: @mobileWidth) {
                width: 100%;
                margin-top: 4.8rem;
                margin-bottom: 5.6rem;
              }

              .title {
                font-size: 4rem;
                font-weight: 800;
                color: #333333;
                line-height: 8.4rem;
                margin: 0;

                @media screen and (max-width: @mobileWidth) {
                  font-size: 3rem;
                  line-height: 6.4rem;
                }

                .emphasize {
                  color: #00A3AE;
                }
              }

              .abstract {
                font-size: 3rem;
                font-weight: 500;
                color: #333333;
                line-height: 3.7rem;
                margin: .1rem 0 1rem 0;

                @media screen and (max-width: @mobileWidth) {
                  font-size: 2.2rem;
                }
              }

              ul {

                li {
                  font-size: 1.8rem;
                  font-weight: 400;
                  color: #666666;
                  line-height: 2.8rem;
                  margin-top: 2.8rem;
                  width: 62rem;

                  @media screen and (max-width: @mobileWidth) {
                    width: 100%;
                  }

                  &:before {
                    display: inline-block;
                    content: "";
                    width: 1.2rem;
                    height: 1.2rem;
                    background: #00A3AE;
                    margin-right: 1.2rem;
                  }
                }
              }
            }
          }
        }

        .uni-control-center {

          .container {
            width: 144rem;

            @media screen and (max-width: @mobileWidth) {
              width: 90%;
            }

            .control-center-section-left {
              margin-top: 16rem;
              margin-bottom: 8rem;

              @media screen and (max-width: @mobileWidth) {
                margin-top: 5.6rem;
                margin-bottom: 4.8rem;
              }

              .title {
                font-size: 4rem;
                font-weight: 800;
                color: #333333;
                line-height: 8.4rem;
                margin: 0;

                @media screen and (max-width: @mobileWidth) {
                  font-size: 3rem;
                  line-height: 6.4rem;
                }

                .emphasize {
                  color: #00A3AE;
                }
              }

              .abstract {
                font-size: 3rem;
                font-weight: 500;
                color: #333333;
                line-height: 3.7rem;
                margin: .1rem 0 1rem 0;

                @media screen and (max-width: @mobileWidth) {
                  font-size: 2.2rem;
                }
              }

              ul {

                li {
                  font-size: 1.8rem;
                  font-weight: 400;
                  color: #666666;
                  line-height: 2.8rem;
                  margin-top: 2.8rem;
                  width: 58rem;

                  @media screen and (max-width: @mobileWidth) {
                    width: 100%;
                  }

                  &:before {
                    display: inline-block;
                    content: "";
                    width: 1.2rem;
                    height: 1.2rem;
                    background: #00A3AE;
                    margin-right: 1.2rem;
                  }
                }
              }

              .go-to-control-center {
                width: 16rem;
                height: 4.4rem;
                font-size: 1.8rem;
                font-weight: 500;
                line-height: 1.4rem;
                color: #FFFFFF;
                margin-top: 4.7rem;
              }
            }

            .control-center-section-right {
              margin-top: 17.4rem;

              @media screen and (max-width: @mobileWidth) {
                margin-top: 2.4rem;
                margin-bottom: 4.8rem;
              }

              img {
                width: 72rem;
                height: 53rem;

                @media screen and (max-width: @mobileWidth) {
                  width: 100%;
                  height: 100%;
                }
              }
            }
          }
        }

        .production-split-2 {
          height: 19rem;
          background: url("../assets/img/views/home/product-split-left.png") left bottom no-repeat;
          background-size: contain;
          margin-bottom: 6.6rem;
          min-width: 144rem;

          @media screen and (max-width: @mobileWidth) {
            height: 8rem;
            min-width: unset;
          }
        }
      }

      .solution {

        .solution-detail-dialog {

          .header-image {
            width: 100%;
          }

          .title {
            font-size: 3rem;
            font-weight: 500;
            color: #333333;
            line-height: 4.2rem;
            margin: 4.8rem 0 0 .8rem;
          }

          .spacer {
            width: 4rem;
            height: 1rem;
            background: #00A3AE;
            margin: 1.6rem 0 3.7rem .8rem;
          }

          .description {
            font-size: 1.8rem;
            font-weight: 400;
            color: #666666;
            line-height: 3.4rem;
            margin: 0 .8rem;
          }
        }

        .solution-title {
          height: 64.2rem;
          background: url("../assets/img/views/home/solution-title.png") center center no-repeat;
          background-color: #2e3238;
          min-width: 144rem;
          background-size: cover;
          text-align: center;

          @media screen and (max-width: @mobileWidth) {
            background-size: cover;
            height: 21.4rem;
            min-width: unset;
          }

          .title {
            font-size: 10rem;
            line-height: 60rem;

            @media screen and (max-width: @mobileWidth) {
              font-size: 4rem;
              line-height: 20rem;
            }
          }
        }

        .solution-container {
          width: 144rem;
          overflow: hidden;

          @media screen and (max-width: @mobileWidth) {
            width: 100%;
          }

          .solution-swiper {
            height: 80rem;
            width: 143rem;
            margin-top: 13.7rem;
            margin-bottom: 22.4rem;
            overflow: visible;

            @media screen and (max-width: @mobileWidth) {
              width: 90%;
              margin-top: 5.6rem;
              margin-bottom: 4.8rem;
            }

            .swiper-slide {
              height: 85%;
              box-shadow: 0 .5rem 1rem #e7e7e7;

              &:hover {
                cursor: pointer;
                box-shadow: 0 .5rem 1rem #d4d4d4;
              }

              .header-image {
                width: 100%;
              }

              .title {
                font-size: 3rem;
                font-weight: 500;
                color: #333333;
                line-height: 4.2rem;
                margin: 4.8rem 0 0 3.2rem;
              }

              .spacer {
                width: 4rem;
                height: 1rem;
                background: #00A3AE;
                margin: 1.6rem 0 3.7rem 3.2rem;
              }

              .description {
                font-size: 1.8rem;
                font-weight: 400;
                color: #666666;
                line-height: 3.4rem;
                margin: 0 3.2rem;
                overflow: hidden;
                text-overflow: ellipsis;
                display: -webkit-box;
                -webkit-box-orient: vertical;
                -webkit-line-clamp: 4;
                word-wrap: break-word;
                word-break: break-all;
              }

              .show-detail {
                width: 16rem;
                height: 4.4rem;
                font-size: 1.8rem;
                font-weight: 400;
                line-height: 1.4rem;
                position: absolute;
                right: 4.2rem;
                margin-top: 3rem;
              }
            }
          }
        }
      }

      .about-us {

        .about-us-title {
          height: 64.2rem;
          background: url("../assets/img/views/home/about-us-title.jpg") center center no-repeat;
          background-color: #0c1421;
          min-width: 144rem;
          background-size: cover;
          text-align: center;

          @media screen and (max-width: @mobileWidth) {
            background-size: cover;
            height: 21.4rem;
            min-width: unset;
          }

          .title {
            font-size: 10rem;
            line-height: 60rem;

            @media screen and (max-width: @mobileWidth) {
              font-size: 4rem;
              line-height: 20rem;
            }
          }
        }

        .company-introduction {
          width: 144rem;

          @media screen and (max-width: @mobileWidth) {
            width: 90%;
          }

          .company-introduction-section-left {
            width: 61.5rem;

            @media screen and (max-width: @mobileWidth) {
              width: 100%;
            }

            .title {
              font-size: 3rem;
              font-weight: 500;
              color: #333333;
              line-height: 4.5rem;
              margin: 20.5rem 0 0 0;

              &:before {
                content: "";
                display: inline-block;
                width: 1rem;
                height: 3rem;
                background: #00A3AE;
                margin-right: 1.6rem;
                margin-bottom: -0.5rem;
              }

              @media screen and (max-width: @mobileWidth) {
                margin: 5.6rem 0 0 0;

                &:before {
                  width: .8rem;
                  margin-right: 1rem;
                }
              }
            }

            .description {
              font-size: 1.8rem;
              font-weight: 400;
              color: #666666;
              line-height: 3.4rem;
              margin: 4.2rem 0 0 0;

              @media screen and (max-width: @mobileWidth) {
                margin: 1.2rem 0 0 0;
              }
            }
          }

          .company-introduction-section-right {

            img {
              width: 76.4rem;
              height: 54.8rem;
              height: 24rem;
              margin-top: 25.2rem;

              @media screen and (max-width: @mobileWidth) {
                width: 100%;
                height: 100%;
                margin-top: 2.4rem;
              }
            }
          }
        }

        .development-path {
          width: 144rem;
          display: none;

          @media screen and (max-width: @mobileWidth) {
            width: 90%;
          }

          .title {
            font-size: 3rem;
            font-weight: 500;
            color: #333333;
            line-height: 4.5rem;
            margin: 0;
            padding-top: 7.4rem;

            &:before {
              content: "";
              display: inline-block;
              width: 1rem;
              height: 3rem;
              background: #00A3AE;
              margin-right: 1.6rem;
              margin-bottom: -0.5rem;
            }

            @media screen and (max-width: @mobileWidth) {

              &:before {
                width: .8rem;
                margin-right: 1rem;
              }
            }
          }

          .development-path-image {
            background-image: url("../assets/img/views/home/about-us-development-path-pc.png");
            background-repeat: no-repeat;
            background-size: contain;
            width: 100%;
            height: 25.1rem;
            margin-top: 6.2rem;

            @media screen and (max-width: @mobileWidth) {
              background-image: url("../assets/img/views/home/about-us-development-path-mobile.png");
              background-position-x: center;
              height: 50rem;
            }
          }
        }

        .team-introduction {
          width: 144rem;
          display: none;

          @media screen and (max-width: @mobileWidth) {
            width: 90%;
          }

          .team-introduction-section-left {

            img {
              width: 71.2rem;
              height: 40rem;
              margin-top: 14.5rem;

              @media screen and (max-width: @mobileWidth) {
                width: 100%;
                height: 100%;
                margin-top: 4.8rem;
              }
            }
          }

          .team-introduction-section-right {
            width: 66.6rem;

            @media screen and (max-width: @mobileWidth) {
              width: 100%;
            }

            .title {
              font-size: 3rem;
              font-weight: 500;
              color: #333333;
              line-height: 4.5rem;
              margin: 14.7rem 0 0 0;

              &:after {
                content: "";
                display: block;
                width: 3rem;
                height: 1.1rem;
                background: #00A3AE;
                margin-top: 1.6rem;
              }

              @media screen and (max-width: @mobileWidth) {
                margin: 4.8rem 0 0 0;

                &:after {
                  height: .8rem;
                  margin-top: 1rem;
                }
              }
            }

            .description {
              font-size: 1.8rem;
              font-weight: 400;
              color: #666666;
              line-height: 3.4rem;
              margin: 4.2rem 0 0 0;

              @media screen and (max-width: @mobileWidth) {
                margin: 1.6rem 0 0 0;
              }
            }
          }
        }

        .use-and-consult {
          width: 144rem;
          margin-bottom: 15.1rem;

          @media screen and (max-width: @mobileWidth) {
            width: 90%;
          }

          .use-or-consult-container {
            padding: 0 4rem;

            @media screen and (max-width: @mobileWidth) {
              float: unset;
            }

            .icon {
              margin-top: 16rem;

              @media screen and (max-width: @mobileWidth) {
                width: 100%;
                text-align: center;
                margin-top: 5.6rem;
              }

              img {
                width: 25.6rem;
                height: 25.6rem;

                @media screen and (max-width: @mobileWidth) {
                  width: 15.6rem;
                  height: 15.6rem;
                }
              }
            }

            .content {
              margin-top: 15.1rem;
              margin-left: 7.2rem;

              @media screen and (max-width: @mobileWidth) {
                width: 100%;
                text-align: center;
                margin-top: 2.4rem;
                margin-left: 0;
              }

              .title {
                font-size: 2.8rem;
                font-weight: bold;
                color: #333333;
                line-height: 4rem;
                margin: 0;
              }

              .description {
                font-size: 1.8rem;
                font-weight: 400;
                color: #666666;
                line-height: 3.4rem;
                margin: 4rem 0 0 0;

                @media screen and (max-width: @mobileWidth) {
                  margin-top: .8rem;
                }
              }

              .go-to-btn {
                width: 16rem;
                height: 4.4rem;
                font-size: 1.8rem;
                font-weight: bold;
                color: #FFFFFF;
                margin-top: 7.2rem;

                @media screen and (max-width: @mobileWidth) {
                  margin-top: .8rem;
                }
              }
            }
          }
        }
      }
    }
  }
</style>

<style lang="less">
  .home {

    .main {

      .solution {

        .solution-container {

          .solution-swiper {

            .swiper-slide {

              .is-plain {
                color: #09AEBA;
                background: white;
              }
            }

            .swiper-pagination {

              .swiper-pagination-bullet {
                width: 2rem;
                height: 2rem;
                margin: 0 3rem;
              }

              .swiper-pagination-bullet-active {
                background: #1ba4ae;
              }
            }
          }
        }
      }
    }
  }
</style>
