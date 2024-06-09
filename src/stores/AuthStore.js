import { auth, db } from '../config/firebase'
import { defineStore } from 'pinia'
import { reactive, ref } from 'vue'
import { createUserWithEmailAndPassword, onAuthStateChanged, signOut } from 'firebase/auth'
import { addDoc, collection, query, where, getDocs } from 'firebase/firestore'
import { useRouter } from 'vue-router'

export const useAuthStore = defineStore('Auth', () => {
  const formInput = ref(false)

  const router = useRouter()

  const userCollection = collection(db, 'users')

  const user = reactive({
    name: '',
    email: '',
    password: ''
  })

  const currentUser = ref(null)

  const userHandler = () => {
    onAuthStateChanged(auth, async (user) => {
      if (user) {
        const queryId = query(userCollection, where('uid', '==', user.uid))

        const queryData = await getDocs(queryId)
        const queryUser = queryData.docs[0].data()

        currentUser.value = {}
        currentUser.value.email = user.email
        currentUser.value.id = user.uid
        currentUser.value.name = queryUser.name
        currentUser.value.isAdmin = queryUser.isAdmin
      } else {
        currentUser.value = null
      }
    })
  }

  const authUser = async () => {
    const data = await createUserWithEmailAndPassword(auth, user.email, user.password)

    await addDoc(userCollection, {
      name: user.name,
      isAdmin: false,
      uid: data.user.uid
    })

    router.push({ name: 'Dashboard' })
  }

  const logoutUser = () => {
    signOut(auth)
      .then(() => {
        router.push({ name: 'Home' })
      })
      .catch((e) => {
        console.log(e)
      })
  }

  return { formInput, user, authUser, userHandler, currentUser, logoutUser }
})