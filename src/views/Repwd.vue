<template>
  <div>
    <van-nav-bar left-text="返回" left-arrow @click-left="onClickLeft" />

    <van-cell-group>
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
        v-model="sms"
        center
        clearable
        label="短信验证码"
        placeholder="请输入短信验证码"
      >
        <template #button>
          <van-button size="small" type="primary">发送验证码</van-button>
        </template>
      </van-field>
      <van-field
        v-model="password"
        required
        type="password"
        label="新密码"
        placeholder="请输新入密码"
      />
    </van-cell-group>
    <div style="margin: 16px">
      <van-button round block type="info" native-type="submit" @click="onSubmit"
        >登录</van-button
      >
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    onClickLeft() {
      this.$router.go(-1);
    },
    onSubmit() {
      
    },
  },
};
</script>

<style lang="scss" scoped>
</style>