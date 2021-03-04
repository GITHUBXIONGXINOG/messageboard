<template>
  <div class="important">
    important
    <page-info />
  </div>
</template>
<script lang="ts">
import pageInfo from "../../components/pageInfo/pageInfo.vue";
import { defineComponent } from "vue";
export default defineComponent({
  name: "App",
  components: {
    pageInfo,
  },
});
</script>
<style scoped lang="scss">
</style>