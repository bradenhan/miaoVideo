var baseUrl = 'https://d.apicloud.com/mcm/api/';
// var  articleUrl = 'http://www.jianshu.com/p/';

if(typeof($) != 'undefined'){
	$(function(){
		$('a.aui-pull-left').on('click',function(){
			api.closeWin();
		});
	});
}

function ajaxRequest(url, method, bodyParam, callBack) {
	var appId = 'A6053483169763';
	var key = '29976755-9453-BF3D-F881-DC962D19E429';
	var now = Date.now();
	var appKey = SHA1(appId + "UZ" + key + "UZ" + now) + "." + now;
	api.showProgress();
	api.ajax({
		url : url,
		method : method,
		cache : false,
		timeout : 20,
		headers : {
			"Content-type" : "application/json;charset=UTF-8",
			"Accept" : "application/json",
			"X-APICloud-AppId" : appId,
			"X-APICloud-AppKey" : appKey
		},
		data : {
			body : bodyParam
		}
	}, function(ret, err) {
		//alert();
		api.hideProgress();
		callBack(ret, err);
	});
}

/**
 * 获取相隔天数
 *  */
function getDays(time){
	var today = new Date().getTime();
	var span = today - Number(time) * 1000;
	return Math.round(span / (1000*60*60*24));
}

/**
 * 阻止冒泡
 *  */
function stopBubble(e) {
	var e = e || window.event;
	if ( typeof (e) != 'undefined') {
		e.stopPropagation();
	}
	return false;
}
