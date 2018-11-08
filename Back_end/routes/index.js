var express = require('express');
var router = express.Router();

var mysql = require('mysql');
var db = require('../sql_conn/db');
var sql_code = require('../sql_conn/sql_code');


var connection = mysql.createConnection(db.mysql);
connection.connect();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
//菜单
router.get('/cn_menu', function(req, res, next) {
  connection.query(sql_code.menu,function(err,result){
    if(err){
      console.log(err)
    }
    var _menu = []
    for (let i = 0; i < result.length; i++) {
      _menu[i] = [{'name':result[i].name},{'url':result[i].linkto},{'ids':result[i].noooo}]
    }
    res.json(_menu)
  });
});

//产品图片
router.get('/img' , function(req,res,next){
  connection.query(sql_code.all_img,function(err,result){
    if(err){
      console.log(err)
    }
    var _img_all = [];
    let cont = -1;
    for (let i = 0; i < result.length; i++) {
      if(result[i].tagtype == 'cp' && result[i].noooo == 1){
        cont++;
        _img_all[cont] = [{'img_url':result[i].imgurl1},{'miniimg_url':result[i].imgurl2},{'img_name':result[i].var1},{'cp_size':result[i].var2},{'tagids':result[i].tagids}]
      }
    }
    res.json(_img_all)
  });
})

//产品名字
router.post('/product_c' , function(req,res,next){
  connection.query(sql_code.product_data,function(err,result){
    if(err){
      console.log(err)
    }
    let _ids = req.body.oids;
    var _product_data = [];
    for (let i = 0; i < result.length; i++) {
      const element = result[i];
      if(result[i].ids == _ids){
        _product_data = [{'ids':result[i].ids,'name':result[i].name,'updata_time':result[i].uppdates,'cont':result[i].content,'address':result[i].v_s2}]
      }
    }
    res.send(_product_data)
  });
})

router.post('/product_img' , function(req,res,next){
  connection.query(sql_code.all_img,function(err,result){
    if(err){
      console.log(err)
    }
    let _ids = req.body.oids;
    var product_img = [];
    for (let i = 0; i < result.length; i++) {
      const element = result[i];
      if(result[i].tagids == _ids){
        product_img = [{'img_url':result[i].imgurl1,'miniimg_url':result[i].imgurl2,'cont':result[i].content}]
      }
    }
    res.send(product_img)
  });
})


module.exports = router;
