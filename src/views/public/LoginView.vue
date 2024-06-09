<script setup>
import FormAuthComponent from '../../components/public/FormAuthComponent.vue'
import { ref } from 'vue'

const isLogin = ref(true)
</script>

<template>
  <FormAuthComponent :isLogin="isLogin" />
</template>
