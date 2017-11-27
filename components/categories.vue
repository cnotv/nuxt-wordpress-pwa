<template>
  <nav class="o-nav-h">
    <ul class="o-nav-h__left">
      <li v-for="item in categories">
        <nuxt-link :to="slugToUrl(item.slug)">{{ item.name }}</nuxt-link>
      </li>
    </ul>

    <div class="o-search__bar">
      <section>
        <input placeholder="You are looking for.." class="js-search-field">
      </section>
    </div>

    <div class="o-nav-h__right">
      <a class="js-search o-search__toggle"><i class="fa"></i></a>
      <a class="js-contact js-modal" href="/contact" data-toggle="modal" data-target="#cnotvModal"><i class="fa fa-pencil"></i></a>
      <a class="js-burger o-nav-h__burger" type="button"><i class="fa fa-navicon"></i></a>
    </div>

  </nav>
</template>

<script>
export default {
  props: ['categories'],
  methods: {
    slugToUrl(slug) {
      return `/category/${slug}`
    }
  }
}
</script>

<style lang="scss" scoped>
</style>
