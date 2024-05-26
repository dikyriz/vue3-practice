<script setup>
// import { RouterLink, RouterView } from 'vue-router'
// import HelloWorld from './components/HelloWorld.vue'
import { ref, provide } from 'vue'
import SideBar from './components/SideBar.vue'
import NavBar from './components/NavBar.vue'
import AlertNotification from './components/AlertNotification.vue'

const drawer = ref(false)
const show = ref(false)
const showError = ref(false)

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
        The navigation drawer will appear from the bottom on smaller size screens.
      </v-card-text>
      <v-card-text>
        <v-btn type="button" @click="show = !show"> show </v-btn>
        <v-btn type="button" @click="showError = !showError"> show error </v-btn>
        <AlertNotification v-model="show" typeValue="success">
          <template #title>
            <span class="text-h5">Title</span>
          </template>
          <template #default>
            <ul>
              <li>1</li>
              <li>2</li>
              <li>3</li>
            </ul>
          </template>
        </AlertNotification>

        <AlertNotification v-model="showError" typeValue="error">
          <template #title>
            <span class="text-h5">Title</span>
          </template>
          <template #default>
            <ul>
              <li>1</li>
              <li>2</li>
              <li>3</li>
            </ul>
          </template>
        </AlertNotification>
      </v-card-text>
    </v-main>
  </v-layout>
</template>
