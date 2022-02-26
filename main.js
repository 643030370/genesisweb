import App from './App'
import store from './store'
import baseUrl from "@/common/baseUrl.js"
import {
	copy,
	browser
} from "@/common/util.js"
import h5Copy from '@/js_sdk/junyi-h5-copy/junyi-h5-copy.js'

import lottie from 'vue-lottie';
Vue.component('lottie', lottie)

import echarts from 'echarts'
Vue.prototype.$echarts = echarts

import Carousel3d from 'vue-carousel-3d';
Vue.use(Carousel3d);

import Web3 from 'web3';
Vue.prototype.Web3 = Web3;


// #ifndef VUE3
import Vue from 'vue'

import i18n from "@/lang/index.js"

import uView from "uview-ui";
Vue.use(uView);
Vue.config.productionTip = false
Vue.prototype.$store = store
App.mpType = 'app'
const app = new Vue({
	i18n,
	store,
	...App
})
app.$mount()
// #endif

Vue.prototype.$copy = ({text}) => {
	// #ifdef H5
	const result = h5Copy(text)
	if (!result) {
		uni.showToast({
			title: '浏览器不支持复制，请手动复制',
			icon: 'none',
			duration: 1500
		})
	} else {
		uni.showToast({
			title: '复制成功',
			icon: 'none'
		})
	}
	// #endif 
	// #ifndef H5
	uni.setClipboardData({
		data: text
	})
	// #endif
}


Vue.prototype.$browser = browser

Vue.prototype.$showError = (msg) => {
	uni.showToast({
		title: msg,
		duration: 2000,
		icon: "none"
	})
}


Vue.prototype.$toast = (msg) => {
	uni.showToast({
		title: msg,
		duration: 1500
	})
}

let sysInfo = uni.getSystemInfoSync()
Vue.prototype.$bigScreen = sysInfo.windowWidth > 960

Vue.prototype.$getImageUrl = (path) => {
	return `${baseUrl.apiBaseUrl}/sys/common/static/${path}`
}

Vue.prototype.$aliPayH5Url = (orderId) => {
	return `${baseUrl.apiBaseUrl}/designerinn/order/aliPayH5?orderId=${orderId}`
}

Vue.prototype.$aliPayPcUrl = (orderId) => {
	let token = uni.getStorageSync("uni_id_token")
	return `${baseUrl.apiBaseUrl}/designerinn/order/gotoAliPayPage?orderId=${orderId}&token=${token}`
}

Vue.prototype.$wxPayH5Url = (orderId) => {
	return `${baseUrl.apiBaseUrl}/designerinn/order/wxPayH5?orderId=${orderId}`
}

// #ifdef VUE3
import {
	createSSRApp
} from 'vue'

export function createApp() {
	const app = createSSRApp(App)
	app.use(store)
	return {
		app
	}
}
// #endif
