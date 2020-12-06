<template>
  <header class="header">
    <!-- <router-link to="/"> -->

      <div>
        <h1 class="header-logo">Tabilog</h1>
      </div>
    <!-- </router-link> -->

    <div class="btns">
      <button class="icon">
        <fa icon="user" />
      </button>
      <button class="icon">
        <fa icon="coffee" />
      </button>
      <button class="icon">
        <fa icon="ad" />
      </button>
      <button class="icon">
        <fa icon="bars" />
      </button>
    </div>

    <router-link to="/create">
          <button 
            class="mt-2 mr-5 focus:outline-none"
          >Tabilogを書く</button>
        </router-link>
    

  </header>
  
</template>

<script>
export default {
  
}
</script>

<style>

.header {
  display: flex;
  justify-content: space-between;
  background-color: antiquewhite;
}

h1 {
  margin: 0;
  padding: 0;
}
  .header-logo {
    color: red;
    font-size: 80px;
  }

  .icon {
    font-size: 50px;
  }

</style>