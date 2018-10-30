<template>
    <div id="app">
        <div class="header_menu">
            <ul class="menu">
                <li v-for="( menu,index) in menu.all"> 
                    <router-link :to="{name:''+ menu[1].url +'',params:{first:''+menu[2].ids+'',second:'22'}, query:{LV1:''+menu[2].ids+'',LV2:'123'} }">{{ menu[0].name }}</router-link> 
                </li>
            </ul>
        </div>
    </div>
    <!-- ,query:{ids:''+menu[2].ids+''} ,params:{one:''+menu[2].ids+''}-->
</template>

<style lang="scss" scoped>
    #app{
        .header_menu{
            height: 110px;display: flex;justify-content: center;align-items: center;;
            ul{
                display: flex;justify-content:space-around;width: 100%;flex: 0 0 50%;
                li{
                    a{color: #107c4a}
                }
            }
        }
    }
</style>
<script>
import axios from 'axios'
var menu = {all:[]}
data_name();
export default {
  name: 'index',
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
  axios.get('http://localhost:3000/cn_menu', {
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


