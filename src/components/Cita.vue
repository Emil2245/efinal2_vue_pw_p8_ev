<template>
  <div class="container">
    <div class="campo">
      <label for="">CEDULA DOCTOR</label>
      <input v-model="cedulaP" type="text" />
    </div>
    <div class="campo">
      <label for="">CEDULA PACIENTE</label>
      <input v-model="cedulaD" type="text" />
    </div>

    <div class="campo">
      <label for="">FECHA</label>
      <input v-model="fecha" type="date" />
    </div>
    <button @click="buscarCita()" class="guardar">GUARDAR</button>
  </div>
</template>

<script>
import {
fachadabuscarCitas
} from "../clients/ApiClient";
export default {
  data() {
    return {
      cedulaP: "",
      cedulaD: "",
      fecha: "",
      citas:[]
    };
  },
  methods: {
    async buscarCita() {
      this.citas = 
      await fachadabuscarCitas(cedulaP, cedulaD, fecha);
    },
    
  },
};
</script>

<style>
.container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  /* width: 100vw;
  height: 100vh; */

  margin: 50px 0px;
  border: 1px black solid;
  border-radius: 20px;
}
.campo {
  display: flex;
  flex-direction: column;
  align-content: left;
  justify-content: left;
  margin-bottom: 10px;
}
</style>