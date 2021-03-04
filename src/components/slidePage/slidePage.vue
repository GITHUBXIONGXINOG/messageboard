<template>
  <div class="slidePage">
    <router-link to="/myday">Myday</router-link>
    <router-link to="/important">Important</router-link>
    <router-link to="/inbox">Inbox</router-link>
  </div>
  <router-view />
</template>
<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
  name: "App",
});
</script>
<style scoped lang="scss">
.slidePage {
  width: 20rem;
  border-right: 1px solid #eaeaea;
  display: flex;
  flex-direction: column;
  background: #f4f4f4;
  box-shadow: -1px 10px 10px #eaeaea;
}
</style>