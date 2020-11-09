<template>
  <div class="uni-studio">
    <el-dialog
      class="apply-try-dialog"
      :visible.sync="isShowApplyTryFormDialog"
      :append-to-body="true"
      title="获取社区版 Studio 试用授权"
      :center="true"
      width="40rem"
      top="5vh"
      :close-on-press-escape="false"
      :close-on-click-modal="false"
      :before-close="onApplyTryDialogBeforeClose"
    >
      <el-form
        class="apply-try-dialog-form"
        ref="applyTryDialogForm"
        :model="applyTryDialogFormData"
        :rules="applyTryDialogFormRules"
      >
        <el-form-item label="您的姓名" prop="name">
          <el-input type="text" v-model="applyTryDialogFormData.name" size="medium"></el-input>
        </el-form-item>
        <el-form-item label="工作电话" prop="mobilePhone">
          <el-input type="tel" v-model="applyTryDialogFormData.mobilePhone" size="medium"></el-input>
        </el-form-item>
        <el-form-item prop="verificationCode">
          <el-input type="tel" v-model="applyTryDialogFormData.verificationCode" size="medium">
            <el-button
              slot="append"
              @click="onGetVerificationCodeClick"
              :disabled="getVerificationCodeBtnIsDisabled"
            >
              {{ getVerificationCodeBtnText }}
            </el-button>
          </el-input>
        </el-form-item>
        <el-form-item label="工作邮箱" prop="email">
          <el-input type="email" v-model="applyTryDialogFormData.email" size="medium"></el-input>
        </el-form-item>
        <el-form-item label="专业领域" prop="professionalField">
          <el-select class="select-input" v-model="applyTryDialogFormData.professionalField" size="medium">
            <el-option
              v-for="(option, index) in professionalFieldOptions"
              :key="index"
              :value="option.value"
              :label="option.label"
            >
            </el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="公司名称" prop="companyName">
          <el-input type="text" v-model="applyTryDialogFormData.companyName" size="medium"></el-input>
        </el-form-item>
        <el-form-item label="所在行业" prop="sectorCategory">
          <el-select class="select-input" v-model="applyTryDialogFormData.sectorCategory" size="medium">
            <el-option
              v-for="(option, index) in sectorCategoryOptions"
              :key="index"
              :value="option.value"
              :label="option.label"
            >
            </el-option>
          </el-select>
        </el-form-item>
        <el-checkbox class="agreement-checkbox" v-model="agreementIsChecked"></el-checkbox>
        <p class="agreement-description">
          我确认已阅读并同意
          <a
            :href="callbackUrl + '/agreement-document/studio-license-agreement.html'"
            target="_blank"
          >
            Uni Studio 软件许可协议
          </a>
          的内容，并愿意接收 Uni Studio
          根据我的个人兴趣和偏好量身定制的信息，包括但不限于产品介绍、服务、活动和促销内容等。如需获知更多详情，请查看
          <a
            :href="callbackUrl + '/agreement-document/privacy-policy.html'"
            target="_blank"
          >
            隐私政策
          </a>
          。
        </p>
        <el-form-item class="form-operation text-center">
          <el-button type="primary" @click="submitApplyTryDialogForm">提交</el-button>
          <el-button @click="resetApplyTryDialogForm">重置</el-button>
        </el-form-item>
      </el-form>
    </el-dialog>
    <app-header></app-header>
    <div class="main">
      <div class="banner">
        <div class="banner-container center-block">
          <div class="background-decoration">
            <img class="decoration-image-1" src="../assets/img/views/uni-studio/banner-decoration-1.png" alt="">
            <img class="decoration-image-2" src="../assets/img/views/uni-studio/banner-decoration-2.png" alt="">
            <img class="decoration-image-3" src="../assets/img/views/uni-studio/banner-decoration-3.png" alt="">
          </div>
          <div class="content">
            <h1 class="title">Uni 企业级 RPA 平台</h1>
            <h2 class="emphases-title">免费开始试用</h2>
            <p class="description">社区版免费试用，可随时 <span class="emphases">升级</span> 到企业版</p>
            <p class="version-info">当前安装包版本号：[3.1.0] / 更新日期：2020.05.11</p>
            <el-button class="go-to-try" @click="isShowApplyTryFormDialog = true">申请试用</el-button>
          </div>
        </div>
      </div>
      <div class="community">
        <div class="community-container center-block clear-fix">
          <div class="community-section-left pull-left">
            <div class="background-decoration">
              <img class="decoration-image" src="../assets/img/views/uni-studio/community-decoration.png" alt="">
            </div>
            <div class="content">
              <h1 class="title">社区版</h1>
              <p class="description">
                适用于个人和小型团队
                <br>
                免费试用 3 个月，可多次申请授权许可
              </p>
              <el-button class="go-to-try" type="primary" @click="isShowApplyTryFormDialog = true">申请试用</el-button>
            </div>
          </div>
          <div class="community-section-right pull-right">
            <img src="../assets/img/views/uni-studio/community-app-preview.png" alt="">
          </div>
        </div>
      </div>
      <div class="enterprise">
        <div class="enterprise-container center-block clear-fix">
          <div class="enterprise-section-right pull-right">
            <div class="background-decoration">
              <img class="decoration-image" src="../assets/img/views/uni-studio/enterprise-decoration.png" alt="">
            </div>
            <div class="content">
              <h1 class="title">企业版</h1>
              <p class="description">
                适用于企业
                <br>
                提供全面的管控权限及定制化支持服务
                <br>
                可从社区版随时 <span class="emphases">升级</span> 到企业版
              </p>
              <el-button class="go-to-try" type="primary" @click="onContactCustomerServiceClick">联系客服</el-button>
            </div>
          </div>
          <div class="enterprise-section-left pull-left">
            <img src="../assets/img/views/uni-studio/enterprise-app-preview.png" alt="">
          </div>
        </div>
      </div>
      <div class="function-and-prise">
        <div class="function-and-prise-container center-block">
          <div class="title">
            <h1>Uni 企业级 RPA 平台</h1>
            <h2>功能与价格介绍</h2>
            <p>社区版免费试用，可随时升级至企业版 <span>，</span><br>即刻开启您的数字化转型之旅</p>
          </div>
          <div class="content">
            <div class="shade"></div>
            <div class="column1">
              <h2>功能</h2>
              <p>免费试用期</p>
              <p>设计器</p>
              <p>自动化产能</p>
              <p>软件更新</p>
              <p>培训方式</p>
              <p>支持服务</p>
              <p>激活方式</p>
            </div>
            <div class="column2">
              <h1 style="background-color: #ffcd2a;">社区版</h1>
              <p>3 个月</p>
              <p>社区版许可证</p>
              <p>1 个数字员工</p>
              <p>由 Uni 管理更新</p>
              <p>在线培训</p>
              <p>免费论坛支持</p>
              <p>在线激活</p>
              <button @click="isShowApplyTryFormDialog = true">申请试用</button>
            </div>
            <br class="mobile-return">
            <div class="column1-1">
              <h2>功能</h2>
              <p>免费试用期</p>
              <p>设计器</p>
              <p>自动化产能</p>
              <p>软件更新</p>
              <p>培训方式</p>
              <p>支持服务</p>
              <p>激活方式</p>
            </div>
            <div class="column3">
              <h1 style="background-color: #00bcc5;">企业版</h1>
              <p>——</p>
              <p>企业授权的许可证</p>
              <p>1 个数字员工</p>
              <p>企业自主管理更新</p>
              <p>定制化的现场培训</p>
              <p>具备服务协议的工单支持</p>
              <p>离线激活</p>
              <button @click="onContactCustomerServiceClick">联系客服</button>
            </div>
          </div>
        </div>
      </div>
      <div class="contact-customer-service text-center">
        <p>联系客服：business@cn-tianxing.com</p>
      </div>
    </div>
  </div>
</template>

<script>
  import AppHeader from 'components/AppHeader'
  import accountService from 'service/account.service'

  export default {
    name: 'UniStudio',
    components: {
      'app-header': AppHeader,
    },
    data() {
      const checkApplyTryDialogFormName = (rule, value, callback) => {
        if (!value) {
          callback(new Error('请输入您的姓名'))
        } else if (value.length > 30) {
          callback(new Error('长度在 30 个字符以内'))
        } else {
          callback()
        }
      }
      const checkApplyTryDialogFormMobilePhone = (rule, value, callback) => {
        if (!value) {
          callback(new Error('请输入您的电话'))
        } else if (!/^1[0-9]{10}$/.test(value)) {
          callback(new Error('电话格式不正确，请填写正确的 11 位手机号码'))
        } else {
          callback()
        }
      }
      const checkApplyTryDialogFormVerificationCode = (rule, value, callback) => {
        if (!value) {
          callback(new Error('请获取并输入验证码'))
        } else if (!/^[0-9]{6}$/.test(value)) {
          callback(new Error('验证码格式为 6 位数字'))
        } else {
          callback()
        }
      }
      const checkApplyTryDialogFormEmail = (rule, value, callback) => {
        if (!value) {
          callback(new Error('请输入您的邮箱'))
        } else if (!/^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/.test(value)) {
          callback(new Error('邮箱格式不正确，请填写正确的邮箱地址'))
        } else {
          callback()
        }
      }
      const checkApplyTryDialogFormProfessionalField = (rule, value, callback) => {
        if (!value && value !== 0 && value !== '0') {
          callback(new Error('请选择专业领域'))
        } else {
          callback()
        }
      }
      const checkApplyTryDialogFormCompanyName = (rule, value, callback) => {
        if (!value) {
          callback(new Error('请输入公司名称'))
        } else if (value.length > 30) {
          callback(new Error('长度在 30 个字符以内'))
        } else {
          callback()
        }
      }
      const checkApplyTryDialogFormSectorCategory = (rule, value, callback) => {
        if (!value && value !== 0 && value !== '0') {
          callback(new Error('请选择所在行业'))
        } else {
          callback()
        }
      }
      return {
        callbackUrl: process.env.VUE_APP_CALLBACK_URL,

        isShowApplyTryFormDialog: false,
        getVerificationCodeInterval: null,
        getVerificationCodeBtnText: '获取验证码',
        getVerificationCodeBtnIsDisabled: false,
        agreementIsChecked: false,
        professionalFieldOptions: [
          {label: '会计与财务', value: 0},
          {label: '产品', value: 1},
          {label: '人力资源', value: 2},
          {label: '市场与传播', value: 3},
          {label: 'IT/开发者/工程师', value: 4},
          {label: '法律', value: 5},
          {label: '采购', value: 6},
          {label: '销售', value: 7},
          {label: '行政', value: 8},
          {label: '分析师/咨询师/顾问', value: 9},
          {label: '其他', value: 10},
        ],
        sectorCategoryOptions: [
          {label: '汽车', value: 0},
          {label: '服装', value: 1},
          {label: '银行与金融服务', value: 2},
          {label: '生物技术', value: 3},
          {label: '化工', value: 4},
          {label: '通信', value: 5},
          {label: '建筑', value: 6},
          {label: '咨询', value: 7},
          {label: '教育', value: 8},
          {label: '电子', value: 9},
          {label: '能源', value: 10},
          {label: '工程', value: 11},
          {label: '娱乐', value: 12},
          {label: '环保', value: 13},
          {label: '金融服务', value: 14},
          {label: '食品饮料', value: 15},
          {label: '政府', value: 16},
          {label: '医疗保健', value: 17},
          {label: '医疗主管单位', value: 18},
          {label: '医疗研究机构', value: 19},
          {label: '医疗保健公司', value: 20},
          {label: '医疗机构', value: 21},
          {label: '日用家化', value: 22},
          {label: '酒店服务', value: 23},
          {label: '化工原料', value: 24},
          {label: '信息技术与服务', value: 25},
          {label: '保险', value: 26},
          {label: '法律', value: 27},
          {label: '机械', value: 28},
          {label: '制造业', value: 29},
          {label: '媒体', value: 30},
          {label: '公益', value: 31},
          {label: '制药', value: 32},
          {label: '休闲', value: 33},
          {label: '零售', value: 34},
          {label: '人事&招聘服务', value: 35},
          {label: '公共领域', value: 36},
          {label: '技术', value: 37},
          {label: '电信', value: 38},
          {label: '运输', value: 39},
          {label: '基建和公共事业', value: 40},
          {label: '其他', value: 41},
        ],
        applyTryDialogFormData: {
          name: '',
          mobilePhone: '',
          verificationCode: '',
          email: '',
          professionalField: '',
          companyName: '',
          sectorCategory: '',
        },
        applyTryDialogFormRules: {
          name: [{required: true, validator: checkApplyTryDialogFormName, trigger: 'blur'}],
          mobilePhone: [{required: true, validator: checkApplyTryDialogFormMobilePhone, trigger: 'blur'}],
          verificationCode: [{required: true, validator: checkApplyTryDialogFormVerificationCode, trigger: 'blur'}],
          email: [{required: true, validator: checkApplyTryDialogFormEmail, trigger: 'blur'}],
          professionalField: [{required: true, validator: checkApplyTryDialogFormProfessionalField, trigger: 'blur'}],
          companyName: [{required: true, validator: checkApplyTryDialogFormCompanyName, trigger: 'blur'}],
          sectorCategory: [{required: true, validator: checkApplyTryDialogFormSectorCategory, trigger: 'blur'}],
        },
      }
    },
    methods: {
      onGetVerificationCodeClick() {
        if (!this.applyTryDialogFormData.mobilePhone) {
          this.$message.warning('请输入您的电话')
          return
        }
        if (!/^1[0-9]{10}$/.test(this.applyTryDialogFormData.mobilePhone)) {
          this.$message.warning('电话格式不正确，请填写正确的 11 位手机号码')
          return
        }
        const data = {
          mobilePhone: this.applyTryDialogFormData.mobilePhone,
        }
        accountService.send(data).then(response => {
          if (response.code === 200) {
            let seconds = 60
            this.getVerificationCodeBtnIsDisabled = true
            this.getVerificationCodeBtnText = '60s后重新发送'
            this.getVerificationCodeInterval = setInterval(() => {
              seconds--
              this.getVerificationCodeBtnText = seconds + 's后重新发送'
              if (seconds < 1) {
                clearInterval(this.getVerificationCodeInterval)
                this.getVerificationCodeBtnIsDisabled = false
                this.getVerificationCodeBtnText = '获取验证码'
              }
            }, 1000)
          } else {
            this.$message.error('获取验证码失败，' + response.message)
            console.log(response)
          }
        })
      },
      submitApplyTryDialogForm() {
        this.$refs['applyTryDialogForm'].validate((valid) => {
          if (valid) {
            if (this.agreementIsChecked) {
              accountService.apply(this.applyTryDialogFormData).then(response => {
                if (response.code === 200) {
                  this.$alert('您的试用申请已提交，工作人员将在 3 个工作日内完成审核，请您留意短信和邮件通知', {
                    confirmButtonText: '我已知晓',
                    showClose: false,
                    center: true,
                    callback: action => {
                      if (action === 'confirm') {
                        this.onApplyTryDialogBeforeClose()
                      }
                    },
                  })
                } else {
                  this.$message.error('申请试用提交失败，' + response.message)
                }
              })
            } else {
              this.$message.warning('请阅读并勾选同意产品协议与隐私政策')
            }
          } else {
            return false
          }
        })
      },
      resetApplyTryDialogForm() {
        this.$refs['applyTryDialogForm'].resetFields()
      },
      onApplyTryDialogBeforeClose() {
        this.$refs['applyTryDialogForm'].resetFields()
        this.isShowApplyTryFormDialog = false
      },
      onContactCustomerServiceClick() {
        this.$alert('即将启动本机默认邮件客户端向我们发送邮件，如未安装邮件程序等原因导致启动失败，可直接通过页面底部客服邮件地址与我们联系，感谢您的关注', {
          confirmButtonText: '去发送邮件',
          center: true,
          callback: action => {
            if (action === 'confirm') {
              let to = 'business@cn-tianxing.com'
              let subject = '【申请 Uni Studio 企业版授权】'
              let body = '请填写您的基本信息及联系方式，方便我们与您联系%0A%0A%0A' +
                '姓名：%0A%0A' +
                '工作电话：%0A%0A' +
                '工作邮箱：%0A%0A' +
                '公司名称：%0A%0A' +
                '%0A%0A我们的工作人员将在 3 个工作日内完成审核并第一时间与您联系，请您留意短信和邮件通知并保持电话畅通！%0A%0A'
              window.open('mailto:' + to + '?subject=' + subject + '&body=' + body)
            }
          },
        })
      },
    },
  }
</script>

<style scoped lang="less">
  @import "../assets/css/variable-definitions";

  .uni-studio {

    .main {

      .banner {
        height: 108rem;
        background-color: #1ba3b0;
        min-width: 144rem;

        @media screen and (max-width: @mobileWidth) {
          height: 100vh;
          min-width: unset;
        }

        .banner-container {
          width: 144rem;
          display: flex;

          @media screen and (max-width: @mobileWidth) {
            width: 100%;
          }

          .background-decoration {
            position: relative;

            .decoration-image-1 {
              position: absolute;
              width: 15.3rem;
              height: 35.7rem;
              left: 38rem;
              top: 7rem;

              @media screen and (max-width: @mobileWidth) {
                width: 6rem;
                height: 14rem;
                left: 4rem;
                top: 12vh;
              }
            }

            .decoration-image-2 {
              position: absolute;
              width: 19.2rem;
              height: 50.3rem;
              left: 56rem;
              top: 10rem;

              @media screen and (max-width: @mobileWidth) {
                width: 7rem;
                height: 18.3rem;
                left: 14rem;
                top: 18vh;
              }
            }

            .decoration-image-3 {
              position: absolute;
              width: 88.2rem;
              height: 74.8rem;
              left: 56rem;
              top: 18rem;

              @media screen and (max-width: @mobileWidth) {
                width: 30rem;
                height: 25.4rem;
                left: 10rem;
                top: 60vh;
              }
            }
          }

          .content {
            z-index: 1;

            @media screen and (max-width: @mobileWidth) {
              width: 90%;
              margin-left: auto;
              margin-right: auto;
            }

            .title {
              font-size: 3.8rem;
              font-weight: 500;
              color: #ffffff;
              line-height: 5.3rem;
              margin: 0;
              padding-top: 26rem;

              @media screen and (max-width: @mobileWidth) {
                font-size: 2.8rem;
                line-height: 3.2rem;
                padding-top: 25vh;
              }
            }

            .emphases-title {
              font-size: 7.8rem;
              font-weight: 500;
              color: #ffffff;
              line-height: 10.8rem;
              margin: 3.2rem 0 0 0;

              @media screen and (max-width: @mobileWidth) {
                font-size: 5.6rem;
                line-height: 8rem;
              }
            }

            .description {
              font-size: 3.8rem;
              font-weight: 500;
              color: #ffffff;
              line-height: 5.3rem;
              margin: 2.4rem 0 0 0;

              @media screen and (max-width: @mobileWidth) {
                font-size: 2rem;
                line-height: 3.2rem;
              }

              .emphases {
                font-size: 6rem;

                @media screen and (max-width: @mobileWidth) {
                  font-size: 2.4rem;
                }
              }
            }

            .version-info {
              font-size: 2rem;
              font-weight: 500;
              color: #ffffff;
              line-height: 8.4rem;
              margin: 0;

              @media screen and (max-width: @mobileWidth) {
                font-size: 1.4rem;
                line-height: 4.8rem;
              }
            }

            .go-to-try {
              width: 30.4rem;
              height: 9.2rem;
              font-size: 4rem;
              font-weight: 600;
              color: #1ba4ae;
              margin-top: 3.2rem;

              @media screen and (max-width: @mobileWidth) {
                width: 24rem;
                height: 6.4rem;
                font-size: 2.4rem;
                margin-top: 2.4rem;
              }
            }
          }
        }
      }

      .community {
        min-width: 144rem;

        @media screen and (max-width: @mobileWidth) {
          min-width: unset;
        }

        .community-container {
          width: 144rem;

          @media screen and (max-width: @mobileWidth) {
            width: 90%;
            text-align: center;
          }

          .community-section-left {
            display: flex;

            @media screen and (max-width: @mobileWidth) {
              float: unset;
            }

            .background-decoration {
              position: relative;

              .decoration-image {
                position: absolute;
                width: 38.4rem;
                height: 40rem;
                left: 6rem;
                top: 10rem;

                @media screen and (max-width: @mobileWidth) {
                  width: 30rem;
                  height: 31.2rem;
                  left: 10vw;
                  top: 4.8rem;
                }
              }
            }

            .content {
              z-index: 1;
              margin: 2.4rem auto;

              .title {
                font-size: 4.8rem;
                font-weight: 600;
                color: #fecb2c;
                line-height: 6.6rem;
                margin: 11rem 0 0 0;

                @media screen and (max-width: @mobileWidth) {
                  font-size: 3.6rem;
                  margin: 3.2rem 0 0 0;
                }
              }

              .description {
                font-size: 3.6rem;
                font-weight: 500;
                color: #333333;
                line-height: 9rem;
                margin: 6.4rem 0 0 0;

                @media screen and (max-width: @mobileWidth) {
                  font-size: 2rem;
                  line-height: 4.8rem;
                  margin: 1.6rem 0 0 0;
                }
              }

              .go-to-try {
                width: 34rem;
                height: 8.8rem;
                font-size: 4rem;
                font-weight: 500;
                color: #ffffff;
                background: linear-gradient(180deg, rgba(255, 233, 83, 1) 0%, rgba(255, 206, 41, 1) 100%);
                border-width: 0;
                margin-top: 3.2rem;

                &:hover {
                  background: linear-gradient(180deg, rgb(253, 225, 41) 0%, rgb(253, 198, 15) 100%);
                }

                @media screen and (max-width: @mobileWidth) {
                  width: 24rem;
                  height: 6.4rem;
                  font-size: 2.4rem;
                  margin-top: 2.4rem;
                }
              }
            }
          }

          .community-section-right {

            @media screen and (max-width: @mobileWidth) {
              float: unset;
            }

            img {
              width: 57.6rem;
              height: 55.6rem;
              margin: 4.8rem 5rem 4.8rem 0;

              @media screen and (max-width: @mobileWidth) {
                width: 30rem;
                height: 29rem;
                margin: 4.8rem auto;
              }
            }
          }
        }
      }

      .enterprise {
        background-color: #f5fefe;
        min-width: 144rem;

        @media screen and (max-width: @mobileWidth) {
          min-width: unset;
        }

        .enterprise-container {
          width: 144rem;

          @media screen and (max-width: @mobileWidth) {
            width: 90%;
            text-align: center;
          }

          .enterprise-section-right {
            display: flex;

            @media screen and (max-width: @mobileWidth) {
              float: unset;
            }

            .background-decoration {
              position: relative;

              .decoration-image {
                position: absolute;
                width: 38.4rem;
                height: 43.8rem;
                left: 6rem;
                top: 10rem;

                @media screen and (max-width: @mobileWidth) {
                  width: 30rem;
                  height: 34.2rem;
                  left: 10vw;
                  top: 4.8rem;
                }
              }
            }

            .content {
              z-index: 1;
              margin: 2.4rem auto;

              .title {
                font-size: 4.8rem;
                font-weight: 600;
                color: #1ba5af;
                line-height: 6.6rem;
                margin: 11rem 0 0 0;

                @media screen and (max-width: @mobileWidth) {
                  font-size: 3.6rem;
                  margin: 3.2rem 0 0 0;
                }
              }

              .description {
                font-size: 3.6rem;
                font-weight: 500;
                color: #333333;
                line-height: 7rem;
                margin: 6.4rem 0 0 0;

                @media screen and (max-width: @mobileWidth) {
                  font-size: 2rem;
                  line-height: 4.8rem;
                  margin: 1.6rem 0 0 0;
                }

                .emphases {
                  font-size: 4.8rem;
                  color: #1ca3ad;

                  @media screen and (max-width: @mobileWidth) {
                    font-size: 2.6rem;
                  }
                }
              }

              .go-to-try {
                width: 34rem;
                height: 8.8rem;
                font-size: 4rem;
                font-weight: 500;
                color: #ffffff;
                background: linear-gradient(180deg, rgba(0, 208, 215, 1) 0%, rgba(0, 163, 174, 1) 100%);
                border-width: 0;
                margin-top: 3.2rem;

                &:hover {
                  background: linear-gradient(180deg, rgb(0, 215, 223) 0%, rgb(0, 176, 189) 100%);
                }

                @media screen and (max-width: @mobileWidth) {
                  width: 24rem;
                  height: 6.4rem;
                  font-size: 2.4rem;
                  margin-top: 2.4rem;
                }
              }
            }
          }

          .enterprise-section-left {

            @media screen and (max-width: @mobileWidth) {
              float: unset;
            }

            img {
              width: 85.4rem;
              height: 57.6rem;
              margin: 4.8rem 0 4.8rem -14rem;

              @media screen and (max-width: @mobileWidth) {
                width: 30rem;
                height: 20.2rem;
                margin: 4.8rem auto;
              }
            }
          }
        }
      }

      .function-and-prise {

        .function-and-prise-container {
          width: 144rem;
          padding-top: 6rem;
          padding-bottom: 6rem;
          text-align: center;

          @media screen and (max-width: @mobileWidth) {
            width: 90%;
          }

          .title {

            h1 {
              font-size: 3.8rem;
              font-weight: 500;
              color: rgba(51, 51, 51, 1);
              line-height: 0.5;

              @media screen and (max-width: @mobileWidth) {
                font-size: 2.6rem;
              }
            }

            h2 {
              font-size: 7.6rem;
              font-weight: bold;
              color: rgba(51, 51, 51, 1);
              line-height: 0.5;

              @media screen and (max-width: @mobileWidth) {
                font-size: 4.8rem;
              }
            }

            p {
              font-size: 3.4rem;
              font-weight: 300;
              color: rgba(102, 102, 102, 1);
              line-height: 0.5;

              @media screen and (max-width: @mobileWidth) {
                font-size: 1.8rem;
                line-height: 1.6;

                span {
                  display: none;
                }
              }

              br {
                display: none;

                @media screen and (max-width: @mobileWidth) {
                  display: unset;
                }
              }
            }
          }

          .content {
            background-color: #f1f3f4;
            width: 100%;
            margin-top: 3.8rem;
            display: inline-block;

            h1 {
              margin-top: 0;
              margin-bottom: 10%;
              font-size: 4.75rem;
              font-weight: bold;
              color: rgba(255, 255, 255, 1);
              line-height: 2.5;

              @media screen and (max-width: @mobileWidth) {
                font-size: 2.4rem;
              }
            }

            h2 {
              font-size: 3.8rem;
              font-weight: bold;
              color: rgba(102, 102, 102, 1);
              line-height: 2;

              @media screen and (max-width: @mobileWidth) {
                font-size: 2rem;
              }
            }

            p {
              font-size: 2.28rem;
              font-weight: 400;
              color: rgba(102, 102, 102, 1);
              line-height: 1.5;
              margin-left: 2rem;
              margin-right: 2rem;
              padding-left: 2rem;
              padding-right: 2rem;
              border-bottom: .1rem solid #efecf0;
              padding-bottom: 0.6rem;

              @media screen and (max-width: @mobileWidth) {
                font-size: 1.4rem;
                margin-left: 1.2rem;
                margin-right: 1.2rem;
                padding-left: 1rem;
                padding-right: 1rem;
              }
            }

            .shade {
              position: absolute;
              width: 144rem;
              height: 6rem;
              background-color: white;

              @media screen and (max-width: @mobileWidth) {
                width: 90%;
                height: 1.6rem;
              }
            }

            .column1 {
              display: inline-block;
              vertical-align: top;
              margin-top: 2.2rem;

              @media screen and (max-width: @mobileWidth) {
                margin-top: .7rem;
              }

              p {
                padding-left: 6rem;
                padding-right: 6rem;
                border-bottom: .1rem solid #e1e3e4;

                @media screen and (max-width: @mobileWidth) {
                  padding-left: 2rem;
                  padding-right: 2rem;
                }
              }
            }

            .column2 {
              position: relative;
              display: inline-block;
              background-color: #fffeff;
              box-shadow: 0 .5rem 1rem #aaaaaa;
              margin-right: 10rem;

              @media screen and (max-width: @mobileWidth) {
                margin-right: 0;
                width: 21rem;
              }

              button {
                margin: 3rem 3rem 4rem 3rem;
                font-size: 3.8rem;
                font-weight: 500;
                width: 34.2rem;
                height: 9.5rem;
                color: white;
                background: linear-gradient(180deg, rgba(255, 233, 83, 1) 0%, rgba(255, 206, 41, 1) 100%);
                border: .2rem solid white;
                outline: none;

                &:hover {
                  cursor: pointer;
                  background: linear-gradient(180deg, rgb(253, 225, 41) 0%, rgb(253, 198, 15) 100%);
                }

                @media screen and (max-width: @mobileWidth) {
                  margin: 1rem 1rem 2rem 1rem;
                  font-size: 1.8rem;
                  width: 16rem;
                  height: 4.8rem;
                }
              }
            }

            .mobile-return {
              display: none;

              @media screen and (max-width: @mobileWidth) {
                display: unset;
              }
            }

            .column1-1 {
              display: none;

              @media screen and (max-width: @mobileWidth) {
                display: inline-block;
                vertical-align: top;
                margin-top: 4.3rem;

                p {
                  padding-left: 2rem;
                  padding-right: 2rem;
                  border-bottom: .1rem solid #e1e3e4;
                }
              }
            }

            .column3 {
              position: relative;
              display: inline-block;
              background-color: #fffeff;
              box-shadow: 0 .5rem 1rem #aaaaaa;

              @media screen and (max-width: @mobileWidth) {
                width: 21rem;
                margin-top: 3.6rem;
              }

              button {
                margin: 3rem 3rem 4rem 3rem;
                font-size: 3.8rem;
                font-weight: 500;
                width: 34.2rem;
                height: 9.5rem;
                color: white;
                background: linear-gradient(180deg, rgba(0, 208, 215, 1) 0%, rgba(0, 163, 174, 1) 100%);
                border: .2rem solid white;
                outline: none;

                &:hover {
                  cursor: pointer;
                  background: linear-gradient(180deg, rgb(0, 215, 223) 0%, rgb(0, 176, 189) 100%);
                }

                @media screen and (max-width: @mobileWidth) {
                  margin: 1rem 1rem 2rem 1rem;
                  font-size: 1.8rem;
                  width: 16rem;
                  height: 4.8rem;
                }
              }
            }
          }
        }
      }

      .contact-customer-service {
        min-width: 144rem;

        @media screen and (max-width: @mobileWidth) {
          min-width: unset;
        }

        @media screen and (max-width: @mobileWidth) {
          width: 90%;
          display: block;
          margin-left: auto;
          margin-right: auto;
        }

        p {
          font-size: 3.42rem;
          font-weight: 300;
          color: rgba(153, 153, 153, 1);
          line-height: 1;

          @media screen and (max-width: @mobileWidth) {
            font-size: 1.8rem;
            line-height: 2;
          }
        }
      }
    }
  }
</style>

<style lang="less">
  .apply-try-dialog {

    .apply-try-dialog-form {

      .el-form-item {

        .el-form-item__label {
          line-height: 2.4rem;
        }
      }

      .select-input {
        width: 100%;
      }

      .agreement-description {
        margin-left: 2.4rem;
        margin-top: -2.0rem;
        line-height: 1.5;
        letter-spacing: .05rem;

        a {
          color: #22afb9;

          &:hover {
            color: #43bfc7;
          }
        }
      }

      .form-operation {
        margin-top: 1.6rem;
      }
    }
  }
</style>
