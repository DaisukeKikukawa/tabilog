<template>
  <div>
    <h2 class="text-2xl">Create</h2>
    <div>
    <input 
      type="text"
      placeholder="Title"
      v-model="title"
    >
    </div>
    <textarea 
      cols="30" 
      rows="10"
      placeholder="Content"
      v-model="content"
    ></textarea>
    <div>
    <button 
      @click="publish"
    >
      Submit
    </button>
    </div>
  </div>
</template>

<script>
import { auth } from '@/firebase'
import { db } from '@/firebase'
export default {
  data() {
    return {
      title: '',
      content: '',
      currentUser: {}
    }
  },
  created() {
    auth.onAuthStateChanged(user => { 
      this.currentUser = user
    })
  },
  methods: {
    publish() {
      const date = new Date()
      db.collection('posts').add({
        title: this.title,
        content: this.content,
        createdAt: date,
      })
      .then(() =>
        this.$router.push('/article'),
        alert('The post got published!')
      )
    }
  }
}
</script>