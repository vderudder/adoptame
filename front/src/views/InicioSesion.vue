<template>
  <div>
    <b-container class="my-4">
      <div class="text-center mb-5">
        <b-img
          src='../assets/inicio-sesion.svg'
          fluid
          alt="Iniciar sesion"
        ></b-img>
        <h2>¡Bienvenido!</h2>
      </div>

      <FormularioInicioSesion />
    </b-container>
  </div>
</template>

<script>
import FormularioInicioSesion from "../components/FormularioInicioSesion.vue";

export default {
  name: "Inicio Sesion",
  components: {
    FormularioInicioSesion,
  },
};
</script>

<style>
.grey-link {
  color: gray;
}
</style>