<template>
  <div class="plant-card">
    <img :src="imageSrc" :alt="plantName" />
    <h3>{{ plantName }}</h3>
  </div>
</template>

<script>
export default {
  props: {
    plantName: String,
    imageSrc: String,
  },
};
</script>

<style scoped>
/* Styles for the plant card component */
.plant-card {
  background-color: #f9f9f9;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 5px;
  text-align: center;
}

.plant-card img {
  max-width: 150px;
  margin-bottom: 10px;
}

.plant-card h3 {
  margin-top: 0;
}
</style>
