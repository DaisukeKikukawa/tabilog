<template>
  <div id="app">
    <Header />
    <router-view />
    <Footer />
  </div>
</template>
<script>
import Header from "@/components/Header.vue";
import Footer from "@/components/Footer.vue";
export default {
  components: {
    Header,
    Footer
  }
};
</script>

<script>
import { auth } from "@/firebase";

export default {
  name: "app",
  data() {
    return {
      currentUser: {},
    };
  },
  created() {
    auth.onAuthStateChanged((user) => {
      this.currentUser = user;
    });
  },
  methods: {
    toMypage() {
      this.$router.push({
        name: "mypage",
        params: { uid: this.currentUser.uid },
      });
    },
  },
};
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
