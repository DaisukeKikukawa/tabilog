<template>
  <div id="nav">
    <router-link to="/">Top</router-link>
    <router-link to="/about">About</router-link>
    <!-- ログイン状態で表示 -->
    <div v-if="currentUser" class="box__1">
      <router-link to="/mypage" class="mypage_link">Mypage</router-link>
      <router-link to="/signout" class="signout_link">Sign out</router-link>
    </div>
    <!-- ログイン前の状態で表示 -->
    <div v-else class="box__1">
      <router-link to="/signin" class="signin_link">Sign in</router-link>
      <router-link to="/signup" class="signup_link">Sign up</router-link>
    </div>
    <router-link to="/default">Default</router-link>
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

.box__1 {
  display: flex;
  justify-content: space-between;
  padding: 10rem;
}
//等間隔でなくていいけど、それに近づけるんならflexboxで操作しちゃったほうがいいよ;
.mypage_link {
  padding-right: 50px;
}

// .signout_link {
//   padding: 0 10rem;
// }

.signin_link {
  padding-right: 50px;
}

// .signup_link {
//   padding: 0 10rem;
// }
</style>
