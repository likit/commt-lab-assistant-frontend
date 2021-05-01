<template>
<div>
  <section class="section">
    <div class="container">
      <div class="columns">
        <div class="column has-text-centered">
          <router-link class="button is-light" :to="{ name: 'MainPage' }">
            <span class="icon">
              <i class="fas fa-chevron-left"></i>
            </span>
            <span>กลับ</span>
          </router-link>
          <figure class="image is-1by1">
            <img :src="tube.image[0].url" class="is-rounded">
          </figure>
          <h1 class="title">{{tube.name}}</h1>
          <h1 class="subtitle">{{tube.description}}</h1>
          <label class="label">ชนิดสารกันเลือดแข็ง</label>
          <p class="notification is-light">
            {{ tube.anticoagulant.name }}
            <span class="help">{{ tube.anticoagulant.description }}</span>
          </p>
          <label class="label">ชนิดสิ่งตัวอย่าง/สิ่งส่งตรวจ</label>
          <p class="notification is-light is-info">
            {{ tube.speciman.specimens }}
            <span class="help">{{ tube.speciman.description }}</span>
          </p>
          <label class="label has-text-danger">ข้อควรระวัง</label>
          <p class="notification is-light is-danger">{{tube.caution}}</p>
        </div>
      </div>
    </div>
  </section>
</div>
</template>

<script>
import axios from "axios";

export default {
  name: "BloodTube",
  data () {
    return {
      tube: {}
    }
  },
  mounted() {
    const self = this
    axios.get('https://commt-lab-assitant.herokuapp.com/blood-tubes/' + this.$route.params.tubeId).then((resp)=>{
      self.tube = resp.data
      console.log(self.tube)
    })
  }
}
</script>

<style scoped>

</style>