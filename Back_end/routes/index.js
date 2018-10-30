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



module.exports = router;
