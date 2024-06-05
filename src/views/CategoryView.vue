<script setup></script>
<template>
  <div>Category</div>
  <v-list>
    <v-list-item :to="{ name: 'Category-name', params: { name: '1' } }">1</v-list-item>
    <v-list-item :to="{ name: 'Category-name', params: { name: '2' } }">2</v-list-item>
    <v-list-item :to="{ name: 'Category-name', params: { name: '3' } }">3</v-list-item>
  </v-list>
</template>
