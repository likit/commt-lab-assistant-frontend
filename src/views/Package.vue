<template>
  <div>
    <section class="section">
      <div class="container">
        <div class="columns">
          <div class="column">
            <p class="notification is-light is-warning" v-if="!pkg.name">กำลังโหลดข้อมูล...</p>
          </div>
        </div>
        <div class="columns">
          <div class="column">
            <router-link class="button is-light" :to="{ name: 'MainPage' }">
            <span class="icon">
              <i class="fas fa-chevron-left"></i>
            </span>
              <span>กลับ</span>
            </router-link>
          </div>
        </div>
        <div class="columns">
          <div class="column has-text-centered">
            <h1 class="title is-size-4">ชุดตรวจสำหรับโรค{{pkg.name}}</h1>
            <p class="notification is-light is-info">
              <label class="label">ข้อแนะนำในการตรวจ</label>
              {{ pkg.description }}
            </p>
            <div class="panel is-info">
              <div class="panel-heading">รายการตรวจ</div>
              <router-link class="panel-block" v-for="test in pkg.tests" :key="test.id"
                :to="{ name: 'Test', params: { testId: test.id}}">
                <span class="panel-icon">
                  <i class="fas fa-chevron-right"></i>
                </span>
                {{ test.name }}
              </router-link>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "Package",
  data () {
    return {
      pkg: {}
    }
  },
  mounted() {
    const self = this
    axios.get('https://commt-lab-assitant.herokuapp.com/packages/' + this.$route.params.packageId).then((resp)=>{
      self.pkg = resp.data
      console.log(self.pkg)
    })
  }
}
</script>

<style scoped>

</style>