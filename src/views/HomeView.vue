<template>
  <div class="home">
    <div class="top-nav">
      <div>昆明</div>
      <div class="down-arrow"></div>
    </div>
    <div v-for="n in 100" :key="n">{{ n }}</div>
  </div>
</template>

<script>
export default {};
</script>
<style scoped>
.top-nav {
  display: flex;
  height: 1.5rem;
}
.down-arrow {
  width: 0;
  height: 0;
  border: 5px solid black;
  border-left: transparent;
  border-bottom: transparent;
  border-right: transparent;
}
</style>
