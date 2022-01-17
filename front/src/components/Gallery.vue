<template>
  <b-container class="gallery my-4">
    <!-- Stack the columns on mobile by making one full-width and the other half-width -->
    <b-row align-h="center">
      <b-col v-for="post in list" :key="post.id" cols="12" lg="4">
        <b-card
          :title="post.title"
          :img-src="post.photoUrl"
          :img-alt="post.title"
          img-top
          tag="article"
          style="max-width: 20rem"
          class="mb-2 mx-auto"
        >
          <b-card-text>
            {{ post.description }}
          </b-card-text>
          <template #footer>
            <div class="d-flex justify-content-between">
              <b-button variant="primary" pill>Compartir</b-button>
              <b-button
                @click="likePost(post.id)"
                variant="outline-secondary"
                pill
                >❤</b-button
              >
            </div>
          </template>
        </b-card>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
import { PostFacade } from "../services/post/post.facade";
export default {
  props: {
    list: Array,
  },

  methods: {
    async likePost(postId) {
      if (await PostFacade.isFavorite(postId)) {
        PostFacade.removeFavorite(postId);
        console.log('eliminado')
      }
      else {
        PostFacade.addFavorite(postId)
        console.log('agregado')
      }
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
