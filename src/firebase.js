import firebase from "firebase";
import "firebase/firestore";
import "firebase/auth";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBplEPVFbF-sO-8tdREEOoyDL-eBksICFQ",
  authDomain: "tabilog-75fd9.firebaseapp.com",
  databaseURL: "https://tabilog-75fd9.firebaseio.com",
  projectId: "tabilog-75fd9",
  storageBucket: "tabilog-75fd9.appspot.com",
  messagingSenderId: "355852665085",
  appId: "1:355852665085:web:9123e18b76741b7d30be94",
  measurementId: "G-FY4K8K5MGB"
};

/*ログイン時のみ閲覧可能機能 (Firebaseからログイン状態を取得)*/
firebase.getCurrentUser = () => {
  return new Promise((resolve, reject) => {
    const unsubscribe = firebase.auth().onAuthStateChanged(user => {
      unsubscribe();
      resolve(user);
    }, reject);
  });
};
/*ここまで*/

firebase.initializeApp(firebaseConfig);

export const db = firebase.firestore();
export const auth = firebase.auth();
