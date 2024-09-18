<template>
  <button class="button" @click="navigateToLogin()">Login</button>
  <button class="button" @click="navigateToRegister()">Register</button>
</template>

<script setup>
import { useRouter } from 'vue-router'

const router = useRouter()

function navigateToLogin() {
  router.push('/')
}

function navigateToRegister() {
  router.push('/about')
}
</script>

<style scoped>
.button {
  width: 80px;
  height: 25px;
  margin-left: 5px;
  outline: none;
}

.button:hover {
  background-color: yellow;
  border-color: transparent;
}
</style>
