<template>
    <form class="contact-form">
      <div class="form-group">
        <label for="name">Name</label>
        <input type="text" id="name" v-model="name" />
      </div>
      <div class="form-group">
        <label for="email">Email</label>
        <input type="email" id="email" v-model="email" />
      </div>
      <div class="form-group">
        <label for="message">Message</label>
        <textarea id="message" v-model="message"></textarea>
      </div>
      <button type="submit" class="btn">Submit</button>
    </form>
  </template>
  
  <script>
  export default {
    data() {
      return {
        name: '',
        email: '',
        message: '',
      };
    },
  };
  </script>
  
  <style scoped>
  /* Styles for the contact form */
  .contact-form {
    margin-top: 20px;
    padding: 20px;
    border: 1px solid #ccc;
    border-radius: 5px;
  }
  
  .form-group {
    margin-bottom: 15px;
  }
  
  label {
    display: block;
    font-weight: bold;
    margin-bottom: 5px;
  }
  
  input,
  textarea {
    width: 100%;
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 5px;
  }
  
  .btn {
    padding: 10px 20px;
    background-color: #007bff;
    color: #fff;
    border: none;
    border-radius: 5px;
    font-weight: bold;
    cursor: pointer;
    transition: background-color 0.3s ease;
  }
  
  .btn:hover {
    background-color: #0056b3;
  }
  </style>
  