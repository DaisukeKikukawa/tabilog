<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link>
      <router-link to="/about">About</router-link>
      <router-link to="/signup">Sign up</router-link>
      <router-link to="/signin">Sign in</router-link>
      <router-link to="/signout">Sign out</router-link>
      <router-link to="/default">Default</router-link>
      <router-link to="/mypage">Mypage</router-link>
    </div>
    <router-view />
  </div>
</template>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  background-color: #a4a4a4;
  height: 2.5rem;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 0 2rem;

  a {
    font-weight: bold;
    color: #fff;
    text-decoration: none;
    &:hover {
      color: #f00;
    }
    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
