<template>
<div>
  <section class="section">
    <div class="container">
      <div class="columns">
        <div class="column has-text-centered">
          <p class="notification is-light is-warning" v-if="packages.length == 0">กำลังโหลดข้อมูล...ใช้เวลาไม่เกิน 20 วินาที</p>
          <br>
          <figure class="image is-inline-block">
            <img src="../assets/robotic.png">
          </figure>
        </div>
      </div>
      <div class="columns">
        <div class="column has-text-centered">
          <h1 class="title is-size-5">คู่มือการเก็บสิ่งตัวอย่างทางเทคนิคการแพทย์ออนไลน์</h1>
          <h1 class="subtitle is-size-6">ฉบับปรับปรุงล่าสุด 1 พ.ค. 2564</h1>
        </div>
      </div>
      <div class="columns">
        <div class="column">
          <div class="panel is-link">
            <div class="panel-heading">
              ชุดรายการตรวจ
            </div>
            <router-link :to="{ name: 'Package', params: { packageId: pkg.id }}"
                         class="panel-block" v-for="pkg in packages" :key="pkg.id">
              <span class="panel-icon">
                <i class="fas fa-chevron-right"></i>
              </span>
              {{ pkg.name }}
            </router-link>
          </div>
        </div>
      </div>
      <div class="columns">
        <div class="column">
          <div class="panel is-info">
            <div class="panel-heading">
              หลอดเลือด
            </div>
            <router-link class="panel-block" v-for="tube in tubes"
                         :key="tube.id"
                         :to="{ name: 'BloodTube', params: {tubeId: tube.id} }">
              <span class="panel-icon">
                <i class="fas fa-chevron-right"></i>
              </span>
              {{ tube.name }}
            </router-link>
          </div>
        </div>
      </div>
      <div class="columns">
        <div class="column">
          <div class="panel is-primary">
            <div class="panel-heading">
              รายการทดสอบ
            </div>
            <router-link class="panel-block" v-for="test in tests"
                         :to="{ name: 'Test', params: {testId: test.id}}"
                         :key="test.id">
              <span class="panel-icon">
                <i class="fas fa-chevron-right"></i>
              </span>
              {{ test.name }}
            </router-link>
          </div>
        </div>
      </div>
      <div class="columns">
        <div class="column">
          <div class="panel">
            <div class="panel-heading">
              คำแนะนำ
            </div>
            <router-link class="panel-block" :to="{name: 'blood-drawing-technique'}">
              เทคนิคการเก็บตัวอย่างเลือด
            </router-link>
            <router-link class="panel-block" :to="{name: 'About'}">
              เกี่ยวกับผู้พัฒนา
            </router-link>
            <router-link class="panel-block" :to="{name: 'Reference'}">
              เอกสารอ้างอิง
            </router-link>
          </div>
        </div>
      </div>
    </div>
  </section>
</div>
</template>

<script>
import axios from 'axios'

export default {
  name: "Main",
  data () {
    return {
      packages: [],
      tests: [],
      tubes: []
    }
  },
  mounted() {
    const self = this
    axios.get('https://commt-lab-assitant.herokuapp.com/packages').then((resp)=>{
      resp.data.forEach((d)=>{
        self.packages.push(d)
      })
    })

    axios.get('https://commt-lab-assitant.herokuapp.com/tests').then((resp)=>{
      resp.data.forEach((d)=>{
        self.tests.push(d)
      })
    })

    axios.get('https://commt-lab-assitant.herokuapp.com/blood-tubes').then((resp)=>{
      resp.data.forEach((d)=>{
        self.tubes.push(d)
      })
    })
  }
}
</script>

<style scoped>

</style>