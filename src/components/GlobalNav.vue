<template lang="pug">
  nav
    div.container
      el-row
        el-col(:span="12")
            a.anchor(href="#") item
            a.anchor(href="#") item
        el-col.text-right(:span="12")
            a.anchor(href="#") item
            a.anchor(href="#") item
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
nav {
  background: rgba(0, 0, 0, 0.1);
}
.container {
  max-width: 800px;
  margin: 0 auto;
}
</style>