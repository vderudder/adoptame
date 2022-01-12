<template>
  <div>
    <b-container class="my-4">
      <div class="text-center mb-5">
        <b-img
          src="../assets/inicio-sesion.svg"
          fluid
          alt="Registrarse"
        ></b-img>
        <h2>¡Bienvenido!</h2>
      </div>
      <FormularioRegistroCuenta />
    </b-container>
  </div>
</template>

<script>
import FormularioRegistroCuenta from "../components/FormularioRegistroCuenta.vue";
export default {
  name: "RegistroCuenta",
  components: {
    FormularioRegistroCuenta,
  },
};
</script>

<style>
</style>