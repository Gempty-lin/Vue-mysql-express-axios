<template>
    <ul class="menu">
        <li v-for="( menu_data,index) in menu_data.all"> 
            <router-link :to="{path:''+ menu_data[1].url +'',query:{Lv1:''+menu_data[2].ids+''}}">{{ menu_data[0].name }}</router-link> 
        </li>
    </ul>
</template>
<style lang="scss" scoped>
ul{
    display: flex;justify-content:space-around;width: 100%;flex: 1;
    li{
        a{color: #fff}
    }
}
</style>

<script>
import axios from 'axios'
var menu_data = {all:[]}

export default {
  name: 'menu_com',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      menu_data,
    }
  },
  mounted () {
    data_name();
  }
}
function data_name(){
  axios.get('http://localhost:3000/cn_menu', {
      firstName: 'Fred',
      lastName: 'Flintstone'
    })
    .then(function (res) {
      menu_data.all = res.data;
    })
    .catch(function (error) {
      console.log(error);
  });
}

</script>

