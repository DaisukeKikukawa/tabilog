<template>


  <div class="home">
    <div class="list">

      <!-- <li v-for="post in orderBy(posts,'date',-1)" :key="post.id" class="item">
        {{post.content}}
        {{post.uid}} -->
        
      

      <!-- <Item 
        v-for="post in orderBy(posts,'date',-1)"
        :key="post.id"
        :id="post.id"
        :uid="post.uid" 
      /> -->


      
    </div>

    <!-- <Item v-for="post in posts"
     :key="post.id"
     :post="post"
     class="list-none my-5"
   /> -->

    <!-- <img alt="Vue logo" src="../assets/logo.png" />
    <HelloWorld msg="Welcome to Your Vue.js App" /> -->
    
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from "@/components/HelloWorld.vue";
// import Item from '@/components/Item.vue'
import { db } from '@/firebase' ;

export default {
  name: "Home",
  components: {
    // HelloWorld
    // Item
  },
  data() {
    return {
      posts: [
        
      ]
    };
  },
  firestore () {
    return {
      posts: db.collection('posts')
    }
  },
  
}
</script>

<style>
  .item {
    list-style: none;
  }
</style>
