<script setup>
import headerHome from './headerHome.vue'
import bodyHome from './bodyHome.vue'
import messageCard from './messageCard.vue'
</script>

<template>
  <headerHome />
  <bodyHome />
  <br />
  <div class="comment">
    <h1>Pasa a la acción con Dropbox</h1>
    <h3>
      Almacena y comparte archivos, firma y envía documentos, graba pantallas y aporta comentarios.
      Todo ello con Dropbox.
    </h3>
  </div>
  <br />
  <messageCard />
</template>

<style scoped>
.comment {
  text-align: center;
  height: 150px;
  padding-top: 50px;
}
</style>
