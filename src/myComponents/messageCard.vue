<script setup>
const options = [
  {
    addressedTo: 'Para Profesionales',
    type: 'Essentials',
    price: '16,58 US$ al mes',
    userNumber: '1 usuario',
    storage: '3 TB de almacenamiento',
    transfer: 'Transfiere archivos de hasta 100 GB',
    timeToRestore: '180 días para restaurar archivos eliminados',
    followUp: 'Seguimiento de la interacción con los archivos',
    signature: 'Solicitudes de firma ilimitadas.',
    edition: 'Edición de PDF',
    support: 'Grabación, revisión y edición de vídeos'
  },
  {
    addressedTo: 'Para equipos',
    type: 'Business',
    price: '15 US$ al mes por usuario',
    userNumber: '3 usuarios o más',
    storage: 'A partir de 9 TB para el equipo',
    transfer: 'Transfiere archivos de hasta 100 GB',
    timeToRestore: '180 días para restaurar archivos eliminados',
    followUp: 'Seguimiento de la interacción con los archivos',
    signature: 'Solicitudes de firma ilimitadas.',
    edition: 'Edición de PDF',
    support: 'Grabación, revisión y edición de vídeos'
  },
  {
    addressedTo: 'Para empresas',
    type: 'Business Plus',
    price: '24 US$ al mes por usuario',
    userNumber: '3 usuarios o más',
    storage: 'A partir de 15 TB para el equipo',
    transfer: 'Transfiere archivos de hasta 250 GB',
    timeToRestore: '1 año para restaurar los archivos eliminados',
    followUp: 'Seguimiento de la interacción con los archivos',
    signature: 'Solicitudes de firma ilimitadas.',
    edition: 'Edición de PDF',
    support: 'Grabación, revisión y edición de vídeos'
  },
  {
    addressedTo: 'Para grandes organizaciones',
    type: 'Enterprise',
    price: 'Contacta con ventas para conocer los precios',
    userNumber: 'Personalizar el número de usuarios',
    storage: 'Personalizar el almacenamiento',
    transfer: 'Transfiere archivos de hasta 250 GB',
    timeToRestore: 'Herramientas de visibilidad y seguridad de nivel empresarial',
    followUp: 'Integraciones con las mejores soluciones de seguridad',
    signature: '',
    edition: '',
    support: 'Asistencia en vivo y personalizada por parte de expertos.'
  }
]
</script>

<template>
  <div class="container">
    <div v-for="opt in options" :key="opt.addressedTo" class="model">
      <h3 style="font-weight: bold; font-size: 18px; padding-top: 50px">
        {{ opt.addressedTo }}
      </h3>
      <h1>{{ opt.type }}</h1>
      <h2 style="height: 70px">{{ opt.price }}</h2>
      <div class="redirect-free">
        <h3 style="color: white; padding-top: 10px">Probar gratis</h3>
      </div>
      <h3>{{ opt.userNumber }}</h3>
      <h3>{{ opt.storage }}</h3>
      <h3>{{ opt.transfer }}</h3>
      <h3>{{ opt.timeToRestore }}</h3>
      <h3>{{ opt.followUp }}</h3>
      <h3>{{ opt.signature }}</h3>
      <h3>{{ opt.edition }}</h3>
      <h3>{{ opt.support }}</h3>
    </div>
  </div>
</template>

<style scoped>
.container {
  display: flex;
  height: 570px;
  width: 1200px;
  justify-content: space-between;
}

.redirect-free {
  background-color: #0061fe;
  margin-left: 10px;
  margin-right: 10px;
  margin-top: 20px;
  margin-bottom: 20px;
  text-align: start;
  height: 50px;
  border-radius: 15px;
}

.model {
  background-color: #f7f5f2;
  border-radius: 5%;
  margin-top: 10px;
  margin-bottom: 10px;
  text-align: center;
  width: 290px;
}

h3 {
  text-align: left;
  line-height: 150%;
  margin-left: 10px;
  margin-right: 10px;
}

h1 {
  text-align: left;
  margin-left: 10px;
  font-weight: bold;
}

h2 {
  text-align: left;
  margin-left: 10px;
  font-weight: bold;
}
</style>
