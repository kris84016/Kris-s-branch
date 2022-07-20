<template>
  <div>
    <van-nav-bar
      title="登录"
      left-text="返回"
      left-arrow
      @click-left="onClickLeft"
    />

    <van-form>
      <van-field
        left-icon="friends-o"
        v-model="username"
        name="用户名"
        label="用户名"
        placeholder="用户名"
        :rules="[{ required: true, message: '请填写用户名' }]"
      /><br />
      <van-field
        @keyup.enter="onSubmit"
        left-icon="smile-comment-o"
        v-model="password"
        type="password"
        name="密码"
        label="密码"
        placeholder="密码"
        :rules="[{ required: true, message: '请填写密码' }]"
      />
      <div style="margin: 16px">
        <van-button
          round
          block
          type="info"
          native-type="submit"
          @click="onSubmit"
          >登录</van-button
        >
      </div>
      <!-- <div class="reg">
        <div type="text" @click="toRegister">没有账号？立即注册</div>
        <div>忘记密码?</div>
      </div> -->
    </van-form>
    <van-row type="flex" justify="space-between">
      <van-col span="10" @click="toRegister" class="NoNum"
        >没有账号？立即注册</van-col
      >
      <van-col span="5" @click="toRepwd" class="forget">忘记密码</van-col>
    </van-row>
  </div>
</template>

<script>
import { Dialog } from 'vant';
import { Toast } from 'vant';
export default {
  name: "Login",
  data() {
    return {
      username: "",
      password: "",
      data: null,
    };
  },
  methods: {
    toRepwd(){
      this.$router.push("/repwd");
    },
    onClickLeft() {
      this.$router.push("/");
    },
    onSubmit() {
        console.log(this.username,this.password);
        //接口地址
        const url="http://10.2.1.169:8080/passwordLogin";
        // const params = `name=${this.username}&password=${this.password}`;
        this.axios.get(url).then((res)=>{
          // this.data = res.data;
          console.log(res);
          if (res.data.code === 200) {//如果后端返回的状态码是200
              Toast.success("登录成功");
              this.$router.replace({//路由替换为index
                path: '/'
              });
            }
            else {
              Toast.fail("账号或密码错误");
            }
          })
        //   .catch((failResponse) => {
        //     this.open2();
        // });
        // if (this.username == "123456" && this.password == "123456") {
        //   Toast.success("登录成功");
        // } else if (this.username == "" && this.password == "") {
        //   Toast("请输入账号或密码");
        // } else {
        //   Toast.fail("账号或密码错误");
        // }
      },

    toRegister() {
      this.$router.push("/Register");
    },
  },
};
</script>

<style scoped>
.title {
  height: 50px;
  line-height: 50px;
  background-color: #20a0ff;
  color: #fff;
  text-align: center;
}
.forget {
  color: rgb(226, 33, 43);
}
.NoNum {
  color: rgb(72, 72, 243)
}
</style>