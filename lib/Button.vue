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

<style scoped>
.button {
  background: #0c4a6e;
  color: #ffffff;
  border: 1px solid #0c4a6e;
  border-radius: 4px;
  padding: 8px 16px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: 600;
  font-size: 14px;
}

.button:hover {
  cursor: pointer;
  background: #082f49;
  border-color: #082f49;
}
</style>
