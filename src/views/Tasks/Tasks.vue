<template>
  <div class="tasks">
    <title-info title="Tasks" />

    <page-info />
  </div>
</template>
<script lang="ts">
import titleInfo from "../../components/titleInfo/titleInfo.vue";

import pageInfo from "../../components/pageInfo/pageInfo.vue";

import { defineComponent } from "vue";
export default defineComponent({
  name: "App",
  components: {
    pageInfo,
    titleInfo, //页面标题
  },
});
</script>
<style scoped lang="scss">
  .tasks{
   
 
  }
</style>