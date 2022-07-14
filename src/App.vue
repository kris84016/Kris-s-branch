<template>
  <div id="app">
    <router-view />

    <van-tabbar
      route
      v-model="active"
      inactive-color="#000"
      active-color="#e97e7e"
    >
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
    </van-tabbar>
  </div>
</template>
<script>
export default {
  data() {
    return {
      active: "首页",
    };
  },
};
</script>
<style lang="scss">
</style>
