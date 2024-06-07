<script setup>
import { useUserStorage } from '../stores/UserStorage'

const submitData = () => {
  usersData.addUser()
}

const usersData = useUserStorage()
</script>

<template>
  <div v-for="user in usersData.userData" :key="user.name">
    <p>{{ user.name }}</p>
    <p>{{ user.email }}</p>
    <br />
  </div>
  <div>
    <p>jumlah user {{ usersData.userAmount }}</p>
    <br />
  </div>
  <div>
    <form @submit.prevent="submitData">
      <label>Name</label><br />
      <input type="text" v-model="usersData.userInput.name" /><br /><br />
      <label>Email</label><br />
      <input type="text" v-model="usersData.userInput.email" /><br /><br />

      <input type="submit" value="add user" />
    </form>
  </div>

  <div>data</div>
</template>

<style scoped>
input {
  border: 1px solid black;
}
</style>
