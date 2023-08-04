<template>
  <div class="plants-page">
    <Header />

    <section class="plants-content">
      <h1>Explore Our Plants Collection</h1>
      <div class="plant-cards">
        <PlantCard
          v-for="plant in plants"
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
      plants: [
        {
          id: 1,
          name: 'Succulent',
          imageSrc: 'path-to-your-image.jpg',
        },
        {
          id: 2,
          name: 'Fiddle Leaf Fig',
          imageSrc: 'path-to-your-image.jpg',
        },
        // Add more plants here
      ],
    };
  },
  
  // Page configuration
  head() {
    return {
      title: 'Plants Collection - Bloomspace',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: 'Browse our diverse collection of plants to find the perfect addition to your garden or home.',
        },
      ],
    };
  },
};
</script>

<style scoped>
/* Styles for the plants page */
.plants-page {
  font-family: Arial, sans-serif;
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
}

.plants-content h1 {
  font-size: 2rem;
  margin-bottom: 20px;
}

.plant-cards {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 20px;
}
</style>
