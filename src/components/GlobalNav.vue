<template lang="pug">
div.global-nav
  div.container
    el-row
      el-col(:span="12")
          router-link.anchor(to="/") 首页
          router-link.anchor(to="/search") Search
      el-col.text-right(:span="12")
          router-link.anchor(to="/product/1") ProductView
          router-link.anchor(to="/") item
          a.anchor(href="#") item
          a.anchor(href="#") item
          a.anchor(href="#") item

</template>
<script>
export default {
  name: "GlobalNav"
};
</script>
<style lang="scss" scoped>
.global-nav {
  background: rgba(0, 0, 0, 0.1);
}
.container {
  max-width: 800px;
  margin: 0 auto;
}
</style>