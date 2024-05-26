<script setup>
import { ref } from 'vue'
import ListSidebar from './ListSidebar.vue'

const items = ref([
  { text: 'Dashboard', icon: 'mdi-view-dashboard', path: '/' },
  { text: 'Category', icon: 'mdi-view-list', path: '/category' },
  { text: 'News', icon: 'mdi-newspaper', path: '/news' },
  { text: 'Profile', icon: 'mdi-account-outline', path: '/profile' }
])
</script>

<template>
  <v-navigation-drawer :location="$vuetify.display.mobile ? 'bottom' : undefined" temporary>
    <ListSidebar :items="items" />
  </v-navigation-drawer>
</template>
