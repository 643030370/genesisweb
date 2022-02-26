import baseUrl from "./baseUrl.js"
import store from '@/store'

var hasNavLogin = false
export function request(options) {
	// console.log("request option", options);
	var showLoading = true;
	if (options.showLoading !== undefined) {
		showLoading = options.showLoading;
	}
	if (showLoading) {
		uni.showLoading({
			mask: true
		});
	}
	const token = uni.getStorageSync('uni_id_token')
	const baseConfig = {};
	return new Promise((resolve, reject) => {
		options.url = baseUrl.apiBaseUrl + options.url
		if (!options.data) {
			options.data = {};
		}
		options.header = {
			'X-Access-Token': token
		}
		options.success = res => {
			// console.log('res', res)
			if (res.statusCode == 200) {
				// 单独处理错误信息
				if (options.errHandle) {
					return resolve(res.data);
				}
				if (res.data.code == 200) {
					hasNavLogin = false
					// 弹出成功请求
					if (options.succNotice) {
						uni.showToast({
							icon: 'none',
							title: res.data.msg || '请求成功!'
						});
					}
					return resolve(res.data.result);
				}
				uni.showToast({
					title: res.data.message || '服务器累了，请稍后重试',
					icon: 'error'
				})
				reject(res.data.result);
				return;
			}
			if (res.statusCode == 401) {
				store.commit('user/logout')
				uni.$emit('requestLogin')
				reject(res.data)
				return
			}
			// 网络状态错误的情况
			uni.showToast({
				icon: 'none',
				duration: 3000,
				title: res.statusText || '服务器有些累了，请稍后重试！'
			});
			reject(res)
		}
		options.fail = err => {
			reject(err);
		}
		options.complete = () => {
			// console.log('request completed')
			if (showLoading) {
				uni.hideLoading()
			}
		}
		return uni.request(Object.assign({}, baseConfig, options))
	})
};

export function download(options) {
	const token = uni.getStorageSync('token')
	const baseConfig = {  };
	return new Promise((resolve, reject) => {
		if (!options.url) {
			reject(I18n.t('global.reqURL'))
		};
		if (!token && APIs_NOT_AUTH.indexOf(options.url) == -1) {
			setTimeout(()=>{
				uni.navigateTo({
					url: '/pages/login/login'
				});
			}, 500)
			reject(I18n.t('global.notLogin'))
			return
		}
		if (options.baseUrl) {
			options.url = options.baseUrl + options.url
		} else {
			options.url = BASE_URL + options.url
		}
		options.success = res => {
			// console.log(`response: ${JSON.stringify(res)}`);
			uni.hideLoading();
			if (res.statusCode >= 200 && res.statusCode < 300) {
				resolve(res.tempFilePath);
				return;
			} else if (res.statusCode == 401) {
				uni.showToast({
					icon: 'none',
					title: I18n.t('global.overdue')
				});
				setTimeout(function() {
					uni.navigateTo({
						url: '/pages/login/login'
					});
				}, 3000)
				reject(I18n.t('global.overdue'))
				return
			}
			// 网络状态错误的情况
			uni.showToast({
				icon: 'none',
				duration: 3000,
				title: res.statusText || I18n.t('global.retry')
			});
			reject(res.statusText || I18n.t('global.retry'));
		}
		options.fail = err => {
			// 关闭loading
			// console.log(`request error.${JSON.stringify(err)}`);
			uni.showToast({
				icon: 'none',
				duration: 5000,
				title: I18n.t('global.timeout')
			});
			reject(err.errMsg);
		}
		options.complete = () => {
			console.log('request completed')
		}
		baseConfig.header = {
			'content-type': options.contentType ? options.contentType : 'application/json',
			'client_id': 'app',
			'client_secret': 'app',
			'Authorization': 'bearer ' + token
		}
		let showLoading = true;
		if (options.showLoading !== undefined) {
			showLoading = options.showLoading;
		}
		if (showLoading && requestCount == 0) {
			uni.showLoading({
				title: options.loadingText || I18n.t('global.loading'),
				mask: true
			});
		}
		// console.log(`request: ${JSON.stringify(options)}`);
		return uni.downloadFile(Object.assign({}, baseConfig, options))
	})
}