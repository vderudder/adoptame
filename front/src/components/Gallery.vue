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
              <b-button href="#" variant="primary" pill>Compartir</b-button>
            </template>
          </b-card>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
export default {
  props: {
    list: Array,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
