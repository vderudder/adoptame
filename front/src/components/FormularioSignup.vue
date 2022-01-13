<template>
  <b-form>
    <b-form-group id="email-form" label="Correo electrónico" label-for="email">
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
      <b-button type="submit" variant="primary" class="mb-4" block pill
        >Registrarse</b-button
      >
      <p class="text-muted">O BIEN</p>
    </div>

    <div class="d-flex flex-column align-items-center mt-3">
      <b-button type="submit" variant="secondary" class="mb-2" block pill
        >Continuar con Facebook</b-button
      >
      <b-button type="submit" variant="secondary" class="mb-2" block pill
        >Continuar con Google</b-button
      >
    </div>

    <div class="text-center mt-5">
      <b-link to="login">¿Ya tienes cuenta? Inicia sesión</b-link>
    </div>
  </b-form>
</template>

<script>
export default {};
</script>

<style>
</style>