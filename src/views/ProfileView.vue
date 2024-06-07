<script setup>
import IconLink from '../components/IconLink.vue'
import { useUserStorage } from '../stores/UserStorage'

const usersData = useUserStorage()
</script>
<template>
  <div>Profile</div>
  <v-divider></v-divider>
  <IconLink color="red" icon="mdi-youtube" link="https://youtube.com" />
  <IconLink color="blue" icon="mdi-linkedin" link="https://linkedin.com" />
  <IconLink color="red" icon="mdi-instagram" link="https://instagram.com" />

  <div v-for="user in usersData.userData" :key="user.name">
    <p>{{ user.name }}</p>
    <p>{{ user.email }}</p>
  </div>
</template>
