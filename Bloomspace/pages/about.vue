<template>
  <div class="about-page">
    <Header />
    
    <section class="about-content">
      <h1>About Bloomspace</h1>
      <p>Welcome to Bloomspace, your ultimate destination for all things related to plants and gardening.</p>
      <p>Our mission is to provide you with the knowledge, inspiration, and resources you need to create a thriving garden and bring the beauty of nature into your home.</p>
      <p>Whether you're a seasoned gardener or just starting out, our team of experts is here to guide you every step of the way.</p>
      <p>Join us in exploring the wonderful world of plants and discover the joy of nurturing your own green oasis.</p>
    </section>
    
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
  
  // Page configuration
  head() {
    return {
      title: 'About Bloomspace',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: 'Learn about Bloomspace, your go-to source for plant-related knowledge and inspiration.',
        },
      ],
    };
  },
};
</script>

<style scoped>
/* Styles for the about page */
.about-page {
  font-family: Arial, sans-serif;
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
}

.about-content h1 {
  font-size: 2rem;
  margin-bottom: 20px;
}

.about-content p {
  margin-bottom: 15px;
  line-height: 1.6;
}
</style>
