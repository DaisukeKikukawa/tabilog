import firebase from "firebase"


const Config = {
  apiKey: "AIzaSyBplEPVFbF-sO-8tdREEOoyDL-eBksICFQ",
  authDomain: "tabilog-75fd9.app.com",
  databaseURL: "https://tabilog-75fd9.io.com",
  projectId: "tabilog-75fd9",
  storageBucket: "tabilog-75fd9.appspot.com",
  messagingSenderId: "355852665085",
  appId: "1:355852665085:web:9123e18b76741b7d30be94",
  measurementId: "G-FY4K8K5MGB"
};



firebase.initializeApp(Config);

export const db = firebase.firestore()
export const auth = firebase.auth()

