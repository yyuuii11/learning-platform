<template>
  <!-- 意见反馈弹窗：表单校验 + 提交 -->
  <el-dialog
    v-model="visible"
    title="意见反馈"
    width="480px"
    align-center
    @closed="resetForm"
  >
    <el-form
      ref="formRef"
      :model="form"
      :rules="rules"
      label-position="top"
    >
      <el-form-item label="姓名" prop="name">
        <el-input v-model="form.name" placeholder="请输入您的姓名" clearable />
      </el-form-item>
      <el-form-item label="邮箱" prop="email">
        <el-input v-model="form.email" placeholder="请输入邮箱" clearable />
      </el-form-item>
      <el-form-item label="反馈类型" prop="type">
        <el-select v-model="form.type" placeholder="请选择" style="width: 100%">
          <el-option
            v-for="item in feedbackTypes"
            :key="item"
            :label="item"
            :value="item"
          />
        </el-select>
      </el-form-item>
      <el-form-item label="详细描述" prop="content">
        <el-input
          v-model="form.content"
          type="textarea"
          :rows="4"
          :maxlength="300"
          show-word-limit
          resize="none"
          placeholder="请描述您的建议或遇到的问题..."
        />
      </el-form-item>
    </el-form>

    <template #footer>
      <el-button @click="visible = false">取消</el-button>
      <el-button type="primary" @click="handleSubmit">提交反馈</el-button>
    </template>
  </el-dialog>
</template>

<script setup>
import { reactive, ref } from 'vue'
import { ElMessage } from 'element-plus'
import { feedbackTypes } from '../data/courses.js'

const visible = defineModel({ type: Boolean, default: false })

const formRef = ref(null)
const form = reactive({
  name: '',
  email: '',
  type: '',
  content: ''
})

// 表单校验规则
const rules = {
  name: [{ required: true, message: '请输入您的姓名', trigger: 'blur' }],
  email: [
    { required: true, message: '请输入邮箱', trigger: 'blur' },
    { type: 'email', message: '请输入正确的邮箱格式', trigger: 'blur' }
  ],
  type: [{ required: true, message: '请选择反馈类型', trigger: 'change' }],
  content: [{ required: true, message: '请描述您的建议或遇到的问题', trigger: 'blur' }]
}

function resetForm() {
  formRef.value?.resetFields()
}

async function handleSubmit() {
  await formRef.value.validate()
  ElMessage.success('感谢您的反馈，我们会尽快处理！')
  visible.value = false
}
</script>

<style scoped>
</style>
