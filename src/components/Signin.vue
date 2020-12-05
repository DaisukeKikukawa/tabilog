<template>
  <div>
    <h1>SIGN IN</h1>
    <div>
      <h3>E-mail</h3>
      <input type="text" placeholder="E-mail" v-model="email" />
    </div>
    <div>
      <h3>Password</h3>
      <input type="text" placeholder="Password" v-model="password" />
    </div>
    <button @click="userSignIn">Sign in Now!!</button>
  </div>
</template>

<script>
import { auth } from "@/firebase";

export default {
  name: "signin",
  data() {
    return {
      email: "",
      password: "",
      currentUser: null
    };
  },
  created() {
    auth.onAuthStateChanged(user => {
      if (user) {
        this.currentUser = user;
      } else {
        this.currentUser = null;
      }
    });
  },
  methods: {
    userSignIn() {
      auth
        .signInWithEmailAndPassword(this.email, this.password)
        .then(result => {
          console.log(result);
          alert("ログイン成功!");
          this.$router.push({
            name: "mypage",
            params: {
              uid: result.user.uid
            }
          });
        });
    }
  }
};
</script>
