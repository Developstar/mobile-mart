

<template>
  <section class="pageWrapper">
    <h1>Welcome {{ firstName }}</h1>
  <p>This is Login Page</p>
  <!-- <router-link to="/">Home</router-link>
    <router-link to="/AllProducts">AllProducts</router-link> -->

  <section>
    <Form @submit="onSubmit" >
      <label for="username">Email:</label>
      <Field
       type="email" 
       id="email" 
       name="email"  
       :rules="validateEmail"
       v-model="email" />
       <ErrorMessage name="email" />
       <br /><br />
      <!-- <div class="errors" v-if="errors.email">
        {{ errors.email }}
      </div> -->
      <label for="password">Password:</label>
      <Field
        type="password"
        id="password"
        name="password"
        v-model="password"
        :rules = "validatePassword"
      /><br /><br />
      <ErrorMessage name="password" />
      <!-- <div class="errors" v-if="errors.password">
        {{ errors.password }}
      </div> -->
      <button>Submit</button>
    </Form>
  </section>
  </section>
  
</template>

<script>
import { mapState } from 'vuex'
import {Form, Field, ErrorMessage} from 'vee-validate' ;
import Validations from '@/validations/validations';

export default{
  data(){
    return{
      email: "",
      password: "",
      errors: []
    }
  },

  components:{
    Form,
    Field,
    ErrorMessage
  },

  methods: {
    onSubmit(values){
      console.log(values);
    },

    validateEmail(value){
      //if field is empty
      if(!value){
        return 'Field required';
      }

      // if  not a valid email
      const validEmail = Validations.checkEmail(this.email)
      if (!validEmail){
        return 'This field must be a valid email';
      }

      // All is good
      return true;
    },

    validatePassword(value){
            //if field is empty
            if(!value){
        return 'Field required';
      }

      //if minNum of password is less than 6
      const validNum = Validations.minLength(this.password, 6)
      if(!validNum){
            return 'Password should be of 6 characters';
        }

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
