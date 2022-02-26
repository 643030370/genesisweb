import uniStarterConfig from '@/uni-starter.config.js';
import store from '@/store'
//应用初始化页
// #ifdef APP-PLUS
import checkUpdate from '@/uni_modules/uni-upgrade-center-app/utils/check-update';
import callCheckVersion from '@/uni_modules/uni-upgrade-center-app/utils/call-check-version';
import interceptorChooseImage from '@/uni_modules/json-interceptor-chooseImage/js_sdk/main.js';
// #endif
// const db = uniCloud.database()
export default async function() {
	let loginConfig = uniStarterConfig.router.login
	//清除有配置但设备环境不支持的登陆项
	// #ifdef APP-PLUS
	// await new Promise((callBack) => {
	// 	plus.oauth.getServices(oauthServices => {
	// 		loginConfig = loginConfig.filter(item => {
	// 			if (["univerify", "weixin", "apple"].includes(item)) {
	// 				let index = oauthServices.findIndex(e => e.id == item)
	// 				if (index == -1) {
	// 					return false
	// 				} else {
	// 					return oauthServices[index].nativeClient
	// 				}
	// 			} else {
	// 				return true
	// 			}
	// 		})
	// 		if (loginConfig.includes('univerify')) { //一键登录 功能预登录
	// 			uni.preLogin({
	// 				provider: 'univerify',
	// 				complete: e => {
	// 					console.log(e);
	// 				}
	// 			})
	// 		}
	// 		callBack()
	// 	}, err => {
	// 		console.error('获取服务供应商失败：' + JSON.stringify(err));
	// 	})
	// })
	// #endif

	//非app移除：一键登录、苹果登陆；h5移除微信登陆，如果你做微信公众号登陆需要将此行移除
	// #ifndef APP-PLUS
	loginConfig = loginConfig.filter(item => {
		return ![
			'univerify',
			'apple',
			// #ifdef H5
			'weixin'
			// #endif
		].includes(item)
	})
	// #endif

	uniStarterConfig.router.login = loginConfig

	// uniStarterConfig挂载到getApp().globalData.config
	setTimeout(() => {
		getApp({
			allowDefault: true
		}).globalData.config = uniStarterConfig;
	}, 1)


	// 初始化appVersion（仅app生效）
	initAppVersion();

	// #ifdef APP-PLUS
	// 实现，路由拦截。当应用无访问摄像头/相册权限，引导跳到设置界面
	interceptorChooseImage()
	// #endif

	const Debug = true;

	//自定义路由拦截
	const {
		"router": {
			needLogin,
			visitor,
			login
		}
	} = uniStarterConfig //需要登录的页面
	
	let list = ["navigateTo", "redirectTo", "reLaunch", "switchTab"];
	list.forEach(item => { //用遍历的方式分别为,uni.navigateTo,uni.redirectTo,uni.reLaunch,uni.switchTab这4个路由方法添加拦截器
		uni.addInterceptor(item, {
			invoke(e) { // 调用前拦截
				uni.$emit('routeChange')
				//获取用户的token
				const token = uni.getStorageSync('uni_id_token'),
					//token是否已失效
					tokenExpired = uni.getStorageSync('uni_id_token_expired') < Date.now(),
					//获取要跳转的页面路径（url去掉"?"和"?"后的参数）
					url = e.url.split('?')[0];
					//获取要前往的页面路径（即url去掉"?"和"?"后的参数）
				const pages = getCurrentPages();
				if(!pages.length){
					return e
				}
				const fromUrl = pages[pages.length - 1].route;
			
				let inLoginPage = fromUrl.split('/')[2] == 'login-page'
				
				// console.log('url', url, token, tokenExpired)
					
				//拦截强制登录页面
				let pass = true
				//pattern
				if (needLogin) {
					pass = needLogin.every((item) => {
						if(typeof(item) == 'object' && item.pattern){
							return !item.pattern.test(url)
						}
						return url != item
					})
					// console.log({pass})
				}
				if (visitor&&!inLoginPage) {
					pass = visitor.some((item) => {
						if(typeof(item) == 'object' && item.pattern){
							return item.pattern.test(url)
						}
						return url == item
					})
					// console.log({pass})
				}
				
				if (!pass && (token == '' || tokenExpired)) {
					store.commit('user/logout')
					uni.showToast({
						title: '请先登录',
						icon: 'none'
					})
					// uni.navigateTo({
					// 	url: "/pages/ucenter/login-page/index/index"
					// })
					uni.$emit('requestLogin')
					return false
				}
				return e
			},
			fail(err) { // 失败回调拦截 
				console.log(err);
				if (Debug) {
					console.log(err);
					uni.showModal({
						content: JSON.stringify(err),
						showCancel: false
					});
				}
			}
		})
	})
	
	// #ifdef APP-PLUS
	// 监听并提示设备网络状态变化
	uni.onNetworkStatusChange(res => {
		console.log(res.isConnected);
		console.log(res.networkType);
		if (res.networkType != 'none') {
			uni.showToast({
				title: '当前网络类型：' + res.networkType,
				icon: 'none',
				duration: 3000
			})
		} else {
			uni.showToast({
				title: '网络类型：' + res.networkType,
				icon: 'none',
				duration: 3000
			})
		}
	});
	// #endif

}
/**
 * // 初始化appVersion
 */
function initAppVersion() {
	// #ifdef APP-PLUS
	let appid = plus.runtime.appid;
	plus.runtime.getProperty(appid, (wgtInfo) => {
		let appVersion = plus.runtime;
		let currentVersion = appVersion.versionCode > wgtInfo.versionCode ? appVersion : wgtInfo;
		getApp({
			allowDefault: true
		}).appVersion = {
			...currentVersion,
			appid,
			hasNew: false
		}
		// 检查更新小红点
		callCheckVersion().then(res => {
			// console.log('检查是否有可以更新的版本', res);
			if (res.result.code > 0) {
				// 有新版本
				getApp({
					allowDefault: true
				}).appVersion.hasNew = true;
			}
		})
	});
	// 检查更新
	// #endif
}
