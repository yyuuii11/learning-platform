<template>
  <!-- 课程卡片：彩色封面 + 课程信息 -->
  <el-card class="course-card" shadow="never" :body-style="{ padding: '16px' }">
    <!-- 彩色封面区域（白色打开的书本图标居中） -->
    <div class="cover" :style="{ background: course.cover }" role="img" :aria-label="course.name + ' 课程封面'">
      <el-icon :size="48" color="#fff"><Reading /></el-icon>
    </div>

    <el-tag size="small" effect="plain" type="info" class="type-tag">{{ course.typeLabel }}</el-tag>
    <h3 class="name">{{ course.name }}</h3>
    <p class="meta">{{ course.teacher }} · {{ course.lessons }}课时</p>

    <div class="bottom">
      <span class="price">￥{{ course.price }}</span>
      <el-button type="primary" size="small" round @click="emit('learn', course)">
        立即学习
      </el-button>
    </div>
  </el-card>
</template>

<script setup>
import { Reading } from '@element-plus/icons-vue'

defineProps({
  course: {
    type: Object,
    required: true
  }
})

const emit = defineEmits(['learn'])
</script>

<style scoped>
.course-card {
  border: 1px solid #e5e6eb;
  border-radius: 10px;
  background: #fff;
  cursor: pointer;
  transition: transform 0.25s, box-shadow 0.25s;
}

.course-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.08);
}

.cover {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 140px;
  border-radius: 8px;
  margin-bottom: 12px;
}

.type-tag {
  margin-bottom: 8px;
}

.name {
  margin: 0 0 6px;
  font-size: 16px;
  font-weight: 700;
  color: #1d2129;
  line-height: 1.4;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  min-height: 45px;
}

.meta {
  margin: 0 0 12px;
  font-size: 13px;
  color: #86909c;
}

.bottom {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.price {
  font-size: 20px;
  font-weight: 700;
  color: #f53f3f;
}
</style>
