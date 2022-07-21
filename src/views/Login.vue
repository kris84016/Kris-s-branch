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
        v-model="phone"
        name="phone"
        label="手机号"
        placeholder="手机号"
        :rules="[{ required: true, message: '请填写手机号' }]"
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
      phone: "",
      password: "",
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
        const url="http://10.44.64.121:8080/user/userLogin";
        
        this.axios.get(url,{
        params : {
                password:this.password,
                phone:this.phone,
              }
            }).then((res)=>{
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