<template lang="pug">
    div
      nav
        router-view(name="GlobalNav")
        router-view(name="RegularNav")
      router-view(name="default")
      router-view(name="footer")
</template>

<script>



export default {
  name: "app",
};
</script>

<style>
</style>
