<template>
  <div class="blog-layout">
    <Header />

    <main class="blog-layout-content">
      <slot></slot>
    </main>

    <Footer />
  </div>
</template>

<script>
import Header from '~/components/Header.vue';
import Footer from '~/components/Footer.vue';

export default {
  components: {
    Header,
    Footer,
  },
};
</script>

<style scoped>
/* Styles for the blog layout */
.blog-layout {
  font-family: Arial, sans-serif;
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
}

.blog-layout-content {
  margin-top: 20px;
}
</style>
