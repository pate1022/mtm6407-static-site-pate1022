<template>
  <div class="blog-page">
    <Header />

    <section class="blog-content">
      <h1>Blog</h1>
      <div class="blog-posts">
        <BlogPost
          v-for="post in blogPosts"
          :key="post.id"
          :title="post.title"
          :content="post.content"
          :readMoreLink="`/blog/${post.id}`"
        />
      </div>
    </section>

    <Footer />
  </div>
</template>

<script>
import Header from '~/components/Header.vue';
import Footer from '~/components/Footer.vue';
import BlogPost from '~/components/BlogPost.vue';

export default {
  components: {
    Header,
    Footer,
    BlogPost,
  },
  
  data() {
    return {
      blogPosts: [
        {
          id: 1,
          title: 'Getting Started with Indoor Plants',
          content: 'Learn how to choose and care for indoor plants to bring nature into your home.',
        },
        {
          id: 2,
          title: 'Creating a Beautiful Garden Landscape',
          content: 'Discover tips and ideas for designing and maintaining a stunning garden landscape.',
        },
        // Add more blog posts here
      ],
    };
  },
  
  // Page configuration
  head() {
    return {
      title: 'Blog - Bloomspace',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: 'Read our blog posts for valuable insights and tips on plants and gardening.',
        },
      ],
    };
  },
};
</script>

<style scoped>
/* Styles for the blog page */
.blog-page {
  font-family: Arial, sans-serif;
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
}

.blog-content h1 {
  font-size: 2rem;
  margin-bottom: 20px;
}

.blog-posts {
  display: grid;
  gap: 20px;
}
</style>
