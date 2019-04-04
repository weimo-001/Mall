<template lang="pug">
div.regular-nav
  div.container
    el-row(:gutter="10")
      el-col(:span="6")
        router-link(to="/")
         div.logo: img(src="../../static/logo@2x.png")
      el-col(:span="12")
        form.search
          el-input(placeholder="请输入内容" suffix-icon="el-icon-search")
          button(type="submit" hidden)
      el-col(:span="6")


</template>
<script>
export default {
  name: "RegularNav"
};
</script>
<style lang="scss" scoped>
.logo{
  max-width:8em;
  margin-top:1em;
}
.search{
  // padding:1em 0;  
  margin-top:2em;
}
</style>