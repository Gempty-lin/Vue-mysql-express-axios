<template>
  <div class="hello">
    <li v-for="( menu,index) in menu.all"> 
      <router-link :to="{path:''+ menu[1].url +'',query:{ids:''+menu[2].ids+''}}">{{ menu[0].name }}</router-link> 
    </li>
  </div>
</template>

<script>
import axios from 'axios'
var menu = {all:[]}
data_name();
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      menu,
    }
  },
  mounted () {
    
  }
}

function data_name(){
  axios.post('http://localhost:3000/cn_menu', {
      firstName: 'Fred',
      lastName: 'Flintstone'
    })
    .then(function (res) {
      
      menu.all = res.data;
      console.log(menu.all)
    })
    .catch(function (error) {
      console.log(error);
  });
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
