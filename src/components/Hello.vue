<template>
  <div>{{ msg }}</div>
</template>

<script lang="ts" setup>
// const helloEl = ref<InstanceType<typeof Hello>>()
import { ref } from 'vue'

const msg = ref('hello')
const action = (test: string) => {
  console.log(test)
}

defineExpose({
  action,
  msg
})
</script>

<style lang="scss" scoped></style>
