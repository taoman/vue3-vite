<template>
  <div class="flex  justify-center mt-8">
    <editor
      v-model:value="value"
      api-key="jz77shrqit8bjyb5wuh9e9tm3dspj2vxmti3rahx51mj1ref"
      :init="init"
      @change="change"
    />
  </div>
  <!-- <button @click="get">
    收录
  </button> -->
</template>

<script setup lang='ts'>
import tinymce from 'tinymce/tinymce'
import Editor from '@tinymce/tinymce-vue'
import 'tinymce/themes/silver/theme' // 主题文件
import 'tinymce/icons/default'
import 'tinymce/models/dom'
import 'tinymce/skins/ui/oxide/skin.min.css'

import 'tinymce/plugins/wordcount' // 字数统计插件
import 'tinymce/plugins/save' // 保存
import 'tinymce/plugins/preview' // 预览
import { ref, defineEmits, defineProps, watch, withDefaults, onMounted } from 'vue'
const init = ref({
  selector: 'textarea',
  automatic_uploads: true,
  width: '80%',
  height: 750,
  language_url: './tinymce/langs/zh_CN.js',
  language: 'zh_CN',
  skin_url: './tinymce/skins/ui/oxide',
  content_css: './tinymce/skins/content/default/content.css',
  plugins: 'save preview wordcount',
  branding: false,
  menubar: false
})

const props = withDefaults(defineProps<{value:string}>(), {
  value: ''
})
const value = ref(props.value)
watch(() => props.value, (val) => {
  value.value = val
})
const emits = defineEmits(['update:value'])
const change = () => {
  emits('update:value', tinymce.activeEditor?.getContent())
}
onMounted(() => {
  tinymce.init({})
})
</script>

<style lang='scss' scoped></style>
