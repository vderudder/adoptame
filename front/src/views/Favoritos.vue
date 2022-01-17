<template>
  <div>
    <b-container class="my-4">
      <h1>Favoritos</h1>

      <Gallery :list="favoritesList" v-show="this.favoritesList" />

      <div v-show="this.favoritesList.length == 0">
        <h3>Aun no tienes favoritos, dale like a algun post</h3>
      </div>
    </b-container>
  </div>
</template>

<script>
import { PostFacade } from "../services/post/post.facade";
import Gallery from "../components/Gallery.vue";

export default {
  name: "Favoritos",
  components: {
    Gallery,
  },

  props: {
    list: Array,
  },

  data() {
    return {
      favoritesList: this.list
    }
  },

  async created() {
    this.favoritesList = await PostFacade.getFavoritesList();
  },
};
</script>

<style>
</style>