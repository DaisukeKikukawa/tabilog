<template>
  <div>
    <h1>SIGN UP</h1>
    <div>
      <h3>E-mail</h3>
      <input type="text" placeholder="E-mail" v-model="email" />
    </div>
    <div>
      <h3>Password</h3>
      <input type="text" placeholder="Password" v-model="password" />
    </div>
    <button @click="createUserAccount">Sign UP!!</button>
  </div>
</template>

<script>
import { db } from "@/firebase";
import { auth } from "@/firebase";

export default {
  name: "signup",
  data() {
    return {
      email: "",
      password: "",
      users: [],
      currentUser: null,
    };
  },
  created() {
    auth.onAuthStateChanged((user) => {
      if (user) {
        this.currentUser = user;
      } else {
        this.currentUser = null;
      }
    });
  },
  methods: {
    createUserAccount() {
      auth
        .createUserWithEmailAndPassword(this.email, this.password)
        .then((result) => {
          this.user = result.user;
          db.collection("users")
            .doc(this.user.uid)
            .set({
              email: this.email,
            })
            .then(() => {
              alert("Create Account");
              this.$router.push({
                name: "mypage",
                params: { uid: this.currentUser.uid },
              });
            });
        })
        .catch((error) => {
          alert("Error!", error.message);
          console.error("Account Regeister Error", error.message);
        });
    },
  },
};
</script>
