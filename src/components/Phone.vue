<template>
  <!-- <el-button class="loginright_btn nopadding" type="primary" @click="getPhoneCode()" :disabled="BtnSms">
    {{smsTip}}
  </el-button> -->
  <span class="yanzhengcode" @click="getPhoneCode()" :disabled="BtnSms">{{smsTip}}</span>
</template>

<script>
//可删除,是我引用的封装好的api方法
import LoginApi from "@/api_platform/login.js";
export default {
  props: {
    phoneNum: {
      type: String,
      default: ""
    },
    type: {
      type: Number,
      default: 1
    }
  },
  data() {
    return {
      count: 60, //当前倒计时
      BtnSms: false, //控制验证码按钮是否可用
      timer: "", //定时器名称
      smsTip: "获取验证码" //验证码文本
    };
  },

  methods: {
    //获取手机验证码
    getPhoneCode: function() {
      if (!/^1[3456789]\d{9}$/.test(this.phoneNum)) {
        this.$notify.error({
          title: "温馨提示",
          message: "请检查手机号是否填写正确!",
          offset: 50,
          duration: 2500
        });
      } else {
        this.getSmsCode();
      }
    },
    /**
     * 获取手机验证码
     */
    getSmsCode: function() {
      var thisApp = this;
      //此处为请求后端的API方法,自行替换
      LoginApi.getPhoneCode(thisApp.phoneNum, thisApp.type)
        .then(response => {
          if (response.data.state == 1) {
            thisApp.$notify.warning({
              title: "温馨提示",
              message: response.data.message,
              offset: 50,
              duration: 2500
            });
            this.countDownTimer();
          } else {
            thisApp.$notify.warning({
              title: "温馨提示",
              message: response.data.message,
              offset: 50,
              duration: 2500
            });
          }
        })
        .catch(error => {
          console.log(error);
        });
    },

    //获取验证码倒计时
    countDownTimer: function() {
      this.BtnSms = true;
      this.smsTip = this.count + "秒后重新获取";
      this.timer = setInterval(() => {
        this.count -= 1;
        if (this.count > 0) {
          this.smsTip = this.count + "秒后重新获取";
        } else {
          this.BtnSms = false;
          this.smsTip = "获取验证码";
          this.count = 60;
          clearInterval(this.timer);
        }
      }, 1000);
    }
  }
};
</script>
<style>
.loginright_btn {
  width: 98px;
  height: 36px;
  border-radius: 4px;
  background-color: rgba(140, 0, 255, 1);
  color: #fff;
  position: absolute;
  border: 0;
  right: 4px;
  top: 14px;
  text-align: center;
  text-decoration: none;
  line-height: 24px;
  font-size: 13px;
}

.el-table {
  padding: 0;
}
</style>
