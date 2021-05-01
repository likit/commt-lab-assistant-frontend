<template>
  <section class="section">
    <div class="container">
      <div class="columns">
        <div class="column">
          {{content}}
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import axios from "axios";
const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiaWF0IjoxNjE5NDM1MjM5LCJleHAiOjE2MjIwMjcyMzl9.eM2PSByb4Gm4fsxgtRcU7No2PMB9OWHgB4qTtWNcSBQ'
axios.defaults.headers.common = {'Authorization': `Bearer ${token}`}

export default {
  name: "blood-drawing-technique",
  data () {
    return {
      content: null
    }
  },
  mounted() {
    const self = this
    axios.get('https://commt-lab-assitant.herokuapp.com/about').then((resp)=>{
      self.content = resp.data.content;
    })
  }
}
</script>

<style scoped>

</style>