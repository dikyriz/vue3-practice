<script setup>
import { useAuthStore } from '@/stores/AuthStore'
import { storeToRefs } from 'pinia'

const auth = useAuthStore()
const { currentUser } = storeToRefs(auth)
</script>

<template>
  <div>
    <h2>halo {{ currentUser?.name }} ({{ currentUser?.email }})</h2>
    <p>welcome</p>
  </div>
</template>
