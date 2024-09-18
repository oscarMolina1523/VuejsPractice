<script setup>
import { ref, onMounted } from 'vue'
import photosService from '../services/photosService'
const Photos = ref([])

async function showData() {
  const response = await photosService.getApi()
  Photos.value = response
  console.log(Photos)
}
onMounted(showData)

console.log(Photos)
</script>

<template>
  <h1>This is the photos component</h1>
  <ul>
    <li v-for="photo in Photos" :key="photo.id">{{ photo.title }}</li>
  </ul>
</template>

<style scoped></style>
