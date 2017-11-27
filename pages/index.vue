<template>
  <section class="c-section">
    <div class="c-container-s">
      <post-list v-if="posts" :posts="posts" title="Recent Posts"></post-list>
    </div>
  </section>
</template>

<script>

import { mapGetters } from 'vuex'
import api from "../api/index";
import postList from '../components/postList.vue'
import recentPosts from '../components/recentPosts.vue'

export default {
  components: { postList, recentPosts },
  async asyncData({ params }) {
    // We can use async/await ES6 feature
    let { data } = await api.getPosts()

    return {
      posts: data
    }
  },
  head() {
    return {
      title: `Nuxt WordPress | Home`,
      meta: [
        {
          name: 'description',
          content: 'This is the meta description of the content.'
        }
      ]
    }
  },
  data() {
    return {
      title: 'default'
    }
  },
  mounted() {
    if (this.categories.length === 0) {
      this.$store.dispatch('getCategories')
    }
  },
  computed: {
    ...mapGetters([
      'categories'
    ])
  }
}
</script>
