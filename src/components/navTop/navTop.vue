<template>
  <div class="navTop">
    <!-- 主页按钮 -->
    <router-link to="/" class="toMain">
      <span>To Do</span>
    </router-link>
    <!-- 搜索框 -->
    <div class="search-wrap">
      <svg class="icon icon-search" aria-hidden="true">
        <use xlink:href="#icon-sousuo_huaban1"></use>
      </svg>
      <input type="text" class="searchInfo" placeholder="Search" />
      <svg class="icon icon-close" aria-hidden="true">
        <use xlink:href="#icon-cha"></use>
      </svg>
    </div>
    <!-- 右侧设置区域 -->
    <div class="right_part">
      <div class="setting">setting</div>
      <div class="userInfo">userInfo</div>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
  name: "App",
});
</script>
<style scoped lang="scss">
.navTop {
  width: 100%;
  height: 50px;
  display: fixed;
  color: #333333;
  font-size: 14px;
  background: #0078d7;
  // margin: 0 0 20px;
  border-width: 1px 0px solid #e7e7e7;
  border-radius: 0 0 0 3px;
  box-shadow: 5px 2px 3px #888888;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
//主页按钮
.toMain {
  background: transparent;
  font-size: 18px;
  color: #ffffff;
  margin-left: 1rem;
  //文字垂直居中
  display: flex;
  align-items: center;
  &:focus {
    cursor: pointer;
  }
}
//搜索外框
.search-wrap {
  position: relative;
}
//搜索框
.searchInfo {
  width: 400px;
  height: 30px;
  background: #c3ddf7;
  border-radius: 3px;
  padding: 0 30px;
  box-sizing:border-box;

}
//搜索图标
.icon-search, .icon-close{
  width: 20px;
  height: 20px;
  position: absolute;
  top: 0;
  bottom: 0;
  margin: auto;
  &:focus {
    cursor: pointer;
  }
}
.icon-search {
 left: 1%;
}
.icon-close {
  right: 1%;
}
</style>