<template>
	<view v-if="!simpleMode" class="lang-select">
		<image @click="visible = true" :src="list[idx].image"></image>
		<view @click="visible = false" v-if="visible" class="popup-mask"></view>
		<view v-if="visible" class="popup">
			<view @click="switchLocale(idx)" v-for="(item, idx) in list" :key="idx" class="img-flag">
				<image :src="item.image"></image>
			</view>
		</view>
	</view>
	<view v-else class="lang-select-simple">
		<view @click="pickerVisible = true">{{this.list[idx].title}}</view>
		<chunLei-popups v-model="pickerVisible" :popData="list" @tapPopup="switchLocale" :x="344" :y="350" placement="top-end">
			</chunLei-popups>
	</view>
</template>

<script>
	export default {
		name:"lang-select",
		data() {
			return {
				idx: 0,
				
				visible: false,
				
				pickerVisible: false
			};
		},
		props: {
			simpleMode: {
				type: Boolean,
				default: false
			}
		},
		computed: {
			list() {
				return [{
					locale: 'en_US',
					image: '/static/icon-guoqi@3x.png',
					title: this.$t('locale.en_US')
				}, {
					locale: 'ko_KR',
					image: '/static/ko_KR.png',
					title: this.$t('locale.ko_KR')
				}, {
					locale: 'ja_JP',
					image: '/static/ja_JP.png',
					title: this.$t('locale.ja_JP')
				}, {
					locale: 'zh_CN',
					image: '/static/zh_CN.png',
					title: this.$t('locale.zh_CN')
				}]
			}
		},
		mounted() {
			for (var i = 0; i < this.list.length; i++) {
				let item = this.list[i]
				if (this.$root.$i18n.locale == item.locale) {
					this.idx = i
					break
				}
			}
		},
		methods: {
			switchLocale(idx) {
				this.idx = idx
				this.$root.$i18n.locale = this.list[idx].locale
				uni.setStorageSync('lang', this.list[idx].locale)
				this.visible = false
				this.$emit('change', this.list[idx].locale)
			}
		}
	}
</script>

<style lang="scss" scoped>
	.lang-select {
		width: 25rpx;
		height: 16.79rpx;
		image {
			width: 100%;
			height: 100%;
			vertical-align: top;
		}
		position: relative;
		&-simple {
			display: flex;
			justify-content: flex-end;
			position: relative;
		}
	}
	/deep/ .uni-combox__selector-item {
		color: #000000;
	}
	.popup-mask {
		position: fixed;
		left: 0;
		top: 0;
		right: 0;
		bottom: 0;
		background-color: #000000;
		opacity: 0.1;
	}
	.popup {
		position: absolute;
		top: 16.79rpx;
		left: 0;
		background-color: #FFFFFF;
		padding: 3.9rpx;
		.img-flag {
			width: 25rpx;
			height: 16.79rpx;
			image {
				width: 100%;
				height: 100%;
			}
		}
		.img-flag:not(:last-child) {
			margin-bottom: 3.9rpx;
		}
	}
</style>
