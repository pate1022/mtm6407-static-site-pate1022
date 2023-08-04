<template>
  <div class="blog-post">
    <h2>{{ title }}</h2>
    <p>{{ content }}</p>
    <a :href="readMoreLink">Read more</a>
  </div>
</template>

<script>
export default {
  props: {
    title: String,
    content: String,
    readMoreLink: String,
  },
};
</script>

<style scoped>
/* Styles for the blog post component */
.blog-post {
  background-color: #f9f9f9;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 5px;
}

.blog-post h2 {
  margin-top: 0;
}

.blog-post p {
  margin-bottom: 10px;
}

.blog-post a {
  color: #007bff;
  text-decoration: none;
  font-weight: bold;
}

.blog-post a:hover {
  text-decoration: underline;
}
</style>
