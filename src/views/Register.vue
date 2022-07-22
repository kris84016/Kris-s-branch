<template>
  <div>
    <div class="icon-back" @click="tologin">
      <van-icon size="25" name="arrow-left" />
    </div>
    <div>
      <van-nav-bar
        title="注册"
        left-text="返回"
        left-arrow
        @click-left="onClickLeft"
      />
    </div>
    <van-form>
      <van-cell-group>
        <van-field
          v-model="name"
          name="name"
          required
          label="昵称"
          placeholder="请输入昵称"
          :rules="[{ required: true }]"
        />
        <van-field
          v-model="sex"
          required
          label="性别"
          name="sex"
          placeholder="请输入性别"
          :rules="[{ required: true }]"
        />
        <van-field
          v-model="birth"
          required
          label="出生日期"
          name="birth"
          placeholder="请输入出生日期 如2020-07-20"
          :rules="[{ required: true }]"
        />
        <van-field
          v-model="phone"
          name="phone"
          required
          label="手机号"
          placeholder="请输入手机号"
          :rules="[
            { required: true },
            { pattern: /^1[3456789]\d{9}$/, message: '手机号码格式错误！' },
          ]"
        />
        <van-field
          v-model="password"
          name="password"
          required
          type="password"
          label="密码"
          placeholder="请输入密码"
        />
        <van-field
          v-model="password1"
          required
          type="password"
          label="确认密码"
          placeholder="请再次输入密码"
        />
      </van-cell-group>

      <van-popup v-model="showPicker" position="bottom">
        <van-picker
          show-toolbar
          @confirm="onConfirm"
          @cancel="showPicker = false"
        />
      </van-popup>
    </van-form>
    <div style="margin: 16px">
      <van-button 
       round
       block 
       type="info" 
       native-type="submit" 
       @click="onsubmit" 
       id="regi"
       :disabled = "false"
        >注册</van-button
      >
    </div>
  </div>
</template>
<script>
import { Toast,Calendar } from "vant";
export default {
  data() {
    return {
      name: "",
      phone: "",
      password: "",
      password1: "",
      sex: "",
      birth: "",
      // param:"1",
      showPicker: false,
      checked: false,
    };
  },
  methods: {
    onClickLeft() {
      this.$router.go(-1);
    },
    onConfirm(value) {
      this.value = value;
      this.showPicker = false;
    },
    tologin() {
      this.$router.go(-1);
    },
    onsubmit() {
      // if(
      //   this.phone == "" ||
      //   this.name == "" ||
      //   this.password == "" ||
      //   this.password1 == ""
      // ){
      //   document.getElementById('regi').disabled = true;
      // }
      // else 
      if (
        this.phone == "" ||
        this.name == "" ||
        this.password == "" ||
        this.password1 == ""
      ) {
        Toast("注册失败！信息未完善");
      } else if (this.password != this.password1) {
        Toast("密码输入两次不一致！");
      } else {
        console.log(this.name, this.password, this.phone, this.sex, this.birth);
        const url = "http://10.44.64.121:8080/user/userReg";
        console.log(2);
        this.axios
          .get(url, {
            params: {
              name: this.name,
              password: this.password,
              phone: this.phone,
              sex: this.sex,
              birth: this.birth,
            },
          })
          .then((res) => {
            console.log(1);
            if (res.data.code == 200) {
              Toast.success("注册成功");
              //加定时器3S后跳转
              this.$notify({
                type: "success",
                message: "注册成功,3s后返回登录",
                duration: 3000,
              });
              setTimeout(() => {
                sessionStorage.clear("regis");
                this.$router.push("/Login");
              }, 3000);
            } else {
              console.log(res.data.msg);
              Toast.fail("手机号已被占用")
            }
          })
          .catch((err) => {
            console.log(err);
          });
      }
    },
  },
};
</script>

<style scoped>
.icon-back {
  position: absolute;
  left: 2rem;
  top: 15rem;
}
.text {
  font-size: 10rem;
}
</style>