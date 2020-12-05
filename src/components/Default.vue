<template>
  <div>
    <h1>検索結果表示</h1>
    <input type="text" placeholder="旅人の名前" v-model="searchTerm" />
    <button @click="searchUserAccount()">旅人を検索する</button>
    <h3>「{{ searchTerm }}」の検索結果</h3>
    <div>
      <p v-for="user in users" :key="user.id">
        {{ users.picture }}<br />
        ユーザー名：{{ users.displayName }}
      </p>
    </div>
  </div>
</template>

<script>
import { db } from "@/firebase";

export default {
  name: "default",
  data() {
    return {
      searchTerm: "",
      users: [],
    };
  },
  metohds: {
    searchUserAccount() {
      db.collection("users")
        .where("displayName", "==", this.searchTerm)
        .get()
        .then((snapshot) => {
          snapshot.docs.forEach((doc) => {
            this.users.push({
              id: doc.id,
              ...doc.data(),
            });
          });
        });
    },
  },
};
</script>
