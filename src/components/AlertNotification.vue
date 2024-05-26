<script setup>
defineProps({
  typeValue: {
    type: String,
    required: true
  }
})
</script>

<template>
  <v-alert :type="typeValue" variant="tonal" closable close-label="Close Alert">
    <slot name="title"></slot>
    <slot></slot>
  </v-alert>
</template>
