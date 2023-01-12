<template>
  <h4>home - {{ msg }}</h4>
</template>

<script lang="ts">
import { ref } from 'vue'
export default {
  setup() {
    const msg = ref('hello')

    return {
      msg
    }
  }
}
</script>

<style lang="scss" scoped></style>
