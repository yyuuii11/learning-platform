<template>
  <!-- 精选课程区域：分类筛选 + 课程卡片列表 -->
  <section class="course-section">
    <div class="section-head">
      <h2 class="section-title">精选课程</h2>
      <span class="section-sub">跟随行业一线工程师学习</span>
    </div>

    <!-- 分类切换（蓝色文字 + 蓝色下划线） -->
    <div class="category-bar" role="tablist" aria-label="课程分类">
      <button
        v-for="cat in courseCategories"
        :key="cat.key"
        class="cat-btn"
        :class="{ active: cat.key === activeCategory }"
        role="tab"
        :aria-selected="cat.key === activeCategory"
        @click="emit('change', cat.key)"
      >{{ cat.label }}</button>
    </div>

    <!-- 课程卡片：3 列布局 -->
    <el-row :gutter="20">
      <el-col
        v-for="course in filteredCourses"
        :key="course.id"
        :xs="24"
        :sm="12"
        :md="8"
        class="course-col"
      >
        <CourseCard :course="course" @learn="emit('learn', $event)" />
      </el-col>
    </el-row>
    <el-empty v-if="!filteredCourses.length" description="暂无相关课程" />
  </section>
</template>

<script setup>
import { computed } from 'vue'
import CourseCard from './CourseCard.vue'
import { courseCategories, courses } from '../data/courses.js'

const props = defineProps({
  activeCategory: {
    type: String,
    default: 'all'
  },
  searchKey: {
    type: String,
    default: ''
  }
})

const emit = defineEmits(['change', 'learn'])

// 按分类 + 搜索关键词过滤课程
const filteredCourses = computed(() => {
  const key = props.searchKey.trim().toLowerCase()
  return courses.filter((course) => {
    const matchCategory =
      props.activeCategory === 'all' || course.type === props.activeCategory
    const matchSearch =
      !key ||
      course.name.toLowerCase().includes(key) ||
      course.teacher.toLowerCase().includes(key) ||
      course.typeLabel.toLowerCase().includes(key)
    return matchCategory && matchSearch
  })
})
</script>

<style scoped>
.course-section {
  background: #fff;
  border-radius: 12px;
  padding: 24px;
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.04);
}

.section-head {
  display: flex;
  align-items: baseline;
  gap: 12px;
  margin-bottom: 16px;
}

.section-title {
  margin: 0;
  font-size: 20px;
  font-weight: 700;
  color: #1d2129;
}

.section-sub {
  font-size: 13px;
  color: #86909c;
}

.category-bar {
  display: flex;
  gap: 28px;
  border-bottom: 1px solid #f0f2f5;
  margin-bottom: 20px;
}

.cat-btn {
  padding: 8px 2px 10px;
  border: none;
  background: none;
  font-size: 15px;
  color: #4e5969;
  cursor: pointer;
  position: relative;
  transition: color 0.2s;
}

.cat-btn::after {
  content: '';
  position: absolute;
  left: 50%;
  bottom: 0;
  transform: translateX(-50%) scaleX(0);
  width: 24px;
  height: 3px;
  border-radius: 2px;
  background: var(--el-color-primary);
  transition: transform 0.2s;
}

.cat-btn:hover {
  color: var(--el-color-primary);
}

.cat-btn.active {
  color: var(--el-color-primary);
  font-weight: 600;
}

.cat-btn.active::after {
  transform: translateX(-50%) scaleX(1);
}

.course-col {
  margin-bottom: 20px;
}
</style>
