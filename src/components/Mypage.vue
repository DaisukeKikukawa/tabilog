<template>
  <div>
    <h1>My Page</h1>
    <div>
      <p>{{ users.picture }}</p>
      <p>ユーザー名：{{ users.displayname }}</p>
      <p>年齢：{{ users.age }}</p>
      <p>性別：{{ users.gender }}</p>
      <p>自己紹介：{{ users.selfintroduction }}</p>
      <p>Twitter URL：</p>
      <a v-bind:href="users.twitterurl">{{ users.twitterurl }}</a>
      <p>Instagram URL：</p>
      <a v-bind:href="users.instgramurl">{{ users.instgramurl }}</a>
    </div>
    <router-link tag="button" to="/edit">Edit</router-link>
    <router-view />
  </div>
</template>

<script>
import { db } from "@/firebase";

export default {
  name: "mypage",
  data() {
    return {
      users: []
    };
  },
  created() {
    db.collection("users")
      .get()
      .then(snapshot => {
        snapshot.docs.forEach(doc => {
          this.users.push({
            id: doc.id,
            ...doc.data()
          });
        });
      });
  }
};
</script>
