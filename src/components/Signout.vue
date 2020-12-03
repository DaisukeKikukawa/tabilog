<template>
  <div>
    <h1>SIGN OUT</h1>
    <button @click="signout">Sign out Now!!</button>
  </div>
</template>

<script>
import { auth } from "@/firebase";

export default {
  name: "signout",
  methods: {
    signout() {
      auth
        .signOut()
        .then(() => {
          alert("Logout!");
          this.$router.push("/");
        })
        .catch(error => {
          alert(error);
        });
    }
  }
};
</script>
