
export const browser = {
	versions: function() {
		var u = navigator.userAgent,
			app = navigator.appVersion;
		var data = { //移动终端浏览器版本信息
			trident: u.indexOf('Trident') > -1, //IE内核
			presto: u.indexOf('Presto') > -1, //opera内核
			webKit: u.indexOf('AppleWebKit') > -1, //苹果、谷歌内核
			gecko: u.indexOf('Gecko') > -1 && u.indexOf('KHTML') == -1, //火狐内核
			ios: !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/), //ios终端
			android: u.indexOf('Android') > -1 || u.indexOf('Linux') > -1, //android终端或者uc浏览器
			iPhone: u.indexOf('iPhone') > -1 || u.indexOf('Mac') > -1, //是否为iPhone或者QQHD浏览器
			iPad: u.indexOf('iPad') > -1, //是否iPad
			webApp: u.indexOf('Safari') == -1 //是否web应该程序，没有头部与底部
		}
		data.mobile = data.ios || data.android || data.iPad || data.iPhone
		return data;
	}(),
	language: (navigator.browserLanguage || navigator.language).toLowerCase()
}
//h5复制文本到剪切板
export function copy({
	text,
	success,
	fail
}) {
	//#ifdef H5
	var copyDom = document.createElement('div');
	copyDom.innerText = text;
	copyDom.style.position = 'absolute';
	copyDom.style.top = '0px';
	copyDom.style.right = '-9999px';
	document.body.appendChild(copyDom);
	//创建选中范围
	var range = document.createRange();
	range.selectNode(copyDom);
	//移除剪切板中内容
	window.getSelection().removeAllRanges();
	//添加新的内容到剪切板
	window.getSelection().addRange(range);
	//复制
	try {
		document.execCommand('copy');
		if (success) {
			success();
		}
		console.log('copy success')
	} catch (err) {
		if (fail) {
			fail(err);
		}
		console.log('copy failed')
	} finally {
		copyDom.parentNode.removeChild(copyDom);
	}
	//#endif
	//#ifndef H5
	uni.setClipboardData({
		data: text,
		success,
		fail
	})
	//#endif
}
