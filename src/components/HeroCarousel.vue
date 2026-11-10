<template>
  <!-- 顶部轮播区域：蓝绿渐变背景，自动切换 + 手动切换 -->
  <section class="hero-carousel" aria-label="平台推荐轮播">
    <el-carousel :interval="4000" height="300px" arrow="always" trigger="click">
      <el-carousel-item v-for="banner in banners" :key="banner.id">
        <div class="slide" :style="{ background: banner.gradient }">
          <div class="slide-content">
            <h2 class="slide-title">{{ banner.title }}</h2>
            <p class="slide-subtitle">{{ banner.subtitle }}</p>
            <el-button type="primary" size="large" round class="slide-btn" @click="handleAction(banner)">
              {{ banner.buttonText }}
            </el-button>
          </div>
        </div>
      </el-carousel-item>
    </el-carousel>
  </section>
</template>

<script setup>
import { ElMessage } from 'element-plus'
import { banners } from '../data/courses.js'

function handleAction(banner) {
  ElMessage.success(`已${banner.buttonText}：${banner.title}`)
}
</script>

<style scoped>
.hero-carousel {
  max-width: 1200px;
  margin: 0 auto;
  padding: 24px 24px 0;
}

.hero-carousel :deep(.el-carousel__container) {
  border-radius: 16px;
  overflow: hidden;
}

.slide {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
}

.slide-content {
  text-align: center;
  color: #fff;
  max-width: 640px;
  padding: 0 24px;
}

.slide-title {
  margin: 0 0 16px;
  font-size: 40px;
  font-weight: 700;
  letter-spacing: 2px;
  text-shadow: 0 2px 12px rgba(0, 0, 0, 0.18);
}

.slide-subtitle {
  margin: 0 0 28px;
  font-size: 17px;
  color: rgba(255, 255, 255, 0.9);
  text-shadow: 0 1px 6px rgba(0, 0, 0, 0.15);
}

.slide-btn {
  font-size: 16px;
  padding: 18px 32px;
}

/* 指示点 */
.hero-carousel :deep(.el-carousel__indicator .el-carousel__button) {
  background: rgba(255, 255, 255, 0.45);
}

.hero-carousel :deep(.el-carousel__indicator.is-active .el-carousel__button) {
  background: #fff;
  width: 24px;
}

@media (max-width: 768px) {
  .hero-carousel {
    padding: 16px 12px 0;
  }

  .hero-carousel :deep(.el-carousel__container) {
    height: 200px !important;
  }

  .slide-title {
    font-size: 24px;
  }

  .slide-subtitle {
    font-size: 14px;
    margin-bottom: 18px;
  }
}
</style>
