<script setup>
import { useRouter } from 'vue-router'

const router = useRouter()

const CategoryBack = () => {
  router.push({ name: 'Category' })
}
</script>

<template>
  <div>
    <p>Halaman Category {{ $route.params.name }}</p>

    <v-btn type="button" @click="CategoryBack">Back</v-btn>
  </div>
</template>
