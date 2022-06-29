import { ElMessage } from 'element-plus'
// 实现复制功能
export const useCopy = (text: string) => {
  // 创建输入框
  let input = document.createElement('input')
  // 给输入框赋值
  input.value = text
  // 追加到body
  document.body.appendChild(input)
  // 选择输入框的操作
  input.select()
  // 执行复制操作
  document.execCommand('Copy')
  // 移除input
  document.body.removeChild(input)
  ElMessage.success('复制成功')
}