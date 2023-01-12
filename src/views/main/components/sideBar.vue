<template>
  <div class="logo">
    <img src="@/assets/images/logo.svg" alt="" />
    <span v-show="!isFold">后台管理系统</span>
  </div>
  <el-menu :collapse="isFold" popper-effect="dark" :default-active="activeIndex">
    <el-sub-menu v-for="item in loginStore.userMenus" :key="item.id" :index="item.id + ''">
      <template #title>
        <el-icon>
          <component :is="item.icon.split('el-icon-')[1]" class="menu-icon"></component>
        </el-icon>
        <span>{{ item.name }}</span>
      </template>
      <el-menu-item
        v-for="child in item.children"
        :key="child.id"
        :index="child.id + ''"
        @click="handleMenuItem(child)"
        >{{ child.name }}</el-menu-item
      >
    </el-sub-menu>
  </el-menu>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import useLoginStore from '@/store/login'
import { useRoute, useRouter } from 'vue-router'

interface IProps {
  isFold: boolean
}
const props = defineProps<IProps>()

const route = useRoute()
const router = useRouter()
const loginStore = useLoginStore()

const activeIndex = ref('')

loginStore.userMenus.forEach((o: any) => {
  if (o.children) {
    return o.children.forEach((item: any) => {
      if (item.url == route.path) {
        activeIndex.value = item.id + ''
      }
    })
  }
})

const handleMenuItem = (item: any) => {
  router.push(item.url)
}
</script>

<style scoped lang="less">
.logo {
  height: 48px;
  padding: 12px 10px 8px 10px;
  box-sizing: border-box;
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;

  img {
    width: 28px;
  }
  span {
    margin-left: 10px;
    white-space: nowrap;
  }
}

@bg-color: #001529;
:global(.el-menu) {
  border-right: none;
  --el-menu-bg-color: @bg-color;
  --el-menu-text-color: rgb(183, 189, 195);
  --el-menu-active-color: #fff;
  --el-menu-hover-bg-color: @bg-color;
}
.el-menu-item:hover {
  color: #fff;
}
.el-menu-item.is-active {
  background: #0a60bd;
}

.menu-icon {
  width: 18px;
  margin-right: 6px;
}
</style>
<!-- <style>
.el-menu {
  --el-menu-bg-color: #001529;
  --el-menu-text-color: rgb(183, 189, 195);
  --el-menu-active-color: #fff;
  --el-menu-hover-bg-color: #001529;
}
</style> -->
