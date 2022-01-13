<template>
  <Gallery :list="postList" />
</template>

<script>
// @ is an alias to /src
import { PostFacade } from '../services/post/post.facade'
import Gallery from '../components/Gallery.vue'

export default {
  name: 'Home',
  components: {
    Gallery
  },
  data() {
    return {
      postList: []
    }
  },
  async created() {
    this.postList = await PostFacade.getList()
  }
}
</script>
