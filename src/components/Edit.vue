<template>
  <div>
    <h1>プロフィール作成</h1>
    <div>
      <h3>プロフィール画像</h3>
      <upload v-model="picture" />
      <img :src="picture" width="500" />
    </div>
    <div>
      <h3>ユーザー名</h3>
      <input type="text" placeholder="User Name" v-model="displayName" />
    </div>
    <div>
      <h3>年齢</h3>
      <input type="text" placeholder="Age" v-model="age" />
    </div>
    <div>
      <h3>性別</h3>
      <select v-model="gender">
        <option disabled value="">Please select one</option>
        <option>男性</option>
        <option>女性</option>
        <option>その他</option>
      </select>
    </div>
    <div>
      <h3>自己紹介</h3>
      <textarea
        v-model="selfIntroduction"
        placeholder="Self-Introduction"
      ></textarea>
    </div>
    <div>
      <h3>Twitter URL</h3>
      <input type="text" placeholder="Twitter URL" v-model="twitterUrl" />
    </div>
    <div>
      <h3>Instagram URL</h3>
      <input type="text" placeholder="Instagram URL" v-model="instagramUrl" />
    </div>
    <br />
    <button @click="addUserAccount">アカウント情報を追加する</button>
  </div>
</template>

<script>
import { db } from "@/firebase";
import { auth } from "@/firebase";
import Upload from "../components/Upload.vue";

export default {
  name: "edit",
  components: {
    Upload,
  },
  data() {
    return {
      picture: null,
      displayName: "",
      age: "",
      gender: "",
      selfIntroduction: "",
      twitterUrl: "",
      instagramUrl: "",
      users: [],
      currentUser: null,
      createUser: null,
    };
  },
  created() {
    auth().onAuthStateChanged((user) => {
      if (user) {
        this.currentUser = user;
      } else {
        this.currentUser = null;
      }
    });
  },
  methods: {
    addUserAccount() {
      db.collection("users")
        .doc(this.$route.params.uid)
        .update({
          picture: this.picture,
          displayName: this.displayName,
          isComplete: false,
          age: this.age,
          gender: this.gender,
          selfIntroduction: this.selfIntroduction,
          twitterUrl: this.twitterUrl,
          instagramUrl: this.instagramUrl,
        })
        .then(() => {
          console.log("users");
          alert("編集に成功!");
          this.$router.push({
            name: "mypage",
            params: { uid: this.$route.params.uid },
          });
        });
    },
  },
};
</script>

<style>
* {
  box-sizing: border-box;
}

html {
  font-size: 62.5%;
}

body {
  color: #2c2d30;
  font-size: 1.6rem;
  font-family: "Hiragino Kaku Gothic Pro", "ヒラギノ角ゴ Pro W3", "Meiryo",
    "メイリオ", "Osaka", "MS PGothic", arial, helvetica, clean, sans-serif;
  line-height: 1.5;
}
</style>
