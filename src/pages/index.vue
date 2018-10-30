<template>
    <div id="app">
        Welcome index
    </div>
</template>
<style lang="scss" scoped>
    #app{
        text-align: center;font-size: 48px;letter-spacing: 0.2em;line-height: 1.5em;
    }
</style>
<script>
import axios from 'axios'

export default {
  name: 'index',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
    }
  },
  mounted () {
    
  }
}

</script>


