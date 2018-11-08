<template>
  <div id="app">
    <ul>
      <li v-for="img_data in img.all">
        <router-link :to="{path:'/product_c',query:{Lv1:'10',Lv2:''+ img_data[4].tagids +''}}">
          <p>{{img_data[4].tagids}}</p>
        </router-link>
      </li>
    </ul>
  </div>
</template>
<style lang="scss" scoped>
  #app {
    text-align: center;
    font-size: 24px;
    letter-spacing: 0.2em;
    line-height: 1.5em;
  }

</style>
<script>
  import axios from "axios";
  var ll = -1;
  var img = {all: []};
  export default {
    
    name: "product",
    data() {
      return {
        img
      };
    },
    created() {
      get_imgall();
    }
  };

  function get_imgall() {
    axios
      .get("http://localhost:3000/img", {
        
      })
      .then(function (res) {
        img.all = res.data;
      })
      .catch(function (error) {
        console.log(error);
      });
  }
</script>
