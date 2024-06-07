<script setup>
import DialogComponent from '../components/dashboard/DialogComponent.vue'
import { useCategoryStore } from '@/stores/CategoryStore'
import { storeToRefs } from 'pinia'
import { onMounted } from 'vue'

const CategoryStorage = useCategoryStore()

const { category, dialog, form, categories } = storeToRefs(CategoryStorage)

const { submitData, readCategory } = CategoryStorage

onMounted(() => {
  readCategory()
})

const nameRules = [
  (value) => {
    if (value) return true
    return 'Isi dahulu'
  }
]

const descriptionRules = [
  (value) => {
    if (value) return true
    return 'Isi dahulu'
  }
]
</script>
<template>
  <div>Category</div>
  <div class="d-flex justify-end">
    <v-btn color="primary" icon="mdi-plus" size="large" @click="dialog = true" />
  </div>

  <DialogComponent v-model="dialog">
    <template #title?> Add Category </template>
    <template #content>
      <v-form v-model="form" @submit.prevent="submitData">
        <v-text-field
          class="mb-1"
          :rules="nameRules"
          v-model="category.name"
          label="Name"
        ></v-text-field>
        <v-textarea
          class="mb-1"
          :rules="descriptionRules"
          v-model="category.description"
          label="Description"
        ></v-textarea>
        <v-btn :disabled="!form" block color="success" size="large" type="submit" variant="elevated"
          >Add</v-btn
        >
      </v-form>
    </template>
  </DialogComponent>

  <!-- Table -->

  <v-table>
    <thead>
      <tr>
        <th class="text-left">No</th>
        <th class="text-left">Name</th>
        <th class="text-center">Action</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="(item, index) in categories" :key="item.id">
        <td>{{ index + 1 }}</td>
        <td>{{ item.name }}</td>
        <td class="text-center">
          <v-btn size="x-small" color="info" icon="mdi-information" />
          <v-btn size="x-small" color="primary" icon="mdi-pencil" class="mx-3" />
          <v-btn size="x-small" color="error" icon="mdi-trash-can" />
        </td>
      </tr>
    </tbody>
  </v-table>
</template>
