<template>
  <div id="app">

    <Header/>
    <!---<BaseForm/> -->
    <router-view/>
    
     <div>
        <pie/>
    </div>

  </div>

 
</template>

<script>
import Header from '@/components/Header'
import pie from '@/components/footer'
//import BaseForm from '@/components/BaseForm'

export default{
    components:{
      Header,
       pie
      // BaseForm 
    }
  }

</script>

<style>


#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
