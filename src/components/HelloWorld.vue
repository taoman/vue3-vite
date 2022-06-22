<template>
  <slot />
  <slot name="title" />
  <slot
    name="footer"
    :scope="state"
  />
</template>

<script setup lang='ts'>
import { reactive } from 'vue'

const state = reactive({
  name: 'taoman',
  age: 18
})
</script>

<style lang='scss' scoped></style>
