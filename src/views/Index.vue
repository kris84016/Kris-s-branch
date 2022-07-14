<template>
  <div class="Index">
    <!-- <router-view/>
    <van-tabbar v-model="active" inactive-color="#000" active-color="#e97e7e">
      <van-tabbar-item name="首页" icon="home-o" replace to="/home"
        >首页</van-tabbar-item
      >
      <van-tabbar-item name="电影" icon="search" replace to="/movie"
        >电影</van-tabbar-item
      >
      <van-tabbar-item name="影院" icon="desktop-o" replace to="/cinema"
        >影院</van-tabbar-item
      >
      <van-tabbar-item name="我的" icon="user-o" replace to="/me"
        >我的</van-tabbar-item
      >
    </van-tabbar> -->
    
    <van-nav-bar
      title="首页"
      left-text="快速注册"
      right-text="登录"
      @click-left="onClickLeft"
      @click-right="onClickRight"
    />
  </div>
</template>

<script>
export default {
   methods: {
    onClickLeft() {
      this.$router.push('/Register')
    },
    onClickRight() {
      this.$router.push('/Login')
    },
  },
  data() {
    return {
      active: "首页",
    };
  },
};
</script>
  
<style lang="scss" scoped>
</style>