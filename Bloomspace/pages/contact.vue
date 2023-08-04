<template>
  <div class="contact-page">
    <Header />

    <section class="contact-content">
      <h1>Contact Us</h1>
      <p>Have a question or feedback? Reach out to us using the form below.</p>
      <ContactForm />
    </section>

    <Footer />
  </div>
</template>

<script>
import Header from '~/components/Header.vue';
import Footer from '~/components/Footer.vue';
import ContactForm from '~/components/ContactForm.vue';

export default {
  components: {
    Header,
    Footer,
    ContactForm,
  },
  
  // Page configuration
  head() {
    return {
      title: 'Contact Us - Bloomspace',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: 'Get in touch with Bloomspace for your plant-related inquiries.',
        },
      ],
    };
  },
};
</script>

<style scoped>
/* Styles for the contact page */
.contact-page {
  font-family: Arial, sans-serif;
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
}

.contact-content h1 {
  font-size: 2rem;
  margin-bottom: 20px;
}

.contact-content p {
  margin-bottom: 15px;
  line-height: 1.6;
}
</style>
