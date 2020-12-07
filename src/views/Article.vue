<template>
  <div>
    <div v-for="(post, index) in posts" :key="post.id">
      <h3>{{ post.image }}</h3>
      <p>{{ post.title }}</p>
      <p>{{ post.content }}</p>
      <p>{{ post.createdAt }}</p>
      <p>Id{{ post.uid }}</p>
      <p>{{ index }}</p>
    <button  @click="showBtns = !showBtns">
      <fa icon="ellipsis-v" />
    </button>
    <div v-if="showBtns" class="controls">
      <li v-on:click="deletePost" style="color: red">delete</li>
    </div>
      <hr />
    </div>
  </div>
</template>

<script>
import { db } from "@/firebase";
export default {
  data() {
    return {
      posts: [],
      users: {},
      showBtns: false
    };
  },
  methods: {
    deletePost(index) {
      this.posts.splice(index, 1)
      db.collection("posts").doc().delete()
      // alert("Hi")
    }
  },
    
  firestore() {
    return {
      posts: db.collection("posts"),
      users: db.collection("users")
    };
  },
  created() {
    //データベースにアクセス
    db.collection("posts").get().then(
      (result) => {
        console.log(result)
        return result.docs;
      }
    ).then(
      (docs) => {
        // console.log(docs[0].data())
        // this.posts.push(docs[0].data())

        docs.forEach(doc => {
          // console.log(doc.data());
          this.posts.push(doc.data())
        });
      } 
    ) 
    //this.postにいれる
    

    // console.log("create")
  }
  // methods: {
  //   remove() {
  //     if (window.confirm("Are you sure to delete is post?")) {
  //       db.collection("posts")
  //         .doc(this.$route.params.id)
  //         .delete()
  //         .then(this.$router.push("/"), alert("The post was deleted."));
  //     }
  //   }
  // }
};
</script>