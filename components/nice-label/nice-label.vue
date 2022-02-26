<template>
	<view class="nice-label" :class="{'nice-label-lg': $bigScreen}" :style="{opacity: highlight ? 1 : 0.5}">
		<view v-if="dot" class="dot"></view>
		<image v-show="num == 1" class="digit" src="../../static/icon-1@3x.png"></image>
		<image v-show="num == 2" class="digit" src="../../static/icon-2@3x.png"></image>
		<image v-show="num == 3" class="digit" src="../../static/icon-3@3x.png"></image>
		<image v-show="num == 4" class="digit" src="../../static/icon-4@3x.png"></image>
		<view class="line"></view>
		<view class="content">
			<view class="tape"></view>
			<view class="text">{{text}}</view>
		</view>
	</view>
</template>

<script>
	export default {
		name:"nice-label",
		data() {
			return {
				
			};
		},
		props: {
			num: {
				type: Number,
				default: 1
			},
			text: {
				type: String,
				default: 'nice-label'
			},
			highlight: {
				type: Boolean,
				default: false
			},
			dot: {
				type: Boolean,
				default: true
			}
		}
	}
</script>

<style lang="scss" scoped>
	.nice-label {
		position: relative;
		flex: 1;
	}
	.nice-label-lg {
		.dot {
			width: 7.03rpx;
			height: 7.03rpx;
			background: #0E885D;
			border-radius: 3.51rpx;
			position: absolute;
			top: 16.4rpx;
		}
		.digit {
			width: 39.84rpx;
			height: 47.26rpx;
			position: absolute;
			left: 10.93rpx;
		}
		.line {
			position: absolute;
			left: 50rpx;
			top: 19.53rpx;
			right: 0;
			height: 0.78rpx;
			background-color: #19FCAC;
		}
		.content {
			padding: 35.15rpx 0 3.9rpx 70.31rpx;
			.tape {
				width: 157.42rpx;
				height: 4.29rpx;
				background-image: linear-gradient(270deg, rgba(0,0,0,0.00) 0%, #19FCAC 99%);
			}
			.text {
				margin-top: 3.9rpx;
				font-family: PingFangSC-Regular;
				font-size: 6.25rpx;
				color: #FFFFFF;
				letter-spacing: 0;
				line-height: 9.37rpx;
				font-weight: 400;
				word-wrap: break-word;
			}
		}
	}
</style>
