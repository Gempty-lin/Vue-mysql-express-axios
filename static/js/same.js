/*
* @Author: Administrator
* @Date:   2018-06-30 11:29:00
* @Last Modified by:   Administrator
* @Last Modified time: 2018-07-25 10:32:18
*/
/*

百度地图
<script type="text/javascript" src="http://api.map.baidu.com/api?v=2.0&ak=4IU3oIAMpZhfWZsMu7xzqBBAf6vMHcoa"></script>
<div class="map">
	<div id="allmap"></div>
</div>


省市区选项
<script src="dist/js/area.js"></script>
<script src="dist/js/select.js"></script>
<select name="province" id="province">
	<option value="请选择">选择省份</option>
</select>
<select name="city" id="city">
	<option value="请选择">选择城市</option>
</select>



元素距离页面顶部
oid('row_2').offsetTop
页面卷起高度
document.documentElement.scrollTop
元素高度
oid('carousel_a').clientHeight
加载页面
window.location.href('www.baidu.com')
刷新当前页
location.reload();
获取当前页面
window.location.href
滚动条高度
$(window).scroll(function(){//滚动条距离顶部的距离
    var scrollT = $(window).scrollTop();
    if (scrollT>) {}

substring 获取长度 n - m 中的值 //  获得地址
 var oid = window.location.href.substring(window.location.href.length-3,window.location.href.length);
 split 分隔字符串变数组
 var arr = document.cookie.split('; ');//转换数组
});

*/

function oid(e) {
	return document.getElementById(e);
}
function otag(e){
	return document.getElementsByTagName(e);
}
function oclass(e){
	return document.getElementsByClassName(e);
}
function oconsole(e) {
	console.log(e)
}

/*
<div class="swiper-container" id = "banner_0">
	<div class="swiper-wrapper">
		<div class="swiper-slide"><img src="/images/bann_0.jpg" alt=""></div>
		<div class="swiper-slide"><img src="/images/bann_1.jpg" alt=""></div>
		<div class="swiper-slide"><img src="/images/bann_2.jpg" alt=""></div>
	</div>
	<!-- 如果需要分页器 -->
	<div class="swiper-button-prev"></div>
    <div class="swiper-button-next"></div>
	<div class="swiper-pagination" id="banner_0_ind"></div>
</div>

var mySwiper_two = new Swiper ('#banner_0', {
    direction: 'horizontal',
    autoplay: {
		disableOnInteraction:false
	},
	loop: true,
	//按钮
	navigation: {
		nextEl: '.swiper-button-next',
		prevEl: '.swiper-button-prev',
	},
    
    // 如果需要分页器
    pagination: {
      el: '#banner_0_ind',
      clickable: true,
      clickableClass : 'my-pagination-clickable',
    },
});
$(".swiper-pagination-bullet").hover(function() {
    $(this).click(); //鼠标划上去之后，自动触发点击事件来模仿鼠标划上去的事件
},function() {
    mySwiper.autoplay.start(); //鼠标移出之后，自动轮播开启
})


*/

/*

//=================================================================================================

//自制轮播
rotate({
	car_id:'carousel',
	car_next : 'next',
	car_prev : 'prev',
	car_list : 1,
	car_time : 3500,
	car_transpeed :600,
	car_trancont : 1,
	car_ind:'car_ind',
	car_run:700
})
*/
var rotate = function (e) {
	rotate_method(
		e.car_id,// 外层id  li标签子元素
		e.car_next,//选填 next按钮 id 不需要则false
		e.car_prev,//选填 prev按钮 id 不需要则false
		e.car_list,//列数 选填 默认1 
		e.car_time,//轮播时间 选填 默认值3000
		e.car_transpeed,//过渡的时间 选填 默认600
		e.car_trancont,//过渡个数
		e.car_ind,//是否需要指示符，需要填id,不需要则false
		e.car_run//选填 过渡的宽度，用于获取不了宽度时
	)
}

//=================================================================================================

/*
跳转位置
pagetop({
	height:800px,
	time:300  
})

*/
var pagetop = function(e){//height必须，time默认800毫秒
	pagetop_method(
		e.height,
		e.time
	)
}
//=================================================================================================

/*
加载更多
loadmore({
	ul:'goods-ul',
	anniu:'btn',
	text:'text',
	scont:6,
	getcont:3,
	height:233,
	list:2,
	dataclass:'',
	dataname:''
})
*/

var loadmore = function (parameter) {
	loadcontent(
		parameter.ul,// ul的id   必填  子元素必须li
		parameter.anniu,//按钮的id    必填
		parameter.text,//按钮中的文本id   必填
		parameter.scont,//网页初始值需要显示的个数 选填 默认值6
		parameter.getcont,//每次点击按钮获取的个数 选填 默认值3
		parameter.height,//获取值单个的高度   必填
		parameter.list,//列数   必填
		parameter.dataclass,//需要异步的当前类名
		parameter.dataname//异步加载的data名称 选填
	)
}
//=================================================================================================

//返回顶部  输入id名即可
function retop(e){
	o
	id(e).onclick = function () {
		$('html,body').animate({scrollTop:0},800);
		$(window).scroll(function(){//滚动条距离顶部的距离
			var scrollT = $(window).scrollTop();
			if (scrollT == 0 ) {
				$('html,body').stop(true).animate();
			}
		})
	}	
}

//=================================================================================================



//=================================================================================================

//页面跳转
//=================================================================================================


function pagetop_method(height,time){
	var stime = time?time:800;
	$('html,body').animate({scrollTop:height},stime);
}


//加载更多
//=================================================================================================
function loadcontent(ul,anniu,text,scont,getcont,height,list,dataclass,dataname) {
	// body...
	var scontvalue = 6;
	var getcontvalue = getcont?getcont:3;

	var Ogoodsul = document.getElementById(''+ul+'');//ul
	var Oanniu = document.getElementById(''+anniu+'');//按钮
	var Op = document.getElementById(''+text+'');//按钮文本
	var Ogoodsli = Ogoodsul.getElementsByTagName('li');//加载的li
	var productcont = Ogoodsli.length;//总数

/*	var Obot = Oanniu.getElementsByTagName('div')[1];
	var Obot_0 = Oanniu.getElementsByTagName('div')[0];*/

	var Odataclass = dataclass?dataclass:'';
    var Odataname = dataname?dataname:null;
	var showproduct = scont?scont:scontvalue ;//初始显示个数
	var getshow = getcont?getcont:getcontvalue;//每次点击显示个数


	var Ouh = height;//单行高度
	var Olist = list;//列数
	

	var Ozd = Math.ceil(productcont/Olist) * Ouh;//最终高度
	var Ocsz = Math.ceil(showproduct/Olist) * Ouh;//初始高度

	var ocheight = Math.ceil(Ogoodsli.length/Olist)*Ouh;//当初始个数大于现有个数显示的高度
	console.log(Ogoodsli.length);
	if (Ogoodsli.length<showproduct) {
		Ogoodsul.style.cssText = 'height:'+ocheight+'px';
	}else{
		Ogoodsul.style.cssText = 'height:'+Ocsz+'px';
	}
	if (showproduct>=Ogoodsli.length) {
		Op.innerHTML = "没有更多了...";
/*		Obot.style.cssText = "transform: rotateX(180deg);transition:all 0.2s ease;-webkit-filter:saturate(3) hue-rotate(167deg);"
		Obot_0.style.cssText = "transition:all 0.2s ease;-webkit-filter:saturate(3) hue-rotate(167deg);"*/
		for (var i = 0; i < Ogoodsli.length; i++) {
			Ogoodsli[i].index = i;
			Ogoodsli[i].style.cssText = "opacity:1;top:0px;left:0px;right:0px;bottom:0px;z-index:40;"
		}
	}else{
		for (var i = 0; i < showproduct; i++) {
			Ogoodsli[i].index = i ;
			Ogoodsli[i].style.cssText = "opacity:1;top:0px;left:0px;right:0px;bottom:0px;z-index:40;"
				if (Odataclass!="") {
					var oasy = Ogoodsli[i].getElementsByClassName(''+Odataclass+'')[0];
					if (oasy.getAttribute(""+dataname+"") != null) {
						oasy.style.cssText = 'background:url("'+oasy.getAttribute(""+dataname+"")+'") no-repeat center;background-size:cover;';
					}
				}
		}
		Oanniu.onclick = function (){
			getshow += getcontvalue;
			var loadllength = showproduct+getshow-getcontvalue;
			if (loadllength >=productcont) {
				Ogoodsul.style.height = ''+Ozd+'px';
				loadllength = productcont ;
				Op.innerHTML = "没有更多了...";
/*		Obot.style.cssText = "transform: rotateX(180deg);transition:all 0.2s ease;-webkit-filter:saturate(3) hue-rotate(167deg);"
		Obot_0.style.cssText = "transition:all 0.2s ease;-webkit-filter:saturate(3) hue-rotate(167deg);"*/
				for (var i = 0; i < loadllength; i++) {
					Ogoodsli[i].index = i ;	
					Ogoodsli[i].style.cssText="opacity:1;top:0px;left:0px;right:0px;bottom:0px;z-index:40;";

					if (Odataclass!="") {
						var oasy = Ogoodsli[i].getElementsByClassName(''+Odataclass+'')[0];
						if (oasy.getAttribute(""+dataname+"") != null) {
							oasy.style.cssText = 'background:url("'+oasy.getAttribute(""+dataname+"")+'") no-repeat center;background-size:cover;';
						}
					}
						
					/*Ogoodsli[i].style.cssText="display:block;opacity:1;top:0px;";*/
				}
			}

			if (Ogoodsli.length>=loadllength) {
				Ouh += height*(getcontvalue/list);
				var cc = Ouh+Ocsz-height;8
				if (cc<=Ozd) {
					Ogoodsul.style.height = ''+cc+'px';
				}
				for (var i = 0; i < loadllength; i++) {
					Ogoodsli[i].index = i ;	
					Ogoodsli[i].style.cssText="opacity:1;top:0px;left:0px;right:0px;bottom:0px;z-index:100;";
					if (Odataclass!="") {
						var oasy = Ogoodsli[i].getElementsByClassName(''+Odataclass+'')[0];
						if (oasy.getAttribute(""+dataname+"") != null) {
							oasy.style.cssText = 'background:url("'+oasy.getAttribute(""+dataname+"")+'") no-repeat center;background-size:cover;';
						}
					}
					/*Ogoodsli[i].style.cssText="display:block;opacity:1;top:0px;";*/
				}
			}
		}
	}
}

//二级菜单
//=================================================================================================
function sectab_method(e) {

}

//轮播 基本完善，差loop 和触摸效果
//=================================================================================================
function rotate_method (carousel,car_right,car_left,ro_list,time,transpeed,trancont,carind,carrun){
	var otime = time;
	var otranspeed = transpeed?transpeed:600;

	var n = 0;
	var list = ro_list?ro_list:1;

	var run = carrun?carrun:(s_carul.offsetWidth/trancont);
	var sum = list * s_carli.length;

	var s_carul = document.getElementById(''+carousel+'');
	var s_carli = s_carul.getElementsByTagName('li');

	var s_indul = carind?document.getElementById(''+carind+''):false;
	var ele_ind = '<li class=""><a href="javascript:;"><div class="yuan_ind"></div></a></li>'
	if(s_indeul){
		var all_page = s_carli.length/list;
		s_indeul.innerHTML =""
		for (let i = 0; i < all_page; i++) {
			s_indeul.innerHTML += ""+ ele_ind +"";
		}
	}
	


	var s_indli = carind?s_indul.getElementsByTagName('li'):false;

	var onext = car_right?document.getElementById(''+car_right+''):false;
	var oprev = car_left?document.getElementById(''+car_left+''):false;

	

	for (var i = 0; i < s_carli.length; i++) {
		s_carli[i].index = i ;
		if(s_indul){
			s_indli[i].index = i;
			
			s_indli[i].onclick = function(){
				for (let z = 0; z < s_indli.length; z++) {
					s_indli[z].className="";
				}
				s_indli[this.index].className = "active"
				n = this.index;
				wi = run * n;
				s_carul.style.cssText = 'transition-timing-function: ease; transition-duration: '+otranspeed+'ms; transform: translate3d(-'+ wi +'px, 0px, 0px);';
			}
		}
		 function next () {
			n++;
			if (n>Math.ceil(s_carli.length/list)-1) {
				n=0;
			}
            wi = run * n;
			s_carul.style.cssText = 'transition-timing-function: ease; transition-duration: '+otranspeed+'ms; transform: translate3d(-'+ wi +'px, 0px, 0px);';
			if(s_indli){
                for (let z = 0; z < s_indli.length; z++) {
                    s_indli[z].className=" ";
                }
                s_indli[this.index].className = "active"
            }
			if (otime) {
				window.clearInterval(runinner);
				runinner = setInterval(next,otime);
			}
		}
		 function prev () {
			n--;
			if (n<0) {
				n = Math.ceil(s_carli.length/list)-1;
			}
			wi = run * n;
			s_carul.style.cssText = 'transition-timing-function: ease; transition-duration: '+otranspeed+'ms; transform: translate3d(-'+ wi +'px, 0px, 0px);';
			if (otime) {
				window.clearInterval(runinner);
				runinner = setInterval(next,otime);
			}
			if(s_indli){
                for (let z = 0; z < s_indli.length; z++) {
                    s_indli[z].className="";
                }
                s_indli[this.index].className = "active"
            }
		}

	}
	if(onext){
		onext.addEventListener('click',next);
	}
	if(oprev){
		oprev.addEventListener('click',prev);
	}
	if (otime) {
		var runinner = setInterval(next,otime);
	}
	
}
//=================================================================================================
//=================================================================================================

//cookie
function cookie() {
	
	function setCookie(name,href, value, iDay) 
	{
	    var oDate=new Date();
	    oDate.setDate(oDate.getDate()+iDay);
	     
	    document.cookie=name+'|'+href+'|'+encodeURIComponent(value)+';expires='+oDate;
	}

	function clear(name,iDay) 
	{
	    var oDate=new Date();
	    oDate.setDate(oDate.getDate()+iDay);
	     
	    document.cookie=name+';expires='+oDate;
	}

	function getCookie(name)
	{
	    var arr=document.cookie.split('; ');
	    var i=0;
	    for(i=0;i<arr.length;i++)
	    {
	        //arr2->['username', 'abc']
	        var arr2=arr[i].split('=');
	         
	        if(arr2[0]==name)
	        {  
	            var getC = decodeURIComponent(arr2[1]);
	            return getC;
	        }
	    }
	     
	    return '';
	}
	 
	function removeCookie(name)
	{
	    setCookie(name,'1', '1', -1);
	}

	    window.onload = function(){
        var osul = document.getElementById('show_ul');
        var osli = osul.getElementsByTagName('li')[0];
        var osrc = osli.getElementsByTagName('img')[0].src;//图片路径
        var ohref = window.location.href;//页面路径
        var oid = window.location.href.substring(window.location.href.length-3,window.location.href.length);
        setCookie(oid,ohref,osrc,7);//创建当前访问的cookie
        var arr = document.cookie.split('; ');//转换数组
        
        if (arr.length>5) {
            clear(''+arr[0]+'',-1)
        }
        for (var i = 0; i < arr.length; i++) {
            arr[i].index = i;
            var dou_arr = arr[i].split('|');
            var oz = document.getElementById('zuji');
            var odiv = "<div class=\'col-2\'><div class=\'pic\'><a href=\'"+dou_arr[1]+"\'><img src=\'"+decodeURIComponent(dou_arr[2])+"\'></a></div></div>";
            oz.innerHTML += odiv;
        }

        document.getElementById('remove').onclick = function(){

            for (var i = 0; i < arr.length; i++) {
                arr[i].index = i;
                clear(arr[i],-1)
            }
            $('#zuji').empty();
        }
    }
}

//=================================================================================================
//=================================================================================================

//检测提交表单
function check(){
    var oiname = document.getElementById('name');
    var oiphone = document.getElementById('phone');
    var oiemail = document.getElementById('email');
    var oiaddress = document.getElementById('address');
    var oibtn = document.getElementById('btn-post');
    var oistore = document.getElementById('store');
    var oiqu =document.getElementById('qu');
    var oimessage = document.getElementById('message')
    var reg = /^[\u4E00-\u9FA5]{2,4}$/;//2-4个汉字
    var hz = /^[\u4E00-\u9FA5]{4,26}$/;//个汉字
    var sz = /^((13[0-9])|(15[1-3,5-9])|(17[7])|(18[0-9]))\d{8}$/;//电话格式
    var yx =/^([a-zA-Z0-9]+[_|\_|\.]?)*[a-zA-Z0-9]+@([a-zA-Z0-9]+[_|\_|\.]?)*[a-zA-Z0-9]+\.[a-zA-Z]{2,3}$/;//邮箱格式
    if (oiname.value == "" || !reg.test(oiname.value)) {
        alert("请输入正确的名字");
        console.log(oiname.value);
        return false;
    }else if (oiphone.value == "" || oiphone.value.length < 11 || !sz.test(oiphone.value)) {
        alert("请输入11位手机号码");
        return false;
    }else if (oiemail.value == "" || !yx.test(oiemail.value)) {
        alert("请输入正确的邮箱");
        return false;
    }else if (oiaddress.value == "" || !hz.test(oiaddress.value)){
        alert("请输入正确地址");
        return false;
    }else if (oistore.value == ""){
        alert("请输入具体信息");
        return false;
    }else if (oiqu.value ==""){
        alert("请输入具体信息");
        return false;
    }else if (oimessage.value == ""){
        alert("请输入留言");
        return false;
    }
    oibtn.value = "正在提交，请稍等..."
    return true;
}

//=================================================================================================
//=================================================================================================


/* 鼠标跟随 */
function mousefollow(){
	var ocircular = document.getElementById('circular');
    var xx = 0;
    var yy = 0;
    var opic_1 = ocircular.getElementsByClassName('box_0')[0];
    var obox_0 = document.getElementsByClassName('box_0')[0];
    ocircular.addEventListener('mousemove',function(e){
       /*  console.log('x:'+e.clientX+ " , " + 'y:'+e.clientY); */
        xx = Math.pow(e.clientX*0.0016,2) ;
        yy = Math.pow(e.clientY*0.01,2) ;
        zz = (e.clientX*0.02) ;
        console.log(e.clientY)
        circular.style.cssText = "transform: translate3d("+ xx +"px,"+ yy +"px,"+ zz +"px);transform-origin: 5% 50%;";
/*         setTimeout(function(){circular.style.cssText += " transition:unset;"},500); */
    });
    ocircular.addEventListener('mouseleave',function(e){

        circular.style.cssText = "";
    });
}

//=================================================================================================
//=================================================================================================

/* a标签提交+检测是否为空 */
function check_header(){
	var ohsear = document.getElementById('index-sear');
	
	if (ohsear.value == "") {
		alert("输入内容不能为空");
		return false;
	}
	return true;
}
// a标签提交form表单
function formSubmit(){   
	
	document.actionForm.action = "/search.php";   
	document.actionForm.onsubmit = function(){return check_header()}
	document.actionForm.submit();
}

//=================================================================================================
//=================================================================================================

/* Y周无限滚动 */
function Ysrc (){
	var yuyue_ul = document.getElementById('yuyue');
	var yuyue_li = yuyue_ul.getElementsByTagName('li');
	var yuyue_box = document.getElementById('yuyue_box');
	var yuyue_html = yuyue_ul.innerHTML;
	if(yuyue_ul.offsetHeight>yuyue_box.offsetHeight){
		yuyue_ul.innerHTML += ""+yuyue_html+"";
		var obb = yuyue_ul.offsetHeight;
		yuyue_ul.style.cssText = 'transition:all ' + (yuyue_li.length+5) + 's linear;margin-top:-'+ obb +'px';
	}
	setTimeout(function(){yuyue_ul.style.cssText= "margin-top:0px;"   },(yuyue_li.length+5)*1000);
	setInterval(function(){
		if(yuyue_ul.offsetHeight>yuyue_box.offsetHeight){
			var obb = yuyue_ul.offsetHeight;
			yuyue_ul.style.cssText = 'transition:all ' + (yuyue_li.length+5) + 's linear;margin-top:-'+ obb +'px';
		}
	},50)

	setInterval(function(){
		yuyue_ul.style.cssText= "margin-top:0px;"
	},((yuyue_li.length+5)*1000)/2 )
}

//=================================================================================================
//=================================================================================================
/* 翻页     未弄页数 */
//           （每页的个数）显示个数，总数，上一页按钮id，下一页按钮id，显示动画播放时间
function pageturn(s_cont,pagecont,ind,prev,next,showtime) {
	//============================================================
	//翻页
	var show_cont = ""+s_cont+""; //显示个数

	var downcent = oid("downcent");
	var downcent_li = downcent.getElementsByTagName('li'); //所有内容

	var ind = oid(''+ ind +'');
	var ind_li = ind?ind.getElementsByTagName('li'):"";

	var all_page = Math.ceil(downcent_li.length / show_cont); //总页数
	var page = 1; //当前页码

	var all_cont = downcent_li.length;
	
	var s_prev = oid(""+prev+"");
	var s_next = oid(""+next+"");

	var all_li = new Array()


	for (let i = 0; i < downcent_li.length; i++) {
		downcent_li[i].index = i;
		all_li[i] = downcent_li[i];
	}
	downcent.innerHTML = "";

	if( show_cont >all_cont ){
		for (let i = show_cont * (page - 1); i < all_cont; i++) {
			all_li[i].index = i;
			downcent.appendChild(all_li[i]);
			var t = downcent.getElementsByTagName('li').length;
			setTimeout(() => {
				all_li[i].className += " active";
			}, 200 * t);
		}
	
	}else{
		for (let i = show_cont * (page - 1); i < show_cont * page; i++) {
			all_li[i].index = i;
			downcent.appendChild(all_li[i]);
			var t = downcent.getElementsByTagName('li').length;
			setTimeout(() => {
				all_li[i].className += " active";
			}, 200 * t);
		}	
	}
	
	s_next.onclick = function () {
		page++;
		if (page > all_page) {
			page = all_page;
			alert('是在下输了，已经是最后一页');
		} else {
			downcent.innerHTML = "";
			for (let j = show_cont * (page - 1); j < show_cont * page; j++) {

				downcent.appendChild(all_li[j]);
				var t = downcent.getElementsByTagName('li').length;
				all_li[j].className = all_li[j].classList[0];
				setTimeout(() => {
					all_li[j].className += " active";
				}, 200 * t);
			}
		}

	}
	s_prev.onclick = function () {
		page--;
		let aa = 2048;
		if (page < 1) {
			page = 1;
			alert('是在下输了，已经是第一页');
		} else {
			downcent.innerHTML = "";
			for (let j = show_cont * (page - 1); j < show_cont * page; j++) {
				downcent.appendChild(all_li[j]);
				var t = downcent.getElementsByTagName('li').length;
				all_li[j].className = all_li[j].classList[0];
				setTimeout(() => {
					all_li[j].className += " active";
				}, 200 * t);

			}
		}
	}


	for (let i = 0; i < ind_li.length; i++) {
		const element = ind_li[i];
		ind_li[i].index = i ;
		ind_li[i].className = ""+ ind_li[i].classList[0] +"";
		ind_li[page].className += " active";

		ind_li[i].onclick = function(){
			page = this.index;
			for (let j = 0; j < ind_li.length; j++) {
				const element = ind_li[j];
				ind_li[j].index = j ;
				ind_li[j].className = ""+ ind_li[j].classList[0] +"";
				if(page == 1){

				}else{
					ind_li[0].innerHTML = ""+(page-1)+"";
					ind_li[1].innerHTML = ""+page+"";
					ind_li[2].innerHTML = ""+(page+1)+"";
				}
			}
			ind_li[page].className += "active";
		}

	}
}

//=================================================================================================
//=================================================================================================

//////////// AJAX ////////////
function ajax_search(){
	$(document).ready(function(){
		$('#s_store').click(function(){
			var sheng = $('#province option:selected').val();
			var shiqu = $('#city option:selected').val();
			var address = $('#address').val()
			$.ajax({
				type:'post',
				url:'phpmodle/p_market.php',
				data:{sheng:sheng,shiqu:shiqu,address:address},
				success:function(data){
					$('#goods_ul').empty();
					$('#goods_ul').html(data);
				}
	
			})
		})
	})
}

//=================================================================================================
//=================================================================================================
//百度地图API
function MAP_API(){
    // 百度地图API功能
    var map = new BMap.Map("allmap");    // 创建Map实例
    map.centerAndZoom('广州市番禺区洛浦街厦窖南路', 15);  // 初始化地图,设置中心点坐标和地图级别


    var data_info = [
                     [113.3262,23.045436,"地址：番禺区洛浦街厦滘村南路35号厦窖商厦2层"],
                     [116.406605,39.921585,"地址：北京市东城区东华门大街"],
                     [116.412222,39.912345,"地址：北京市东城区正义路甲5号"],
                     [113,23.045436,"地址：番禺区洛浦街厦滘村南路35号厦窖商厦2层"],
                     [116.406605,39.921585,"地址：北京市东城区东华门大街"]
                    ];
    var opts = {
                width : 250,     // 信息窗口宽度
                height: 80,     // 信息窗口高度
                offset:{height:-15,width:0},
                title : "详细地址" , // 信息窗口标题
                enableMessage:true//设置允许信息窗发送短息
               };
    function clickadd(){
    for(var i=0;i<data_info.length;i++){
        var marker = new BMap.Marker(new BMap.Point(data_info[i][0],data_info[i][1]));  // 创建标注

        var content = data_info[i][2];
        map.addOverlay(marker);               // 将标注添加到地图中
        addClickHandler(content,marker);
    }
    }
    function addClickHandler(content,marker){
        marker.addEventListener("click",function(e){
            console.log(data_info );
            map.panTo(new BMap.Point(marker.point.lng,marker.point.lat));
            openInfo(content,e)}
        );
    }
    function liclick(){
        var adul = document.getElementById('address-ul');
        var ali = adul.getElementsByTagName('li');

        for (var i = 0; i < ali.length; i++) {
            ali[i].index = i;
            ali[i].onclick = function(){
               map.panTo(new BMap.Point(data_info[this.index][0],data_info[this.index][1])); 
               for (var i = 0; i < ali.length; i++) {
                   ali[i].className = " "
               }
               ali[this.index].className = "active"
            }

        }
    }

    function openInfo(content,e){
        var p = e.target;
        var point = new BMap.Point(p.getPosition().lng, p.getPosition().lat);
        var infoWindow = new BMap.InfoWindow(content,opts);  // 创建信息窗口对象
        map.openInfoWindow(infoWindow,point); //开启信息窗口
        var xkuang = document.getElementsByClassName('BMap_pop')[0];
    console.log(xkuang)
    }

    map.addControl(new BMap.MapTypeControl({
        mapTypes:[
            BMAP_NORMAL_MAP,
            BMAP_HYBRID_MAP
        ]}));
    map.setCurrentCity("广州");          // 设置地图显示的城市 此项是必须设置的
    map.enableScrollWheelZoom(true);     //开启鼠标滚轮缩放
	liclick();
	//为我定位
	var myon = document.getElementById('myon');
    myon.onclick = function(){
            function myFun(result){
                console.log(result.center.lng)
                var geoc = new BMap.Geocoder();
                var pt = result.center
                geoc.getLocation(pt, function(rs){
                    var addComp = rs.addressComponents;
                    var s = addComp.province;
                    sc=s.substring(0,s.length-1);
                    setTimeout( function () { $("#province").val(sc) },10 )
                    $("#city").empty();
                    setTimeout( function(){  $("#city").append("<option value='"+cityName+"'>"+cityName+"</option>");$('#city').val(cityName);},15)
                });
                var cityName = result.name;
                map.setCenter(cityName);
            }
            var myCity = new BMap.LocalCity();
            myCity.get(myFun);
    }

}

//=================================================================================================
//=================================================================================================

function LeftMenu(openclass){
	(function ($) {
        var LM = function (ele, options) {
            this.$element = ele
            this.defaults = {}
            this.settings = $.extend({}, this.defaults, options)
        }
        LM.prototype = {
            menu: function () {
                var _this = this.$element
                var LI_HEIGHT = _this.find('.f2 li').height() + parseInt(_this.find('.f2 li').css('padding-top')) + parseInt(_this.find('.f2 li').css('padding-bottom'))
                $('.menu-dark-backdrop').on('click', function () {
                    if (_this.hasClass('menu-open')) {
                        _this.removeClass('menu-open')
                        $('.menu-dark-backdrop').removeClass('in').off()
                        $('body').css("overflow", "auto")
                        _this.find('li.hasChild').removeClass('open').off().find('div').css({
                            "height": 0
                        })
                        _this.scrollTop(0)
                    } else {
                        _this.addClass('menu-open')
                        $('.menu-dark-backdrop').addClass('in')
                        $('body').css("overflow", "hidden")
                    }
                })
                _this.find('li.hasChild').on('click', function (e) {
                    /*ÅÐ¶Ïµã»÷µÄÄ¿±ê*/
                    if ($(e.target)[0].nodeName == 'LI') {
                        var et = $(e.target)
                    } else {
                        var et = $(e.target).parent()
                        while (et[0].nodeName != 'LI') {
                            et = et.parent()
                        }
                    }
                    location.href = et.find('a').eq(0).attr("href")

                    if ($(et).hasClass('open')) {
                        $(et).removeClass('open').find('li').removeClass('open')
                    } else {
                        $(et).addClass('open').siblings().removeClass('open').find('li').removeClass('open')
                    }

                    /*liÏÂÀ­¶¯»­Õ¹Ê¾ ¼ÆËã²¢ÉèÖÃdivµÄheight*/
                    var _index = $(et).children().eq(1).children().children().length
                    if (!$(et).hasClass('open')) {
                        $(et).children().eq(1).css({
                            "height": 0
                        })
                        $(et).find('div').css({
                            "height": 0
                        })
                        if ($(et).parent().parent().hasClass("f2")) {
                            var _parentHeight = $(et).parent().children().length * LI_HEIGHT
                            $(et).parent().parent().css({
                                "height": _parentHeight + "px"
                            })
                        }
                    } else {
                        var _divHeight = _index * LI_HEIGHT
                        $(et).children().eq(1).css({
                            "height": _divHeight + "px"
                        })
                        if ($(et).parent().parent().hasClass("f2")) {
                            var _parentHeight = $(et).parent().children().length * LI_HEIGHT
                            _parentHeight = parseInt(_parentHeight) + _divHeight
                            $(et).parent().parent().css({
                                "height": _parentHeight + "px"
                            })
                        }
                        $(et).siblings().find('div').css({
                            "height": 0
                        })
                    }
                    if (e && e.stopPropagation) {
                        e.stopPropagation()
                    } else {
                        window.event.cancelBubble = true
                    }
                    e.preventDefault()
                })
            },
            init: function () {
                var $btn = $(this.settings.triggerBtn)
                var obj = this
                $btn.click(function () {
                    if (!$('body').find('div').hasClass('menu-dark-backdrop')) {
                        $('body').prepend('<div class="menu-dark-backdrop"></div>')
                    }
                    if (obj.$element.hasClass('menu-open')) {
                        obj.$element.removeClass('menu-open')
                        $('.menu-dark-backdrop').removeClass('in').off()
                        $('body').css({
                            "overflow": "auto"
                        })
                        $('body').css("overflow", "auto")
                        obj.$element.find('li').removeClass('open').off().find('div').css({
                            "height": 0
                        })
                        obj.$element.scrollTop(0)
                    } else {
                        obj.$element.addClass('leftMenu').addClass('menu-open')
                        $('.menu-dark-backdrop').addClass('in')
                        $('body').css({
                            "overflow": "hidden"
                        })
                        obj.menu()
                    }
                })
            }
        }

        $.fn.leftMenu = function (options) {
            var lm = new LM(this, options)
            lm.$element.addClass('leftMenu')
            return lm
        }
    }(jQuery));

    $(function ($) {
        $('#menu').leftMenu({
            "triggerBtn": "."+ openclass +""
        }).init()
    });
}
//

//=================================================================================================
//=================================================================================================
//一个可以把当前页面弄炸的函数

function bigbug(){
	windown.addEventListener('mouseover',function (event) {
		var e = event.toElement || event.relatedTarget;
		while(e && e.parentNode && e.parentNode != "div.row_1") {
			if (e.parentNode == this||  e == this) {
				if(e.preventDefault) e.preventDefault();
				return false;
			}
		}
		var ss = event;
		console.log(ss);
		e = e.parentNode;
	})
}
//=================================================================================================
//=================================================================================================

