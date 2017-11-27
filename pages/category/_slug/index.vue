<template>
  <section class="c-section">
    <div class="c-container-s">
      <post-list v-if="posts" :posts="category_posts" :title="slug"></post-list>
      <recent-posts v-if="posts" :posts="posts.data"></recent-posts>
    </div>
  </section>
</template>
<script>
import { mapGetters } from 'vuex'
import api from "../../../api/index";
import postList from '../../../components/postList.vue'
import recentPosts from '../../../components/recentPosts.vue'
import categories from '../../../components/categories.vue'

export default {
  components: { postList, categories, recentPosts },
  async asyncData({ params }) {
    // We can use async/await ES6 feature
    let { posts } = await api.getCategory(params.slug)

    return {
      category_posts: posts,
      slug: params.slug
    }
  },
  head() {
    return {
      title: `Nuxt WordPress | ${this.slug}`,
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
    // this.$store.dispatch('getCategory', this.$route.params.slug)
    console.log(this.categories)
    if (this.categories.length === 0) {
      this.$store.dispatch('getCategories')
    }
    this.$store.dispatch('getPosts')
  },
  computed: {
    ...mapGetters([
      'posts',
      'category',
      'categories'
    ])
  }
}
</script>

<style>
</style>
