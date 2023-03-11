<template>
  <section class="navBar">
    <div class="logo nav-div">
            <router-link to="/">MobileMart</router-link>
    </div>
    
      <div class="nav-div">
        <router-link to="/AllProducts" class="mid-Nav">PRODUCTS</router-link>
      </div>

      <div class="nav-div form">
        <router-link to="/LogIn">Log In</router-link>
        <button class="button"><router-link to="/SignUp">Sign Up</router-link></button>
        
      </div>
   
  </section>
</template>

<style>



.navBar {
  display: flex;
  justify-content: space-around;
  align-items: center;
  gap: 30%;
  list-style-type: none;
  margin: 0;
  padding: 0;
  overflow: hidden;
  background: #e3e7eb;
  height: 8vh;
  
}

.logo a {
  text-align: center;
  padding: 14px 16px;
  text-decoration: none;
  font-size: 1.5rem;
}

.nav-div a{
  color: black;
  text-decoration: none;
}

.mid-Nav{
  font-size: 0.8rem;
}

.form{
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 3rem;
}

.button{
  border-radius: 2rem;
  width: 8rem;
  height: 2.5rem;
  background: black;
}

.button a{
  padding: 2rem;
  color: white ;
}

/* .button{
  background: black;
} */

ul{
    list-style-type: none;
  margin: 0;
  padding: 0;
  overflow: hidden;
  background-color: #333;
} 


li {
  float: left;
}



li a:hover {
  background-color: #111;
}
</style>
