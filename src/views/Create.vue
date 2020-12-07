<template>
  <div>
    <h2 class="text-2xl">Create</h2>
    <div>
      <h3>投稿写真</h3>
      <upload2 v-model="picture2" />
    </div>
    <div>
      <router-link tag="button" to="/map">Map</router-link>
      <router-view />
    </div>
    <div>
      <input type="text" placeholder="Title" v-model="title" />
    </div>
    <textarea
      cols="30"
      rows="10"
      placeholder="Content"
      v-model="content"
    ></textarea>
    <div>
      <button @click="publish">
        Submit
      </button>
    </div>
  </div>
</template>

<script>
import { auth } from "@/firebase"
import { db } from "@/firebase"
import Upload2 from "../components/Upload2.vue"
export default {
  components: {
    Upload2
  },
  data() {
    return {
      title: "",
      content: "",
      picture2: null,
      currentUser: {}
      // currentUserName: {}
    }
  },
  created() {
    auth.onAuthStateChanged(user => {
      this.currentUser = user
    })
  },
  methods: {
    publish() {
      const date = new Date()
      // db.collection("users")
      //   .doc()
      //   .get()
      //   .then(snapshot => {
      //     this.currentUser = snapshot.data()
      //   })
      db.collection("posts")
        .add({
          title: this.title,
          content: this.content,
          picture2: this.picture2,
          // currentUserName: this.currentUser.displayName,
          createdAt: date
        })
        .then(
          () => this.$router.push("/article"),
          alert("The post got published!")
        )
    }
  }
}
</script>
