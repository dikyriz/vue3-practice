<script setup>
import NotFound from '../../assets/404.svg'
</script>

<template>
  <div class="d-flex justify-center">
    <div>
      <img :src="NotFound" style="width: 40vw" alt="" />
      <p>Not Found</p>
      <v-btn color="green" class="my-10 block" :to="{ name: 'Home' }">Back to home</v-btn>
    </div>
  </div>
</template>
