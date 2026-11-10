// 智学云课堂 - 静态数据统一管理

// 轮播图数据（蓝色到绿色柔和渐变背景）
export const banners = [
  {
    id: 1,
    title: '前端进阶训练营 2026',
    subtitle: '从工程化到性能优化，全面实战',
    buttonText: '立即查看',
    gradient: 'linear-gradient(120deg, #2563eb 0%, #38bdf8 55%, #34d399 100%)'
  },
  {
    id: 2,
    title: 'AI Coding 实战特训',
    subtitle: '用 AI 重塑编程工作流，效率提升十倍',
    buttonText: '免费试听',
    gradient: 'linear-gradient(120deg, #1d4ed8 0%, #0ea5e9 50%, #10b981 100%)'
  },
  {
    id: 3,
    title: '名师直播公开课',
    subtitle: '每周三晚 8 点，一线工程师在线拆解真实项目',
    buttonText: '预约直播',
    gradient: 'linear-gradient(120deg, #3b82f6 0%, #22d3ee 55%, #4ade80 100%)'
  }
]

// 课程分类
export const courseCategories = [
  { key: 'all', label: '全部' },
  { key: 'frontend', label: '前端' },
  { key: 'ai', label: 'AI Coding' }
]

// 课程数据（cover 为卡片彩色封面背景色）
export const courses = [
  {
    id: 1,
    type: 'frontend',
    typeLabel: '前端',
    name: 'Vue3 组件库设计与实现',
    teacher: '李伟',
    lessons: 24,
    price: 299,
    cover: 'linear-gradient(135deg, #60a5fa, #2563eb)'
  },
  {
    id: 2,
    type: 'frontend',
    typeLabel: '前端',
    name: 'React 18 并发渲染原理',
    teacher: '王芳',
    lessons: 18,
    price: 199,
    cover: 'linear-gradient(135deg, #6ee7b7, #059669)'
  },
  {
    id: 3,
    type: 'ai',
    typeLabel: 'AI Coding',
    name: 'AI 辅助编程实战营',
    teacher: '张磊',
    lessons: 16,
    price: 399,
    cover: 'linear-gradient(135deg, #c084fc, #7c3aed)'
  },
  {
    id: 4,
    type: 'frontend',
    typeLabel: '前端',
    name: 'TypeScript 类型体操进阶',
    teacher: '陈静',
    lessons: 20,
    price: 249,
    cover: 'linear-gradient(135deg, #fbbf24, #f59e0b)'
  },
  {
    id: 5,
    type: 'ai',
    typeLabel: 'AI Coding',
    name: 'Prompt 工程与 LLM 应用开发',
    teacher: '赵强',
    lessons: 14,
    price: 349,
    cover: 'linear-gradient(135deg, #f87171, #dc2626)'
  },
  {
    id: 6,
    type: 'frontend',
    typeLabel: '前端',
    name: 'Vite 构建工具深度剖析',
    teacher: '刘洋',
    lessons: 12,
    price: 159,
    cover: 'linear-gradient(135deg, #94a3b8, #475569)'
  }
]

// 我的学习记录
export const learningRecords = [
  {
    id: 1,
    name: 'Vue3 组件库设计与实现',
    chapter: '第8章：表单组件封装',
    progress: 65,
    color: '#409eff',
    status: 'learning'
  },
  {
    id: 2,
    name: 'React 18 并发渲染原理',
    chapter: '第5章：Suspense 与并发模式',
    progress: 42,
    color: '#e6a23c',
    status: 'learning'
  },
  {
    id: 3,
    name: 'AI 辅助编程实战营',
    chapter: '第11章：AI 代码评审',
    progress: 100,
    color: '#67c23a',
    status: 'done'
  },
  {
    id: 4,
    name: 'TypeScript 类型体操进阶',
    chapter: '第2章：条件类型',
    progress: 18,
    color: '#e6a23c',
    status: 'learning'
  }
]

// 帮助中心常见问题
export const helpFaqs = [
  {
    id: 1,
    question: '如何申请课程退款？',
    answer:
      '购买课程 7 天内且学习进度不超过 30%，可在「我的订单」页面申请全额退款，款项将在 3 个工作日内原路退回。'
  },
  {
    id: 2,
    question: '课程证书如何获取？',
    answer:
      '完成课程全部章节学习并通过课后测验后，可在「我的学习」页面点击“领取证书”，系统将生成电子证书供下载与分享。'
  },
  {
    id: 3,
    question: '课程有效期是多久？',
    answer:
      '课程自购买之日起有效期为 365 天，有效期内可无限次观看；到期后如需继续学习可单独购买延期服务。'
  }
]

// 反馈类型选项
export const feedbackTypes = ['课程内容', '平台体验', '功能建议', '其他问题']
