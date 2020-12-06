<template>
  <div id="app">
    <Header />
    <router-link to="/article">Article</router-link>
    
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link> |
      <router-link to="/signup">Sign up</router-link> |
      <router-link to="/signin">Sign in</router-link> |
      <router-link to="/signout">Sign out</router-link> |
      <router-link to="/default">Default</router-link> |
      <router-link to="/mypage">Mypage</router-link> | 
      <router-link to="/create">Create</router-link>
    </div>
    
<main>
    <router-view />
</main>

  </div>


</template>

<script>
import Header from '@/components/Header'
export default {
  components: {
    Header
  }
}
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
