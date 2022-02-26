import lang_en_US from "@/lang/en_US.js"
import lang_zh_CN from "@/lang/zh_CN.js"
import lang_ja_JP from "@/lang/ja_JP.js"
import lang_ko_KR from "@/lang/ko_KR.js"
import VueI18n from 'vue-i18n'
import Vue from 'vue'
Vue.use(VueI18n)
let sysLang = navigator.language
var locale = uni.getStorageSync('lang')
if (!locale) {
	locale = "en_US"
}
uni.setStorageSync('lang', locale)
const i18n = new VueI18n({
	locale: locale, // 设置地区
	// locale: 'en_US', // 设置地区
	messages: {
		en_US: lang_en_US,
		zh_CN: lang_zh_CN,
		ja_JP: lang_ja_JP,
		ko_KR: lang_ko_KR
	}, // 设置地区信息
})
export default i18n
