<script setup>
import { RouterView } from 'vue-router'
// import HelloWorld from './components/HelloWorld.vue'
import { provide } from 'vue'

provide('username', 'Usernames')
</script>

<template>
  <RouterView />
</template>
