<template>
    <div id="app" >
        <p> {{ product_c.all[0].ids }} </p>
        <p> {{ product_c.all[0].name }} </p>
        <p> {{ product_c.img[0].img_url }} </p>
    </div>
</template>
<style lang="scss" scoped>
    p{
        text-align: center;
    }
</style>
    
<script>
import axios from 'axios'
var product_c = {
    all:[{ids:'',name:''}],//需要定义下模板，不然会报错，但是还是可以显示
    img:[{img_url:''}]
}
export default {
  name: 'product_int',
  
  data () {
    return {
      product_c,


    }
  },
  mounted : function(){
      post_ids:{
          axios
            .post('http://localhost:3000/product_c',{
                oids : window.location.hash.split('?')[1].split('&')[1].split('=')[1],
            })
            .then(function(res){
                product_c.all = res.data;
            })
            .catch(function(err){
                console.log(err);
            })
      }
    
      post_ids_geturl:{
          axios
            .post('http://localhost:3000/product_img',{
                oids : window.location.hash.split('?')[1].split('&')[1].split('=')[1],
            })
            .then(function(res){
                product_c.img = res.data;
            })
            .catch(function(err){
                console.log(err);
            })
      }
  }
}

</script>
