<script setup>
import { RouterView } from 'vue-router'
// import HelloWorld from './components/HelloWorld.vue'
import { ref, provide } from 'vue'
import SideBar from '../components/SideBar.vue'
import NavBar from '../components/NavBar.vue'

const drawer = ref(false)

provide('username', 'Usernames')

const open = () => {
  drawer.value = !drawer.value
}
</script>

<template>
  <v-layout>
    <!-- Sidebar -->
    <SideBar v-model="drawer" />
    <!-- Navbar -->
    <NavBar @open="open" />
    <!-- Main -->
    <v-main style="height: 500px">
      <v-card-text>
        <RouterView />
      </v-card-text>
    </v-main>
  </v-layout>
</template>
