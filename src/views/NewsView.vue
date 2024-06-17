<script setup>
import { onMounted } from 'vue'
import { useNewsStore } from '@/stores/newsStore'
import { storeToRefs } from 'pinia'
import { useRouter } from 'vue-router'

//router
const router = useRouter()

//storage
const newsStore = useNewsStore()

//state
const { newsData } = storeToRefs(newsStore)

//action
const { allNews, clearHandling, deleteHandling } = newsStore

onMounted(() => {
  allNews()
})

const detail = (id) => {
  router.push({ name: 'DetailNews', params: { id: id } })
}

const update = (id) => {
  router.push({ name: 'EditNews', params: { id: id } })
}

const addNews = () => {
  router.push({ name: 'CreateNews' })
  clearHandling()
}

const deleteData = (id) => {
  deleteHandling(id)
}
</script>

<template>
  <h1>News</h1>
  <div class="d-flex justify-end my-6">
    <v-btn color="primary" icon="mdi-plus" @click="addNews" size="large"></v-btn>
  </div>
  <v-row justify="center">
    <v-col v-for="data in newsData" :key="data.id" cols="4">
      <v-card>
        <v-img
          class="align-end text-white"
          height="300"
          :src="data.image ? data.image : `https://cdn.vuetifyjs.com/images/cards/docks.jpg`"
          cover
        >
          <v-card-title>{{ data.title.substring(0, 50) }}</v-card-title>
        </v-img>

        <v-card-subtitle class="pt-4">
          {{ data.category.name }}
        </v-card-subtitle>

        <v-card-text>
          <div>{{ data.content.substring(0, 200) }}</div>
        </v-card-text>

        <v-card-actions>
          <v-btn color="orange" text="Detail" @click="detail(data.id)"></v-btn>
          <v-btn color="blue" text="Update" @click="update(data.id)"></v-btn>
          <v-btn color="error" text="Delete" @click="deleteData(data.id)"></v-btn>
        </v-card-actions>
      </v-card>
    </v-col>
  </v-row>
</template>
