<script setup>
import { RouterView } from 'vue-router'
import { onMounted } from 'vue'
import { useAuthStore } from './stores/AuthStore'

const auth = useAuthStore()

onMounted(() => {
  auth.userHandler()
})
</script>

<template>
  <RouterView />
</template>
