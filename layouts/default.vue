<template>
  <main>
    <header class="c-section">
      <div class="c-container">

         <nuxt-link to="/">
            <img class="c-logo" src="~assets/logo.svg">
         </nuxt-link>

        <categories :categories="categories"></categories>
      </div>
    </header>

    <nuxt/>

    <footer class="c-section">
      <div class="c-container">
        <nav class="o-nav-h">
          <div class="o-nav-h__left">
            <ul id="menu-social" class="o-nav-h__left">
              <li id="menu-item-8" class="fa fa-facebook menu-item menu-item-type-custom menu-item-object-custom menu-item-8"><a target="_blank" href="https://www.facebook.com/cnotv.dev/">Facebook</a></li>
              <li id="menu-item-595" class="fa fa-stack-overflow menu-item menu-item-type-custom menu-item-object-custom menu-item-595"><a target="_blank" href="http://stackoverflow.com/users/story/3793822">Stackoverflow</a></li>
              <li id="menu-item-9" class="fa fa-linkedin menu-item menu-item-type-custom menu-item-object-custom menu-item-9"><a target="_blank" href="https://www.linkedin.com/in/leogiuseppe">Linkedin</a></li>
              <li id="menu-item-11" class="fa fa-github menu-item menu-item-type-custom menu-item-object-custom menu-item-11"><a target="_blank" href="https://github.com/cnotv">GitHub</a></li>
              <li id="menu-item-876" class="fa fa-twitter menu-item menu-item-type-custom menu-item-object-custom menu-item-876"><a target="_blank" href="https://twitter.com/cnotvdev">Twitter</a></li>
            </ul>
          </div>
          <div class="o-nav-h__right">
            <ul id="menu-contact" class="o-nav-h__left">
              <li id="menu-item-14" class="fa fa-phone menu-item menu-item-type-custom menu-item-object-custom menu-item-14"><a href="tel:+4915227897273">Phone</a></li>
              <li id="menu-item-276" class="fa fa-envelope menu-item menu-item-type-custom menu-item-object-custom menu-item-276"><a href="mailto:contact@cnotv.xyz">Mail</a></li>
              <li id="menu-item-410" class="fa fa-pencil menu-item menu-item-type-post_type menu-item-object-page menu-item-410"><a href="https://cnotv.xyz/contact/">Contact</a></li>
            </ul>
          </div>
        </nav>
      </div>
    </footer>
  </main>
</template>

<script>
import { mapGetters } from 'vuex'
import categories from '../components/categories.vue'

export default {
  components: { categories },

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

<style lang="scss" src="./../assets/styles/main.scss"></style>
