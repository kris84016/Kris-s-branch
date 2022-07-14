<template>
  <div>
    <van-tabbar v-model="active">
      <van-tabbar-item icon="home-o">首页</van-tabbar-item>
      <van-tabbar-item icon="search">电影</van-tabbar-item>
      <van-tabbar-item icon="friends-o">影院</van-tabbar-item>
      <van-tabbar-item icon="friends-o">我的</van-tabbar-item>
    </van-tabbar>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
   data() {
    return {
      active: 0,
    };
  },
};
</script>

<style lang="scss" scoped>
</style>