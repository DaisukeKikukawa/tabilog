import Vue from "vue";
import VueRouter from "vue-router";
import Create from '../views/Create.vue';
import Article from "../views/Article.vue"
import Map from "../components/Map.vue";
import Top from "../views/Top.vue";
import firebase from "firebase";
/* 認証機能 */
import Signup from "../components/Signup.vue";
import Signin from "../components/Signin.vue";
import Signout from "../components/Signout.vue";
import Mypage from "../components/Mypage.vue";
// /*ここまで*/
import Edit from "../components/Edit.vue"; //マイページ編集
// import Default from "../components/Default.vue"; //デフォルト検索

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Top",
    component: Top
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue")
  },
  {
    path: '/create',
    name: 'Create',
    component: Create
  },
  {
    path: '/article',
    name: 'Article',
    component: Article
  },
  {
    path: "/map",
    name: "Map",
    component: Map
  },
  /* 認証機能 */
  {
    path: "/signup",
    name: "signup",
    component: Signup
  },
  {
    path: "/signin",
    name: "signin",
    component: Signin
  },
  {
    path: "/signout",
    name: "signout",
    component: Signout
  },
  {
    path: "/mypage/:uid",
    name: "mypage",
    component: Mypage,
    meta: { requiresAuth: true } // ログイン認証（ログイン時のみに表示させるため）
  },
  // /*ここまで*/
  // /*マイページ編集*/
  {
    path: "/edit:uid",
    name: "edit",
    component: Edit
  },
  // /*ここまで*/
  // /*デフォルト検索*/
  // {
  //   path: "/default",
  //   name: "default",
  //   component: Default,
  // },
  /*ここまで*/
  {
    path: "*",
    redirect: "/"
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

/*ログイン時のみ閲覧可能機能 (ログイン状態かを確認する処理)*/
router.beforeEach(async (to, from, next) => {
  const requiresAuth = to.matched.some(recode => recode.meta.requiresAuth);
  if (requiresAuth && !(await firebase.getCurrentUser())) {
    next({ path: "/signin", query: { redirect: to.fullPath } });
  } else {
    next();
  }
});
/*ここまで*/

export default router;
