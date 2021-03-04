<template>
  <nav-top />
  <page />
</template>
<script>

  import navTop from './components/navTop/navTop.vue'
  import page from './components/page/page.vue'
export default {
  components: {
    navTop,
    page
  }
}
</script>
<style lang="scss">
  #app {
    width: 100%;
  }
   .icon {
       width: 1em; height: 1em;
       vertical-align: -0.15em;
       fill: currentColor;
       overflow: hidden;
    }
</style>
