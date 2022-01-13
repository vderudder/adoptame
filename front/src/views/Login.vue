<template>
  <div>
    <b-container class="my-4">
      <div class="text-center mb-5">
        <b-img
          :src="require('../assets/inicio-sesion.svg')"
          width="300px"
          fluid
          alt="Iniciar sesion"
        ></b-img>
        <h2>¡Bienvenido!</h2>
      </div>

      <FormularioLogin />
    </b-container>
  </div>
</template>

<script>
import FormularioLogin from "../components/FormularioLogin.vue";

export default {
  name: "Login",
  components: {
    FormularioLogin,
  },
};
</script>

<style>
.grey-link {
  color: gray;
}
</style>