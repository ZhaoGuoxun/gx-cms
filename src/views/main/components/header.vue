<template>
  <div class="main-header">
    <div class="header-icon">
      <el-icon size="28" @click="handleChange">
        <Fold v-if="isFold" />
        <Expand v-else />
      </el-icon>

      <el-breadcrumb separator="/">
        <el-breadcrumb-item v-for="item in paths" :key="item.id">{{ item.name }}</el-breadcrumb-item>
      </el-breadcrumb>
    </div>

    <div class="user-info">
      <el-icon size="20"><Bell /></el-icon>
      <el-icon size="20"><ChatDotRound /></el-icon>
      <el-icon size="20" class="dot"><Postcard /></el-icon>
      <el-dropdown size="large">
        <span class="el-dropdown-link">
          <el-avatar :size="28" src="https://upload.jianshu.io/users/upload_avatars/1102036/c3628b478f06.jpeg" />
          <span class="name">{{ loginStore.userInfo.name }}</span>
        </span>
        <template #dropdown>
          <el-dropdown-menu>
            <el-dropdown-item @click="handleLogout">
              <el-icon><SwitchButton /></el-icon>
              退出系统
            </el-dropdown-item>
            <el-dropdown-item divided>
              <el-icon><InfoFilled /></el-icon>
              个人信息
            </el-dropdown-item>
            <el-dropdown-item>
              <el-icon><Unlock /></el-icon>
              修改密码
            </el-dropdown-item>
          </el-dropdown-menu>
        </template>
      </el-dropdown>
    </div>
  </div>
</template>

<script setup lang="ts">
import useLoginStore from '@/store/login'
import { getBreadCrumps } from '@/utils/map-menus'
import { computed, ref } from 'vue'
import { useRoute } from 'vue-router'

const emit = defineEmits(['foldChange'])

const route = useRoute()
const loginStore = useLoginStore()

const paths = computed(() => {
  return getBreadCrumps(route.path, loginStore.userMenus)
})

const isFold = ref(false)
const handleChange = () => {
  isFold.value = !isFold.value
  emit('foldChange', isFold.value)
}

const handleLogout = () => {
  loginStore.logoutAction()
}
</script>

<style scoped lang="less">
.main-header {
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.header-icon {
  display: flex;
  align-items: center;

  .el-icon {
    margin-right: 12px;
    cursor: pointer;
  }
}

.user-info {
  display: flex;
  align-items: center;

  .el-icon {
    margin-right: 10px;
    cursor: pointer;
    padding: 4px;
    position: relative;

    &:hover {
      background: #f2f2f2;
    }
  }

  .dot:after {
    content: '';
    position: absolute;
    background: red;
    border-radius: 50%;
    top: -1px;
    right: -2px;
    width: 6px;
    height: 6px;
  }

  .name {
    vertical-align: middle;
    margin-left: 6px;
    cursor: pointer;
    min-width: 60px;
    display: inline-block;
  }
  .el-avatar {
    vertical-align: middle;
    margin-left: 10px;
  }
}
</style>
