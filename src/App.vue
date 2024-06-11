<script setup>
import { RouterView } from 'vue-router'
import { onMounted, provide } from 'vue'
import { useAuthStore } from './stores/AuthStore'
import { storeToRefs } from 'pinia'

const auth = useAuthStore()
const { currentUser } = storeToRefs(auth)

provide('currentUser', currentUser)

onMounted(() => {
  auth.userHandler()
})
</script>

<template>
  <RouterView />
</template>
