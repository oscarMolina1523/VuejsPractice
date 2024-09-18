<script setup>
import { useRouter } from 'vue-router'
const router = useRouter()
function navigateToPhotos() {
  router.push('/photos')
}
</script>

<template>
  <div class="container">
    <div class="left-panel">
      <br />
      <p class="letter1">Todo lo que tu empresa necesita para trabajar en una misma ubicacion</p>
      <br />
      <div class="redirect-prueba">
        <h3
          @click="navigateToPhotos()"
          style="padding-top: 10px; padding-left: 10px; color: white; font-size: 15px"
        >
          Iniciar prueba gratuita
        </h3>
      </div>
      <p style="margin-top: 10px; margin-bottom: 10px; margin-left: 10px">Cancela cuando quieras</p>
      <p class="letter-content">
        Colabora sin problemas y entrega el trabajo más rápido con Dropbox. Almacena tu contenido,
        edita archivos PDF, comparte vídeos, firma documentos y realiza un seguimiento de la
        actividad de los archivos sin salir de Dropbox.Almacena y comparte archivos, firma y envía
        documentos, graba pantallas y aporta comentarios.
      </p>
    </div>
    <div class="right-panel">
      <div
        style="
          background-color: white;
          margin-top: 150px;
          margin-left: 95px;
          height: 300px;
          width: 400px;
          border-radius: 15px;
        "
      >
        <h1>Esto seria el panel blanco</h1>
      </div>
    </div>
  </div>
</template>

<style>
.container {
  display: flex;
  height: 570px;
  width: 1200px;
}

.content {
  background-color: peachpuff;
  height: 150px;
}

.left-panel {
  flex: 1;
  background-color: rgb(249, 241, 235);
}

.right-panel {
  flex: 1;
  background-color: #97bfff;
}

.redirect-prueba {
  margin-left: 10px;
  margin-right: 10px;
  background-color: #0061fe;
  height: 50px;
  border-radius: 10px;
}

.letter1 {
  font-size: 47px;
  direction: ltr;
  margin-top: 50px;
  margin-left: 10px;
  line-height: 120%;
  margin-bottom: 55px;
}

.letter-content {
  font-weight: bold;
  background-color: rgb(231, 219, 209);
  text-align: center;
  height: 150px;
  padding-top: 20px;
  padding-left: 10px;
  padding-right: 10px;
}
</style>
