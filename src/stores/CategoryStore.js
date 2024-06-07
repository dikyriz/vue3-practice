import { defineStore } from 'pinia'
import { ref, reactive } from 'vue'
import { addDoc, collection, getDocs } from 'firebase/firestore'
import { db } from '@/config/firebase'

export const useCategoryStore = defineStore('Category', () => {
  const dialog = ref(false)
  const form = ref(false)
  const CategoryCollection = collection(db, 'categories')

  const category = reactive({
    name: '',
    description: ''
  })

  const categories = ref(null)

  const submitData = async () => {
    if (!form.value) return
    await addDoc(CategoryCollection, {
      name: category.name,
      description: category.description
    })
    alert('test')
    dialog.value = false

    readCategory()
  }

  const readCategory = async () => {
    const res = await getDocs(CategoryCollection)
    categories.value = res.docs.map((doc) => {
      return { ...doc.data(), id: doc.id }
    })
  }

  return { dialog, form, category, submitData, readCategory, categories }
})
