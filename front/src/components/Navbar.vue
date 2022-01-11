<template>
  <div>
    <b-navbar toggleable="lg" type="light" variant="light">
      <b-navbar-brand href="#">adoptame</b-navbar-brand>

      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav>
          <b-nav-item>
          <router-link to="/">Home</router-link>
          </b-nav-item>

          <b-nav-item>
          <router-link to="/nosotros">Nosotros</router-link>
          </b-nav-item>
          
          <b-nav-item>
          <router-link to="/donaciones">Donaciones</router-link>
          </b-nav-item>
        </b-navbar-nav>

        <!-- Right aligned nav items -->
        <b-navbar-nav class="ml-auto">
          <b-button variant="outline-primary">Ingresar</b-button>
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
