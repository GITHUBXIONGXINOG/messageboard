<template>
    <div class="title-info">
     {{title}}
    </div>
</template>
<script>
import { defineComponent, inject } from 'vue' 
export default defineComponent({
    name:'App',
    setup(){
        let title = inject('title')
        return {
            title
        }
    }
})
</script>
<style scoped lang="scss">
    .title-info{
        font-weight: bold;
        color: #3e69e8;
    }
</style>