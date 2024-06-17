<script setup>
import { useNewsStore } from '@/stores/newsStore'
import { onMounted } from 'vue'
import { storeToRefs } from 'pinia'
import { useRouter } from 'vue-router'

//router
const router = useRouter()

//store
const newsStore = useNewsStore()

//action
const { allNews } = newsStore

const detailNews = (id) => {
  router.push({ name: 'DetailNewsPublic', params: { id: id } })
}

//state
const { newsData } = storeToRefs(newsStore)

onMounted(() => {
  allNews()
})
</script>

<template>
  <h1 class="my-3">landing</h1>
  <v-divider class="border-opacity-100" color="info"></v-divider>
  <v-row class="my-3">
    <v-col cols="12" v-for="data in newsData" :key="data.id">
      <v-card class="mx-auto">
        <v-img
          class="align-end text-white"
          height="400"
          :src="data.image ? data.image : `https://cdn.vuetifyjs.com/images/cards/docks.jpg`"
          cover
        >
        </v-img>
        <v-card-title>{{ data.title.substring(0, 200) }}</v-card-title>

        <v-card-subtitle class="pt-4">
          {{ data.category.name }}
        </v-card-subtitle>

        <v-card-text>
          <div>{{ data.content.substring(0, 200) }} ...</div>
        </v-card-text>

        <v-card-actions>
          <v-btn
            color="info"
            type="button"
            variant="elevated"
            text="Read More"
            @click="detailNews(data.id)"
          ></v-btn>
        </v-card-actions>
      </v-card>
    </v-col>
  </v-row>
</template>
