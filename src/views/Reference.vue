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
import MarkdownItVueLight from 'markdown-it-vue/dist/markdown-it-vue-light.umd.min.js'
import 'markdown-it-vue/dist/markdown-it-vue-light.css'

export default {
  name: "Reference",
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
    axios.get('https://commt-lab-assitant.herokuapp.com/references').then((resp)=>{
      self.content = resp.data.reference;
    })
  }
}
</script>

<style scoped>

</style>