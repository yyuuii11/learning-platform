<template>
  <!-- 顶部导航栏：Logo + 居中搜索 + 消息与用户菜单 -->
  <header class="app-header">
    <div class="header-inner">
      <div class="logo">
        <el-icon class="logo-icon" :size="28"><OfficeBuilding /></el-icon>
        <span class="logo-text">智学云课堂</span>
      </div>

      <!-- 居中搜索框 -->
      <div class="search-box">
        <el-input
          v-model="keyword"
          placeholder="搜索课程、讲师、分类..."
          clearable
          @keyup.enter="doSearch"
          @input="emit('search', keyword)"
        >
          <template #append>
            <el-button type="primary" class="search-btn" @click="doSearch">搜索</el-button>
          </template>
        </el-input>
      </div>

      <div class="actions">
        <!-- 消息铃铛（含未读角标） -->
        <el-badge :value="6" class="bell-badge" :offset="[2, 4]">
          <el-button
            class="bell-btn"
            text
            circle
            aria-label="消息通知，有 6 条未读消息"
            @click="handleBellClick"
          >
            <el-icon :size="20"><Bell /></el-icon>
          </el-button>
        </el-badge>

        <!-- 用户头像下拉菜单（Hover 触发：悬停头像显示，移入菜单保持，离开后隐藏） -->
        <el-dropdown trigger="hover" @command="handleCommand">
          <el-avatar
            :size="36"
            src="https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=cute%20panda%20face%20avatar%2C%20flat%20illustration%2C%20minimal%20style%2C%20light%20blue%20background%2C%20round%20composition&image_size=square"
            class="avatar"
            alt="用户头像"
          />
          <template #dropdown>
            <el-dropdown-menu>
              <el-dropdown-item command="profile">个人信息</el-dropdown-item>
              <el-dropdown-item command="purchased">已购课程</el-dropdown-item>
              <el-dropdown-item command="logout" divided>退出登录</el-dropdown-item>
            </el-dropdown-menu>
          </template>
        </el-dropdown>
      </div>
    </div>
  </header>
</template>

<script setup>
import { ref } from 'vue'
import { ElMessage } from 'element-plus'
import { OfficeBuilding, Bell } from '@element-plus/icons-vue'

const emit = defineEmits(['search'])

const keyword = ref('')

function doSearch() {
  emit('search', keyword.value)
  ElMessage.info(`搜索：${keyword.value.trim() || '全部课程'}`)
}

function handleBellClick() {
  ElMessage.info('你有 6 条未读消息')
}

// 头像下拉菜单命令处理
function handleCommand(command) {
  const tips = {
    profile: '打开个人信息',
    purchased: '打开已购课程',
    logout: '已退出登录（演示）'
  }
  ElMessage.success(tips[command] || '操作成功')
}
</script>

<style scoped>
.app-header {
  position: sticky;
  top: 0;
  z-index: 100;
  background: #fff;
  box-shadow: 0 1px 0 #f0f2f5, 0 2px 8px rgba(0, 0, 0, 0.04);
}

.header-inner {
  display: flex;
  align-items: center;
  gap: 24px;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 24px;
  height: 64px;
}

.logo {
  display: flex;
  align-items: center;
  gap: 8px;
  flex-shrink: 0;
  cursor: pointer;
  user-select: none;
}

.logo-icon {
  color: var(--el-color-primary);
}

.logo-text {
  font-size: 20px;
  font-weight: 700;
  color: var(--el-color-primary);
  white-space: nowrap;
}

.search-box {
  flex: 1;
  max-width: 560px;
  margin: 0 auto;
}

.search-box :deep(.el-input-group__append) {
  padding: 0;
  border: none;
  background: transparent;
}

.search-btn {
  border-radius: 0 var(--el-border-radius-base) var(--el-border-radius-base) 0;
}

.actions {
  display: flex;
  align-items: center;
  gap: 10px;
  flex-shrink: 0;
  margin-left: auto;
}

.bell-badge {
  display: flex;
  align-items: center;
}

.bell-btn {
  color: #4e5969;
}

.bell-btn:hover {
  color: var(--el-color-primary);
}

.avatar {
  cursor: pointer;
  flex-shrink: 0;
}

@media (max-width: 768px) {
  .header-inner {
    gap: 12px;
    padding: 0 12px;
  }

  .search-box {
    max-width: none;
  }
}
</style>
