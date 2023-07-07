<template>
    <div>
      <h1>Login</h1>
      <form @submit.prevent="handleSubmit">
        <label>
          Username:
          <input type="text" v-model="username" />
        </label>
        <label>
          Password:
          <input type="password" v-model="password" />
        </label>
        <button type="submit">Login</button>
      </form>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        username: '',
        password: ''
      }
    },
    methods: {
      handleSubmit() {
        // In a real application, you would handle the login here
        // We'll just log the form data to the console
        console.log(`Logging in with: ${this.username}, ${this.password}`)
        
        // Redirect to homepage
        this.$router.push({ name: 'home' })
      }
    }
  }
  </script>
  