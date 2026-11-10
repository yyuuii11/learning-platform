<template>
  <!-- 帮助中心：常见问题折叠面板 -->
  <section class="help-center">
    <div class="section-head">
      <h2 class="section-title">帮助中心</h2>
      <span class="section-sub">常见问题解答</span>
    </div>

    <el-collapse v-model="activeNames">
      <el-collapse-item
        v-for="faq in helpFaqs"
        :key="faq.id"
        :title="faq.question"
        :name="faq.id"
      >
        <p class="answer">{{ faq.answer }}</p>
      </el-collapse-item>
    </el-collapse>
  </section>
</template>

<script setup>
import { ref } from 'vue'
import { helpFaqs } from '../data/courses.js'

// 默认展开第一个问题
const activeNames = ref([1])
</script>

<style scoped>
.help-center {
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

.answer {
  margin: 0;
  font-size: 14px;
  line-height: 1.8;
  color: #4e5969;
}
</style>
