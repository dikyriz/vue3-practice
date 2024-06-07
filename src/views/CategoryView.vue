<script setup>
import DialogComponent from '../components/dashboard/DialogComponent.vue'
import { useCategoryStore } from '@/stores/CategoryStore'
import { storeToRefs } from 'pinia'
import { onMounted } from 'vue'

//Storage
const CategoryStorage = useCategoryStore()

//State
const { category, dialog, form, categories, dialogDetail, dialogDelete } =
  storeToRefs(CategoryStorage)

//Action
const { submitData, readCategory, getData, addData, editData, deleteData, destroyData } =
  CategoryStorage

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
    <v-btn color="primary" icon="mdi-plus" size="large" @click="addData()" />
  </div>

  <DialogComponent v-model="dialog">
    <template #title>
      <div>{{ category.isUpdate ? 'Update Category' : 'Add Category' }}</div>
    </template>
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
        <v-btn
          :disabled="!form"
          block
          color="success"
          size="large"
          type="submit"
          variant="elevated"
          >{{ category.isUpdate ? 'Update' : 'Add' }}</v-btn
        >
      </v-form>
    </template>
  </DialogComponent>

  <DialogComponent v-model="dialogDetail">
    <template #title>
      {{ category.name }}
    </template>
    <template #content>
      {{ category.description }}
    </template>
  </DialogComponent>

  <DialogComponent v-model="dialogDelete">
    <template #title> Delete Category </template>
    <template #content>
      <div class="text-h6 text-error pa-3">
        Are you sure delete this data <strong>{{ category.name }}</strong
        >?
      </div>
      <v-row>
        <v-col>
          <v-btn color="primary" block @click="destroyData(category.id)">Yes</v-btn>
        </v-col>
        <v-col>
          <v-btn color="error" block @click="dialogDelete = false">No</v-btn>
        </v-col>
      </v-row>
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
          <v-btn size="x-small" color="info" icon="mdi-information" @click="getData(item)" />
          <v-btn
            size="x-small"
            color="primary"
            icon="mdi-pencil"
            class="mx-3"
            @click="editData(item)"
          />
          <v-btn size="x-small" color="error" icon="mdi-trash-can" @click="deleteData(item)" />
        </td>
      </tr>
    </tbody>
  </v-table>
</template>
