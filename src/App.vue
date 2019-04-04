<template lang="pug">
    div
      GlobalNav
      router-view
      GlobalFooter
</template>

<script>
import GlobalNav from "./components/GlobalNav.vue";
import GlobalFooter from "./components/GlobalFooter.vue";


export default {
  name: "app",
  components: { GlobalNav, GlobalFooter }
};
</script>

<style>
</style>
