<template>
    <div class="page">
      <slide-page />
    </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue' 
import SlidePage from '../slidePage/slidePage.vue'
export default defineComponent({
    name:'App',
    components: {
        // SelectPage,
        SlidePage
    }

})
</script>
<style scoped lang="scss">
    .page {
        width: 100%;
        height: 100%;
        border: 1px solid red;
        display: flex;
        overflow: hidden;
        >:nth-child(2) {
            width: 80%;
        }
    }
</style>