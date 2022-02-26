<template>
	<view class="" :class="{'nice-box-sm': !$bigScreen, 'nice-box-lg': $bigScreen}">
		<image v-show="status == 0" :src="$bigScreen ? '/static/BlueTechnologyBOX1@3x.png' : '/static/nice-box/box-1@3x.png'"></image>
		<image v-show="status == 1" :src="$bigScreen ? '/static/BlueTechnologyBOX2@3x.png' : '/static/nice-box/box-2@3x.png'"></image>
		<image v-show="status == 2" :src="$bigScreen ? '/static/BlueTechnologyBOX3@3x.png' : '/static/nice-box/box-3@3x.png'"></image>
		<image v-show="status == 3" :src="$bigScreen ? '/static/BlueTechnologyBOX4@3x.png' : '/static/nice-box/box-4@3x.png'"></image>
		<view v-if="!$bigScreen" class="btn-wrapper">
			<image @click="changeStatus(0)" class="btn btn1" :src="status == 0 ? '/static/nice-box/1-active@3x.png' : '/static/nice-box/1@3x.png'"></image>
			<image @click="changeStatus(1)" class="btn btn2" :src="status == 1 ? '/static/nice-box/2-active@3x.png' : '/static/nice-box/2@3x.png'"></image>
			<image @click="changeStatus(2)" class="btn btn3" :src="status == 2 ? '/static/nice-box/3-active@3x.png' : '/static/nice-box/3@3x.png'"></image>
			<image @click="changeStatus(3)" class="btn btn4" :src="status == 3 ? '/static/nice-box/4-active@3x.png' : '/static/nice-box/4@3x.png'"></image>
		</view>
	</view>
</template>

<script>
	export default {
		name:"nice-box",
		data() {
			return {
				
			};
		},
		props: {
			status: {
				type: Number,
				default: 0
			}
		},
		methods: {
			changeStatus(status) {
				if (this.status == status) {
					return
				}
				this.$emit('change', status)
			}
		}
	}
</script>

<style lang="scss" scoped>
	.nice-box-sm {
		height: 522rpx;
		width: 373rpx;
		position: relative;
		image {
			width: 100%;
			height: 100%;
		}
		.btn-wrapper {
			.btn {
				position: absolute;
				width: 121rpx;
				height: 34rpx;
			}
			.btn1 {
				top: 3rpx;
				left: 202rpx;
			}
			.btn2 {
				top: 190rpx;
				left: 390rpx;
			}
			.btn3 {
				top: 290rpx;
				left: 128rpx;
			}
			.btn4 {
				top: 200rpx;
				left: -100rpx;
			}
		}
	}
	.nice-box-lg {
		position: relative;
		height: 288.28rpx;
		width: 248.82rpx;
		image {
			width: 100%;
			height: 100%;
			position: absolute;
		}
	}
</style>
