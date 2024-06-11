<script setup>
import { useAuthStore } from '@/stores/AuthStore'
import { storeToRefs } from 'pinia'

const auth = useAuthStore()
const { currentUser } = storeToRefs(auth)
</script>

<template>
  <div>
    <div v-if="!currentUser">
      <h1>loading</h1>
    </div>
    <div v-else>
      <h2>halo {{ currentUser.name }} ({{ currentUser.email }})</h2>
      <p>welcome</p>
    </div>
  </div>
</template>
