<template>
  <div>
    <b-container class="my-4">
      <div class="text-center mb-5">
        <b-img
          :src="require('../assets/inicio-sesion.svg')"
          width="300px"
          fluid
          alt="Registrarse"
        ></b-img>
        <h2>¡Bienvenido!</h2>
      </div>
      <FormularioSignup />
    </b-container>
  </div>
</template>

<script>
import FormularioSignup from "../components/FormularioSignup.vue";
export default {
  name: "Signup",
  components: {
    FormularioSignup,
  },
};
</script>

<style>
</style>