每天进步一点，做一个小记录

Vue-mysql-express-axios
一个Vue+mysql+Express+Axios的Demo

Vue前端  
node.js+express作为后台  
axios做数据交互  

包含跨域

安装mysql ，导入数据库（文件中并没有）
修改db.js和sql_code.js相关数据库的信息

初始文件夹中运行
npm install 
npm run dev


打开新的cmd进入back_end中
npm install 
npm run start 或者  nodemon app.js
后者文件变动则自动刷新


2018.11.8 
后台app.js增加了一个json数据解释
后台新增自动刷新
完善了前端一小部分demo


---------------------------------------------------------------------------------


挖坑记录
express : {
  post返回到前端数据需要用send，不然返回不了
}
vue:{
  接收post数据后，定义的值需要重新定义模板，不然一堆报错
  var product_c = {
    all:[{ids:'',name:''}],//需要重新定义下模板，不然会报错，但是还是可以显示
    img:[{img_url:''}]
  }
} 
