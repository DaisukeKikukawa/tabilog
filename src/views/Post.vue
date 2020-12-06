<template>
 <div>
   <h2 class="text-center text-3xl">{{ post.title }}</h2>
   <div 
     v-if="post.image"
     :style=" 'background-image: url(' + post.image + ')' "
   ></div>
   <div class="flex mb-8">
     <div 
       :style=" 'background-image: url(' + user.photoURL + ')' "
     ></div>
     <div>
       <p>{{ user.displayName }}</p>
       <p class="text-xs">{{ post.createdAt }}</p>
     </div>
   </div>
   <div
     v-html="post.content"
   ></div>
 </div>
</template>
<script>
import { db } from '@/main'
export default {
 data() {
   return {
     post: {},
     user: {}
   }
 },
 firestore() {
   return {
     post: db.collection('posts').doc(this.$route.params.id),
     user: db.collection('users').doc(this.$route.params.uid)
   }
 }
}
</script>