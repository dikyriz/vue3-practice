<script setup>
import { ref } from 'vue'
import ListSidebar from './ListSidebar.vue'

const items = ref([
  { text: 'Dashboard', icon: 'mdi-view-dashboard', pathName: 'Dashboard' },
  { text: 'Category', icon: 'mdi-view-list', pathName: 'Category' },
  { text: 'News', icon: 'mdi-newspaper', pathName: 'News' },
  { text: 'Profile', icon: 'mdi-account-outline', pathName: 'Profile' }
])
</script>

<template>
  <v-navigation-drawer :location="$vuetify.display.mobile ? 'bottom' : undefined" temporary>
    <ListSidebar :items="items" />
  </v-navigation-drawer>
</template>
