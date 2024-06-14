<script setup>
import { onMounted } from 'vue'
import { useRoute } from 'vue-router'
import { useNewsStore } from '@/stores/newsStore'
import { storeToRefs } from 'pinia'
import DetailNewsComponent from '../../components/news/DetailNewsComponent.vue'

//route
const route = useRoute()

//storage
const newsStore = useNewsStore()

//state
const { detailNews } = storeToRefs(newsStore)

//action
const { detailHandling } = newsStore

onMounted(() => {
  detailHandling(route.params.id)
})
</script>

<template>
  <div v-if="detailNews">
    <DetailNewsComponent :data="detailNews" />
  </div>
</template>
