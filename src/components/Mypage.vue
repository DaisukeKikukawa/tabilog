<template>
  <div>
    <h1>My Page</h1>
    <div>
      <!-- <p>{{ users.picture }}</p> -->
      <img :src="users.picture" width="500" />
      <p>ユーザー名：{{ users.displayName }}</p>
      <p>年齢：{{ users.age }}</p>
      <p>性別：{{ users.gender }}</p>
      <p>自己紹介：{{ users.selfIntroduction }}</p>
      <p>Twitter URL：</p>
      <a v-bind:href="users.twitterUrl">{{ users.twitterUrl }}</a>
      <p>Instagram URL：</p>
      <a v-bind:href="users.instagramUrl">{{ users.instagramUrl }}</a>
    </div>
    <button @click="toEditpage">Edit</button>
    <router-view />
  </div>
</template>

<script>
import { db } from "@/firebase";
import { auth } from "@/firebase";

export default {
  name: "mypage",
  data() {
    return {
      users: [],
    };
  },
  // firestore() {
  //   return {
  //     users: db.collection("users").doc("OdFZr2JZSiZR9iiS9rXek1MJ0af2"),
  //   };
  // },
  created() {
    const id = auth.currentUser.uid;
    console.log(id);
    db.collection("users")
      .doc(id)
      .get()
      .then((snapshot) => {
        this.users = snapshot.data();
      });
  },
  methods: {
    toEditpage() {
      this.$router.push({
        name: "edit",
        params: { uid: this.$route.params.uid },
      });
    },
  },
};
</script>
