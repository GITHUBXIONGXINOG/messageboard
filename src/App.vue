<template>
  <nav-top />
  <page />
</template>
<script>
import navTop from "./components/navTop/navTop.vue";
import page from "./components/page/page.vue";
export default {
  components: {
    navTop,
    page,
  },
};
</script>
<style lang="scss">
#app {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  overflow: hidden;
}
.icon {
  width: 1em;
  height: 1em;
  vertical-align: -0.15em;
  fill: currentColor;
  overflow: hidden;
}
</style>
