<template>
  <div>
    <article v-for="item in posts">
      <header>
        <h2 class="h4">
          <nuxt-link :to="slugToUrl(item.slug)">{{ item.title }}</nuxt-link>
        </h2>
      </header>
      
      <section v-html="item.excerpt"></section>

      <footer>
        <div><i class="fa fa-tag"></i> tags</div>
        <div>
          <i class="fa fa-clock-o"></i>
          Reading time: <b>3 mins</b>
        </div>
      </footer>
    </article>
  </div>
</template>

<script>

export default {
  props: ['posts', 'title'],
  methods: {
    slugToUrl(slug) {
      return `/${slug}`
    }
  }
}
</script>

<style>
</style>
