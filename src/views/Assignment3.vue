<template>
  <div class="platform-page">
    <AppHeader @search="onSearch" />

    <main class="main">
      <!-- 顶部轮播 -->
      <HeroCarousel />

      <div class="container">
        <!-- 精选课程 -->
        <CourseSection
          :active-category="activeCategory"
          :search-key="searchKey"
          @change="onCategoryChange"
          @learn="learnCourse"
        />

        <!-- 我的学习记录 -->
        <LearningTable class="module-gap" />

        <!-- 帮助中心 -->
        <HelpCenter class="module-gap" />
      </div>
    </main>

    <!-- 页脚（右侧含意见反馈按钮） -->
    <AppFooter @feedback="feedbackVisible = true" />

    <!-- 意见反馈弹窗 -->
    <FeedbackDialog v-model="feedbackVisible" />
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { ElMessage } from 'element-plus'
import AppHeader from '../components/AppHeader.vue'
import HeroCarousel from '../components/HeroCarousel.vue'
import CourseSection from '../components/CourseSection.vue'
import LearningTable from '../components/LearningTable.vue'
import HelpCenter from '../components/HelpCenter.vue'
import AppFooter from '../components/AppFooter.vue'
import FeedbackDialog from '../components/FeedbackDialog.vue'

// 分类筛选与搜索状态
const activeCategory = ref('all')
const searchKey = ref('')

// 意见反馈弹窗
const feedbackVisible = ref(false)

function onCategoryChange(key) {
  activeCategory.value = key
}

function onSearch(keyword) {
  searchKey.value = keyword
}

function learnCourse(course) {
  ElMessage.success(`已开始学习：${course.name}`)
}
</script>

<style scoped>
.platform-page {
  min-height: 100vh;
  background: #f5f7fa;
  display: flex;
  flex-direction: column;
}

.main {
  flex: 1;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 24px;
}

/* 模块间距 */
.module-gap {
  margin-top: 24px;
}
</style>
