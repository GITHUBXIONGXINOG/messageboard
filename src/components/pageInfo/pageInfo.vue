<template>
    <div class="pageInfo">
        <task />
        <ul class="page-background">
            <li v-for="(n,index) in tabelLength" :key="index">
                
            </li>
        </ul>
      
    </div>
</template>
<script>
import task from '../task/task.vue'

import { defineComponent } from 'vue' 
export default defineComponent({
    name:'App',
    components: {
        task
    },
    setup(){
        const tabelLength = 20
        return {
            tabelLength
        }
    }
})
</script>
<style scoped lang="scss">
    .pageInfo {
        flex: 1;
        width: 100%;
        position: relative;
        .page-background{
            li{
                  height: 52px;
                  border-bottom: 2px solid #e5e5e5;
            }
        }
    }
</style>