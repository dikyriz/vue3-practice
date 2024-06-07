import { defineStore } from 'pinia'
import { ref, reactive, computed } from 'vue'

export const useUserStorage = defineStore('User', () => {
  const userData = ref([
    {
      name: 'Me',
      email: 'mail@email.com'
    },
    {
      name: 'Me2',
      email: 'mail4@email.com'
    }
  ])

  const userInput = reactive({
    name: '',
    email: ''
  })

  const clearInput = () => {
    ;(userInput.name = ''), (userInput.email = '')
  }

  const addUser = () => {
    userData.value.push({
      name: userInput.name,
      email: userInput.email
    })

    clearInput()
  }

  const userAmount = computed(() => {
    return userData.value.length
  })

  return { userData, addUser, userInput, userAmount }
})
