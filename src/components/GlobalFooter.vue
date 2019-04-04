<template lang="pug">
  nav
    div.container
      el-row
        el-col(:span="12")
            a.anchor(href="#") item
            a.anchor(href="#") item
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
.container {
  max-width: 800px;
  margin: 0 auto;
}
</style>