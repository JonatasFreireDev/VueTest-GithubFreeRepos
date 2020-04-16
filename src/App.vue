<template>
  <div id="app">
    <Header msg="teste" />
    <router-view />
  </div>
</template>

<script>
import Header from '@/components/Header';

export default{
  components: {
    Header,
  }
}
</script>

<style>
*{
  padding: 0;
  margin: 0;
  outline: 0;
  box-sizing: border-box;
}

*:focus{
   outline: 0;
}

#app {
  margin: 0;
  padding: 0;
  width: 100%;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

body{
  background: #dfdfdf;
   -webkit-font-smoothing: antialiased;
}

a, a:hover{
  text-decoration:none;
}

ul{
   list-style: none;
}

button{
   cursor: pointer;
}

#nav {
  padding: 30px;
}


#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
