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

      <b-form>
        <b-form-group
          id="email-form"
          label="Correo electrónico"
          label-for="email"
        >
          <b-form-input
            id="email-input"
            type="email"
            placeholder="ejemplo@ejemplo.com"
            required
          ></b-form-input>
        </b-form-group>

        <b-form-group id="password" label="Contraseña" label-for="contrasena">
          <b-form-input id="password-form" required></b-form-input>
        </b-form-group>

        <div class="d-flex flex-column align-items-center">
          <b-button type="submit" variant="primary" class="mb-2" block pill
            >Iniciar sesión</b-button
          >
          <b-link href="#" class="mb-2 grey-link"
            >¿Olvidó su contraseña?</b-link
          >
          <b-link to="signup">¿No tienes cuenta? Regístrate</b-link>
        </div>

        <div class="d-flex flex-column align-items-center mt-5">
          <b-button type="submit" variant="secondary" class="mb-2" block pill
            >Continuar con Facebook</b-button
          >
          <b-button type="submit" variant="secondary" class="mb-2" block pill
            >Continuar con Google</b-button
          >
        </div>
      </b-form>
    </b-container>
  </div>
</template>

<script>

export default {

};
</script>

<style>
.grey-link {
  color: gray;
}
</style>