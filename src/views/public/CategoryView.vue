<script setup>
import { storeToRefs } from 'pinia'
import { onMounted } from 'vue'
import { useCategoryStore } from '@/stores/CategoryStore'

//store
const categoryStore = useCategoryStore()

//state
const { categories } = storeToRefs(categoryStore)

//action
const { readCategory } = categoryStore

onMounted(() => {
  readCategory()
})
</script>

<template>
  <h1>Category</h1>
  <v-row class="my-3">
    <v-col cols="12" md="3" v-for="data in categories" :key="data.id">
      <v-sheet
        class="align-center justify-center flex-wrap text-center py-6"
        color="blue-lighten-4"
        height="200"
        rounded="lg"
        width="90%"
        elevation="12"
      >
        <h2 class="text-h5 mb-6">{{ data.name }}</h2>
        <p class="mb-4 text-body-2">
          {{ data.description.substring(0, 30) }} ...<br />
          <router-link
            :to="{ name: 'CategoryById', params: { id: data.id } }"
            class="text-decoration-none text-info"
            >Read More</router-link
          >
        </p>
      </v-sheet>
    </v-col>
  </v-row>
</template>
