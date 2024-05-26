<script setup>
import { ref } from 'vue'
import ListSidebar from './ListSidebar.vue'

const items = ref([
  { text: 'Dashboard', icon: 'mdi-view-dashboard' },
  { text: 'Category', icon: 'mdi-view-list' },
  { text: 'News', icon: 'mdi-newspaper' },
  { text: 'Profile', icon: 'mdi-account-outline' }
])
</script>

<template>
  <v-navigation-drawer :location="$vuetify.display.mobile ? 'bottom' : undefined" temporary>
    <ListSidebar :items="items" />
  </v-navigation-drawer>
</template>
