

<template>
  <section class="pageWrapper">
    <h1>Welcome {{ firstName }}</h1>
  <p>This is Login Page</p>
  <!-- <router-link to="/">Home</router-link>
    <router-link to="/AllProducts">AllProducts</router-link> -->

  <section>
    <form action="" method="post">
      <label for="username">Email:</label>
      <input type="text" id="username" name="email" required v-model="email" /><br /><br />
      <label for="password">Password:</label>
      <input
        type="password"
        id="password"
        name="password"
        required
        v-model="password"
      /><br /><br />
      <input type="submit" value="Login" />
    </form>
  </section>
  </section>
  
</template>

<script>
import { mapState } from 'vuex'

export default{
  data(){
    return{
      email: "",
      password: "",
    }
  },
  computed:{
    ...mapState("authentification", {
      firstName: (state) => state.name,
    }),
  },
};
</script>

<style>

</style>
