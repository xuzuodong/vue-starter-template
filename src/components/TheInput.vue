<script setup lang="ts">
const props = defineProps<{
    modelValue: string
}>()

const modelValue = useVModel(props, 'modelValue')
</script>

<template>
  <input
    id="input"
    v-model="modelValue"
    type="text"
    v-bind="$attrs"
    class="px-4 py-x w-[250px] text-center bg-transparent border rounded border-gray-200 outline-none"
  >
</template>
