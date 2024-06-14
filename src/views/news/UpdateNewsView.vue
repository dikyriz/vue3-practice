<script setup>
import FormInputNews from '@/components/news/FormInputNews.vue'
import { useRoute } from 'vue-router'
import { useNewsStore } from '@/stores/newsStore'

import { onMounted } from 'vue'

//route
const route = useRoute()

//storage
const newsStore = useNewsStore()

//action
const { updateHandling } = newsStore

onMounted(() => {
  updateHandling(route.params.id)
})
</script>

<template>
  <h1>update news</h1>
  <FormInputNews />
</template>
