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
          required
          label="昵称"
          placeholder="请输入昵称"
          :rules="[
            { required: true },
          ]"
        />
        <!-- <input type="radio" name="radios" value="1" v-model="param"><label>男</label>
        <input type="radio" name="radios" value="2" v-model="param"><label>女</label> -->
        <van-field
          v-model="phone"
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
      <van-button round block type="info" native-type="submit" @click="onsubmit"
        >注册</van-button
      >
    </div>
  </div>
</template>
<script>
import { Toast } from 'vant';
export default {
  data() {
    return {
      name:"",
      phone: "",
      password: "",
      password1: "",
      // param:"1",
      showPicker: false,
      checked: false,
    };
  },
  methods: {
    onClickLeft() {
      this.$router.push("/Login");
    },
    onConfirm(value) {
      this.value = value;
      this.showPicker = false;
    },
    tologin() {
      this.$router.go(-1);
    },
    onsubmit() {
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
      //   Toast.success("注册成功");
      //   this.$notify({
      //     type: "success",
      //     message: "注册成功,3s后返回登录",
      //     duration: 3000,
      //   });
      //   setTimeout(() => {
      //     sessionStorage.clear("regis");
      //     this.$router.go(-1);
      //   }, 3000);
      }
      console.log(this.name,this.password,this.phone);
      const url = "http://10.2.1.169:8080/UserRegister"
      this.axios.get(url).then((res)=>{
        console.log(res.data.message);
         if(res.data.status == 200) {
            this.$alert('是否返回登录页面', '注册成功', {
              confirmButtonText: '确定',
              callback: action => {
                this.$router.push('/login')
              }
            })
          }else if(res.data.status == 202) {
            this.$alert('注册失败', {
              confirmButtonText: '确定',
              callback: action => {
                this.form.username = '',
                this.form.password = ''
              }
            })
          }else{
            console.log(res.message);
          }
        }).catch(err => {
          console.log('操作错误' + err);
        })
    },
  },
};
</script>

<style scoped>
.icon-back {
  position: absolute;
  left: 2px;
  top: 15px;
}
.text{
  font-size: 10px;
}
</style>