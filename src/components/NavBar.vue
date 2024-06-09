<script setup>
import { useAuthStore } from '@/stores/AuthStore'
defineEmits('open')

const auth = useAuthStore()
const { logoutUser } = auth
</script>

<template>
  <v-app-bar color="primary" prominent>
    <v-app-bar-nav-icon variant="text" @click.stop="$emit('open')"></v-app-bar-nav-icon>

    <v-toolbar-title>Admin News</v-toolbar-title>

    <v-spacer></v-spacer>

    <template v-if="$vuetify.display.mdAndUp">
      <v-btn icon="mdi-magnify" variant="text"></v-btn>

      <v-btn icon="mdi-filter" variant="text"></v-btn>
    </template>

    <v-btn icon="mdi-logout" variant="text" @click="logoutUser"> </v-btn>
  </v-app-bar>
</template>
