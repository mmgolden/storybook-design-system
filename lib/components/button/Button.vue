<template>
  <button class="button" @click="click">
    <slot />
  </button>
</template>

<script setup lang="ts">
const emit = defineEmits<{
  click: [event: Event];
}>();

const click = (event: Event) => emit("click", event);
</script>

<style lang="scss" scoped>
@import "./Button.scss";
</style>
