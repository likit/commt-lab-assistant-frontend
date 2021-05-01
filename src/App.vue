<template>
  <div id="app">
    <my-nav></my-nav>
    <router-view></router-view>
  </div>
</template>

<script>
import myNav from "@/components/mynav";
export default {
  name: 'App',
  components: {myNav},
}
</script>
