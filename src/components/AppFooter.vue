<template>
  <!-- 页脚：版权信息 + 意见反馈入口 -->
  <footer class="app-footer">
    <div class="footer-inner">
      <span class="copyright">© 2026 智学云课堂 · 仅用于教学示范</span>
      <el-button type="primary" size="small" round @click="emit('feedback')">
        意见反馈
      </el-button>
    </div>
  </footer>
</template>

<script setup>
const emit = defineEmits(['feedback'])
</script>

<style scoped>
.app-footer {
  background: #2b2f36;
  margin-top: 48px;
  padding: 20px 24px;
}

.footer-inner {
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
  flex-wrap: wrap;
}

.copyright {
  font-size: 14px;
  color: #9aa0a8;
}
</style>
