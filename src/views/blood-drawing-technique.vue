<template>
  <section class="section">
    <div class="container">
      <div class="columns">
        <div class="column"></div>
      </div>
      <div class="columns">
        <div class="column">
          <router-link :to="{ name: 'MainPage'}" class="button is-light">
            <span class="icon">
              <i class="fas fa-chevron-left"></i>
            </span>
            <span>กลับ</span>
          </router-link>
        </div>
      </div>
      <div class="columns">
        <div class="column" v-if="content">
          <markdown-it-vue-light :content="content"></markdown-it-vue-light>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import axios from "axios";
const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiaWF0IjoxNjE5NDM1MjM5LCJleHAiOjE2MjIwMjcyMzl9.eM2PSByb4Gm4fsxgtRcU7No2PMB9OWHgB4qTtWNcSBQ'
axios.defaults.headers.common = {'Authorization': `Bearer ${token}`}
import MarkdownItVueLight from 'markdown-it-vue/dist/markdown-it-vue-light.umd.min.js'
import 'markdown-it-vue/dist/markdown-it-vue-light.css'

export default {
  name: "blood-drawing-technique",
  components: {
    MarkdownItVueLight
  },
  data () {
    return {
      content: null
    }
  },
  mounted() {
    const self = this
    axios.get('https://commt-lab-assitant.herokuapp.com/blood-collection-technique').then((resp)=>{
      console.log(resp.data)
      self.content = resp.data.content;
    })
  }
}
</script>

<style scoped>

</style>