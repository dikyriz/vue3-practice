<script setup>
import { useCategoryStore } from '@/stores/CategoryStore'
import { storeToRefs } from 'pinia'
import { onMounted } from 'vue'

const CategoryStore = useCategoryStore()

const { categories } = storeToRefs(CategoryStore)

const { readCategory } = CategoryStore

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
      <v-form>
        <v-text-field
          density="compact"
          placeholder="Title News"
          variant="outlined"
          :rules="titleRules"
          class="my-5"
        ></v-text-field>

        <v-textarea
          density="compact"
          label="Content Berita"
          class="my-5"
          variant="outlined"
          :rules="contentRules"
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
          ></v-select>
        </div>

        <v-btn type="submit" class="mb-8" color="blue" size="large" variant="tonal" block>
          submit
        </v-btn>
      </v-form>
    </v-card>
  </div>
</template>
