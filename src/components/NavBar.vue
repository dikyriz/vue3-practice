<script setup>
defineEmits('open')
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

    <v-btn icon="mdi-logout" variant="text"> </v-btn>
  </v-app-bar>
</template>
