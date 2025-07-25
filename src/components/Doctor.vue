<template>
  <div class="container">
    <div class="campo">
      <label for="">CEDULA</label>
      <input v-model="cedula" type="text" />
    </div>
    <div class="campo">
      <label for="">NOMBRE</label>
      <input v-model="nombre" type="text" />
    </div>
    <div class="campo">
      <label for="">APELLIDO</label>
      <input v-model="apellido" type="text" />
    </div>
    <div class="campo">
      <label for="">GENERO</label>
      <input v-model="genero" type="text" />
    </div>
    <button @click="registrarDoctor()" class="guardar">GUARDAR</button>
  </div>
</template>

<script>
import { fachadaRegistrarDoctor } from "../clients/ApiClient";
export default {
  data() {
    return {
      cedula: "",
      nombre: "",
      apellido: "",
      genero: "",
    };
  },
  methods: {
    async registrarDoctor() {
      let doctor = {
        cedula: this.cedula,
        nombre: this.nombre,
        apellido: this.apellido,
        genero: this.genero,
      };
      await fachadaRegistrarDoctor(doctor);
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