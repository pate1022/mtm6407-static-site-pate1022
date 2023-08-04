<template>
  <div class="home-page">
    <Header />
    
    <section class="hero">
      <h1>Welcome to Bloomspace</h1>
      <p>Your one-stop destination for all things plants and gardening.</p>
      <a href="/plants" class="btn">Explore Plants</a>
    </section>
    
    <section class="featured-plants">
      <h2>Featured Plants</h2>
      <div class="plant-cards">
        <PlantCard
          v-for="plant in featuredPlants"
          :key="plant.id"
          :plantName="plant.name"
          :imageSrc="plant.imageSrc"
        />
      </div>
    </section>
    
    <Footer />
  </div>
</template>

<script>
import Header from '~/components/Header.vue';
import Footer from '~/components/Footer.vue';
import PlantCard from '~/components/PlantCard.vue';

export default {
  components: {
    Header,
    Footer,
    PlantCard,
  },
  
  data() {
    return {
      featuredPlants: [
        {
          id: 1,
          name: 'Succulent',
          imageSrc: 'https://www.bhg.com/thmb/SfvVALaQxFyi4vYdbhBR11S41S8=/1280x0/filters:no_upscale():strip_icc()/indoor-potted-houseplants-703b321a-81cf8e1f9aee48a28e1be3bbc45e4386.jpg',
        },
        {
          id: 2,
          name: 'Fiddle Leaf Fig',
          imageSrc: 'https://cdn.shopify.com/s/files/1/0266/5745/6183/products/Photo16-2-22_112757am_500x.jpg?v=1644972297',
        },
    
      ],
    };
  },
  
  // Page configuration
  head() {
    return {
      title: 'Bloomspace - Your Ultimate Plant Resource',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: 'Discover a wide variety of plants and gardening tips at Bloomspace.',
        },
      ],
    };
  },
};
</script>

<style scoped>
/* Styles for the home page */
.home-page {
  font-family: Arial, sans-serif;
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
}

.hero {
  text-align: center;
  padding: 100px 0;
}

.hero h1 {
  margin-bottom: 20px;
  font-size: 2.5rem;
}

.btn {
  display: inline-block;
  padding: 10px 20px;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 5px;
  text-decoration: none;
  font-weight: bold;
  transition: background-color 0.3s ease;
}

.btn:hover {
  background-color: #0056b3;
}

.featured-plants {
  margin-top: 40px;
  text-align: center;
}

.plant-cards {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 20px;
}
</style>
