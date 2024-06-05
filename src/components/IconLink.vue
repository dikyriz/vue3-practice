<script setup>
defineProps({
  color: {
    type: String,
    required: true
  },
  icon: {
    type: String,
    required: true
  },
  link: {
    type: String,
    required: true
  }
})
</script>

<template>
  <v-btn class="ma-2" :color="color" :icon="icon" :href="link" target="_blank"></v-btn>
</template>
