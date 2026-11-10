<template>
  <!-- 我的学习记录：表格展示 -->
  <section class="learning-table">
    <div class="section-head">
      <h2 class="section-title">我的学习记录</h2>
      <span class="section-sub">坚持学习，持续进步</span>
    </div>

    <el-table :data="learningRecords" stripe style="width: 100%">
      <el-table-column type="index" label="序号" width="64" align="center" />
      <el-table-column prop="name" label="课程名称" min-width="190" show-overflow-tooltip />
      <el-table-column prop="chapter" label="当前章节" min-width="210" show-overflow-tooltip />
      <el-table-column label="学习进度" width="200">
        <template #default="{ row }">
          <el-progress :percentage="row.progress" :color="row.color" :stroke-width="8" />
        </template>
      </el-table-column>
      <el-table-column label="状态" width="100" align="center">
        <template #default="{ row }">
          <el-tag :type="row.status === 'done' ? 'success' : 'warning'" effect="plain">
            {{ row.status === 'done' ? '已完成' : '学习中' }}
          </el-tag>
        </template>
      </el-table-column>
      <el-table-column label="操作" width="110" align="center">
        <template #default="{ row }">
          <el-button link type="primary" @click="handleContinue(row)">继续学习</el-button>
        </template>
      </el-table-column>
    </el-table>
  </section>
</template>

<script setup>
import { ElMessage } from 'element-plus'
import { learningRecords } from '../data/courses.js'

function handleContinue(row) {
  ElMessage.success(`继续学习：${row.name}`)
}
</script>

<style scoped>
.learning-table {
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
</style>
