<script setup>
const options = ['¿Por que Dropbox?', 'Funciones', 'Planes y precio']
const others = ['Asistencia', 'Contacto', 'Iniciar sesion']
</script>

<template>
  <div class="container">
    <div style="justify-content: flex-start; display: flex; align-items: center">
      <font-awesome-icon :icon="['fas', 'user']" />
      <h2>Dropbox</h2>
      <h3 v-for="opt in options" :key="opt">{{ opt }}</h3>
    </div>
    <div style="justify-content: flex-end; display: flex; align-items: center">
      <h3 v-for="other in others" :key="other">{{ other }}</h3>
    </div>
    <div class="redirect-content">
      <h3 style="color: white; padding-top: 7px">Comenzar</h3>
    </div>
  </div>
</template>

<style scoped>
.container {
  position: fixed; /**esta posicion es la que nos ayuda a que pueda estar de manera estatica */
  background-color: white;
  width: 1200px;
  height: 50px;
  display: flex;
  justify-content: space-between;
}

.redirect-content {
  margin-left: 10px;
  background-color: #0061fe;
  height: 50px;
  width: 180px;
}

h3 {
  margin-right: 20px;
  margin-left: 20px;
  align-items: center;
}

h2 {
  font-weight: bold;
}
</style>
