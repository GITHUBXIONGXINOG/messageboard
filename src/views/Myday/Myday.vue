<template>
  <div class="myday">
      <title-info  title="My Day"/>
      <page-info />
  </div>
</template>
<script lang="ts">
import pageInfo from "../../components/pageInfo/pageInfo.vue";
import titleInfo from '../../components/titleInfo/titleInfo.vue'
import { defineComponent } from "vue";
export default defineComponent({
  name: "App",
  components: {
    pageInfo,//页面信息
    titleInfo,//页面标题
  },
});
</script>
<style scoped lang="scss">
  .myday {
    // width: 100%;
  }
</style>