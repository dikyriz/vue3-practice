<script setup>
import { useCategoryStore } from '@/stores/CategoryStore'
import { storeToRefs } from 'pinia'
import { onMounted } from 'vue'
import { useNewsStore } from '@/stores/newsStore'

//store
const CategoryStore = useCategoryStore()
const NewsStore = useNewsStore()
//state
const { categories } = storeToRefs(CategoryStore)
const { news, formInput } = storeToRefs(NewsStore)
//action
const { readCategory } = CategoryStore
const { handleSubmit } = NewsStore

const titleRules = [
  (value) => {
    if (value) return true
    return 'judul harus diisi'
  }
]

const contentRules = [
  (value) => {
    if (value) return true
    return 'konten harus diisi'
  }
]

const categoryRules = [
  (value) => {
    if (value) return true
    return 'category harus diisi'
  }
]

onMounted(() => {
  readCategory()
})
</script>

<template>
  <div class="mt-8">
    <v-card class="mx-auto pa-12 pb-8" elevation="8" max-width="90%" rounded="lg">
      <v-form v-model="formInput" @submit.prevent="handleSubmit">
        <v-text-field
          density="compact"
          placeholder="Title News"
          variant="outlined"
          :rules="titleRules"
          class="my-5"
          v-model="news.title"
        ></v-text-field>

        <v-textarea
          density="compact"
          label="Content Berita"
          class="my-5"
          variant="outlined"
          :rules="contentRules"
          v-model="news.content"
        ></v-textarea>

        <div v-if="categories">
          <v-select
            class="my-5"
            :rules="categoryRules"
            :items="categories"
            item-title="name"
            item-value="id"
            label="category"
            return-object
            variant="outlined"
            v-model="news.category"
          ></v-select>
        </div>

        <v-btn
          type="submit"
          :disabled="!formInput"
          class="mb-8"
          color="blue"
          size="large"
          variant="tonal"
          block
        >
          submit
        </v-btn>
      </v-form>
    </v-card>
  </div>
</template>
