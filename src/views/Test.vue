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
          </div>
        </div>
        <div class="columns">
          <div class="column has-text-centered">
            <span class="icon is-large">
              <i class="fas fa-vial fa-2x"></i>
            </span>
            <h1 class="title is-size-4">การตรวจ {{test.name}}</h1>
            <h1 class="subtitle is-size-4">{{test.englishName}}</h1>
            <p class="notification is-white">
              <button class="button is-info is-rounded" @click="displayModal=true">
                <span class="icon">
                  <i class="fas fa-info-circle"></i>
                </span>
                <span>ดูคำอธิบาย</span>
              </button>
            </p>
            <div class="modal" v-bind:class="{ 'is-active': displayModal }">
              <div class="modal-background"></div>
              <div class="modal-card">
                <header class="modal-card-head">
                  <p class="modal-card-title">คำอธิบาย</p>
                  <button class="delete" aria-label="close" @click="displayModal=false"></button>
                </header>
                <section class="modal-card-body">
                  {{ test.description }}
                </section>
                <footer class="modal-card-foot">
                  <button class="button is-danger" @click="displayModal=false">
                    <span class="icon"><i class="far fa-times-circle"></i></span>
                    <span>ปิด</span>
                  </button>
                </footer>
              </div>
            </div>
            <p class="notification is-light is-info">
              <span class="icon is-large">
                <i class="fas fa-weight fa-2x"></i>
              </span>
              <label class="label">ค่าอ้างอิง</label>
              {{ test.referenceValue }}
            </p>
            <p class="notification is-light is-info">
              <span class="icon is-large">
                <i class="fas fa-user fa-2x"></i>
              </span>
              <span>
              <label class="label">การเตรียมตัวสำหรับการตรวจ</label>
                {{ test.preparation }}
              </span>
            </p>
            <p class="notification is-light is-info">
              <span class="icon is-large">
                <i class="fas fa-dolly fa-2x"></i>
              </span>
              <label class="label">การขนส่งสิ่งตัวอย่าง</label>
              {{ test.transportation }}
            </p>
          </div>
        </div>
      </div>
    </section>
  </div>

</template>

<script>
import axios from "axios";

export default {
  name: "Test",
  data () {
    return {
      test: {},
      displayModal: false
    }
  },
  mounted() {
    const self = this
    axios.get('https://commt-lab-assitant.herokuapp.com/tests/' + this.$route.params.testId).then((resp)=>{
      self.test = resp.data
    })
  }
}
</script>

<style scoped>

</style>