import { ref, reactive } from 'vue'
import { defineStore } from 'pinia'
import { db } from '@/config/firebase'
import { useAuthStore } from './AuthStore'
import { useRouter } from 'vue-router'
import { collection, addDoc, getDoc, getDocs, doc, updateDoc, deleteDoc } from 'firebase/firestore'

export const useNewsStore = defineStore('News', () => {
  //state
  const news = reactive({
    id: '',
    title: '',
    content: '',
    category: '',
    isUpdate: ''
  })

  const formInput = ref(false)

  const newsData = ref(null)

  const detailNews = ref(null)

  //router
  const router = useRouter()

  //storage
  const authStore = useAuthStore()

  //collection
  const newsCollection = collection(db, 'news')

  const handleSubmit = async () => {
    if (news.isUpdate) {
      await updateDoc(doc(newsCollection, news.id), {
        title: news.title,
        content: news.content,
        category: {
          id: news.category.id,
          name: news.category.name
        }
      })
    } else {
      const now = Date.now()
      await addDoc(newsCollection, {
        title: news.title,
        content: news.content,
        category: {
          id: news.category.id,
          name: news.category.name
        },
        isApprove: false,
        image: null,
        writtenBy: {
          id: authStore.currentUser.id,
          name: authStore.currentUser.name,
          email: authStore.currentUser.email
        },
        createdAt: now
      })
      alert('success created')
    }
    router.push({ name: 'News' })
  }

  const allNews = async () => {
    const dataBerita = await getDocs(newsCollection)
    newsData.value = dataBerita.docs.map((doc) => {
      // console.log(doc.id, doc.data())
      return { ...doc.data(), id: doc.id }
    })
  }

  const detailHandling = async (idParams) => {
    const docRef = doc(newsCollection, idParams)
    const docDetail = await getDoc(docRef)

    detailNews.value = docDetail.data()
  }

  const clearHandling = () => {
    ;(news.id = ''),
      (news.title = ''),
      (news.content = ''),
      (news.category = ''),
      (news.isUpdate = false)
  }

  const updateHandling = async (idParams) => {
    const docRef = doc(newsCollection, idParams)
    const docDetail = await getDoc(docRef)

    news.id = docRef.id
    news.title = docDetail.data().title
    news.content = docDetail.data().content
    news.category = docDetail.data().category
    news.isUpdate = true
  }

  const deleteHandling = async (idParams) => {
    await deleteDoc(doc(newsCollection, idParams))
    alert('delete success')
    allNews()
  }

  return {
    news,
    formInput,
    handleSubmit,
    allNews,
    newsData,
    detailNews,
    detailHandling,
    updateHandling,
    clearHandling,
    deleteHandling
  }
})
