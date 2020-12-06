<template>
  <div id="nav">
    <router-link to="/">Top</router-link>
    <router-link to="/about">About</router-link>
    <router-link to="/create">Create</router-link>
    <router-link to="/article">Article</router-link>
    <!-- ログイン状態で表示 -->
    <div v-if="currentUser">
      <router-link to="/mypage" class="mypage_link">Mypage</router-link>
      <router-link to="/signout" class="signout_link">Sign out</router-link>
    </div>
    <!-- ログイン前の状態で表示 -->
    <div v-else>
      <router-link to="/signin" class="signin_link">Sign in</router-link>
      <router-link to="/signup" class="signup_link">Sign up</router-link>
    </div>
    <!-- <router-link to="/default">Default</router-link> -->
  </div>
</template>

<script>
import { auth } from "@/firebase";

export default {
  data() {
    return {
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
  }
};
</script>

<style lang="scss" scoped>
#nav {
  background-color: #a4a4a4;
  height: 2.5rem;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 0 2rem;

  a {
    font-weight: bold;
    color: #fff;
    text-decoration: none;
    &:hover {
      color: #f00;
    }
    &.router-link-exact-active {
      color: #42b983;
    }
  }
}

.mypage_link {
  padding-right: 10rem;
}

.signin_link {
  padding-right: 2.5rem;
}

@media (max-width: 670px) {
  #nav {
    background-color: #a4a4a4;
    height: 1.5rem;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 0 1.5rem;

    a {
      color: #fff;
      text-decoration: none;
      &:hover {
        color: #f00;
      }
      &.router-link-exact-active {
        color: #42b983;
      }
    }
  }

  .mypage_link {
    padding-right: 1rem;
  }

  .signin_link {
    padding-right: 1rem;
  }
}
</style>
