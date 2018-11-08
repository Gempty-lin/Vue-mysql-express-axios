<template>
    <div id="app">
        <div class="header_menu">
            <div class="row_0">
                <div class="search">
                    <form action="">
                        <input id="head_search" type="text" placeholder="Search..." >
                        <span><img src="" alt=""></span>
                        <input id="head_sub" type="submit" value=" ">
                    </form>
                </div>
                <menu_com></menu_com>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
    #app{
        width: 100%;max-width: 100%;;
        .header_menu{
            height: 80px;display: flex;justify-content: center;align-items: center;width: 100%;max-width: 100%;margin: 0 auto;background: #009688;;
            .row_0{
                width: 1440px;max-width: 100%;margin: 0 auto;display: flex;flex-wrap: wrap;height: 100%;align-items: center;;
            }
            .logo{
                margin-right: 7.6%;
                img{
                    width: 135px;max-width: 100%;;

                }
            }
            .search{
                position: relative;margin-right: 3%;
                form{
                    position: relative;display: flex;align-items: center;
                    #head_search{
                        width: 225px;height: 30px;background: #fff;border: none;padding-left: 30px;;
                    }
                    #head_sub{
                        width: 25px;height: 19px;background: transparent;border: none;position: absolute;;right: 10px;;
                    }
                }
            }
            
        }
    }
</style>
<script>
import menu_com from './menu_com.vue'
export default{
    components:{
        menu_com
    }
}
/* import axios from 'axios'
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
    })
    .catch(function (error) {
      console.log(error);
  });
} */

</script>


