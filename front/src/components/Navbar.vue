<template>
  <div>
    <b-navbar toggleable="lg" type="light" variant="light">
      <b-navbar-brand to="/">adoptame</b-navbar-brand>

      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav>
          <b-nav-item to="/"> Home</b-nav-item>
          <b-nav-item to="nosotros"> Nosotros </b-nav-item>          
          <b-nav-item to="faqs"> FAQs </b-nav-item>         
        </b-navbar-nav>

        <!-- Right aligned nav items -->
        <b-navbar-nav class="ml-auto">
          <b-button variant="primary mr-3" to="ingresar" pill>Iniciar sesión</b-button>
          <b-button variant="outline-primary" to="registrar" pill>Registrarme</b-button>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </div>
</template>

<script>
export default{

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
router-link {
  text-decoration: none;

}
</style>
