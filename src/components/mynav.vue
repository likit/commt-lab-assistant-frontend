<template>
  <nav class="navbar is-light is-fixed-top" role="navigation" aria-label="main navigation">
    <div class="navbar-brand">
      <a class="navbar-item">
        <img src="../assets/robotic.png">
      </a>
      <a role="button" class="navbar-burger" @click="isActive=!isActive"
         v-bind:class="{'is-active': isActive}"
         aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
      </a>
    </div>
    <div class="navbar-menu" v-bind:class="{'is-active': isActive}">
      <div class="navbar-start">
        <router-link :to="{name: 'MainPage'}" class="navbar-item">หน้าหลัก</router-link>
        <router-link :to="{name: 'About'}" class="navbar-item">เกี่ยวกับโปรแกรม</router-link>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: "myNav",
  data () {
    return {
      isActive: false
    }
  }
}
</script>

<style scoped>

</style>