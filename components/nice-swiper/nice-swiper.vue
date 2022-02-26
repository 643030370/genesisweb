<template>
	<view :class="{'nice-swiper-sm': !$bigScreen,'nice-swiper-lg': $bigScreen}">
		<view class="header">
			<image class="box" src="/static/icon-qianzhui@3x.png"></image>
			<text>{{$t('page.developers.title')}}</text>
		</view>
		<view>
			<carousel-3d @after-slide-change="onAfterSlideChange" @before-slide-change="onBeforeSlideChange"
				@last-slide="onLastSlide"
				:perspective="0" :space="space" :width="width" :height="height" :border="0">
				<slide v-for="(item, i) in list" :index="i" :key="i">
					<template slot-scope="{ index, isCurrent, leftIndex, rightIndex }">
						<view class="item" :class="{ current: isCurrent, 'onLeft-1': (leftIndex >= 0), 'onLeft-2': (leftIndex >= 1), 'onRight-1': (rightIndex >= 0), 'onRight-2': (rightIndex >= 1) }">
							<image v-if="isCurrent" class="line" src="/static/avatar-line@3x.png"></image>
							<image class="avatar" :data-index="index" :src="item.image">
						</view>
					</template>
				</slide>
			</carousel-3d>
		</view>
		<view v-if="currItem.homePage" class="link-home h-box justify-center">
			<image class="linkedin-logo" src="/static/linkedin.png"></image>
			<view>
				<u-link color="#19FCAC" :href="currItem.homePage" :text="currItem.homePage"></u-link>
			</view>
		</view>
		<view class="title">
			{{currItem.title || ''}}—{{currItem.post || ''}}
		</view>
		<scroll-view class="desc" scroll-y>
			<view>
				<text>{{currItem.desc || ''}}</text>
			</view>
		</scroll-view>
	</view>
</template>

<script>
	export default {
		name: "nice-swiper",
		data() {
			return {
				currItem: {
					title: '',
					desc: ''
				},
				width: 0,
				height: 0,
				space: 0
			};
		},
		props: {
			list: {
				type: Array,
				default: () => {
					return []
				}
			}
		},
		watch: {
			list(newVal) {
				if (this.list && this.list.length) {
					this.currItem = this.list[0]
				}
			}
		},
		created() {
			if (this.list && this.list.length) {
				this.currItem = this.list[0]
			}
		},
		mounted() {
			if (this.$bigScreen) {
				this.width = uni.upx2px(167.96)
				this.height = this.width
			} else {
				this.width = this.height = 120
			}
			this.space = this.$bigScreen ? uni.upx2px(175.78) : 110
		},
		methods: {
			upx2px(v) {
				uni.upx2px(v)
			},
			onAfterSlideChange(index) {
				console.log('@onAfterSlideChange Callback Triggered', 'Slide Index ' + index)
				this.currItem = this.list[index]
			},
			onBeforeSlideChange(index) {
				console.log('@onBeforeSlideChange Callback Triggered', 'Slide Index ' + index)
			},
			onLastSlide(index) {
				console.log('@onLastSlide Callback Triggered', 'Slide Index ' + index)
			}
		}
	}
</script>

<style lang="scss" scoped>
	.nice-swiper-sm {
		background: url(/static/frame.png) 0 0 no-repeat, url(/static/box1@3x.png) 50% 57% no-repeat;
		background-size: 100% 100%, 100px 100px;
		position: relative;
		height: 452rpx;
		padding: 10rpx 90rpx 0 90rpx;
		/deep/ .carousel-3d-container {
			margin: 0 !important;
			position: relative;
			top: -20rpx;
		}
		
		.item {
			width: 100%;
			height: 100%;
			display: flex;
			align-items: center;
			justify-content: center;
			position: relative;
			.avatar {
				width: 80px;
				height: 80px;
				position: relative;
			}
			.avatar:after {
				content: ' ';
				position: absolute;
				left: 0;
				right: 0;
				top: 0;
				bottom: 0;
				border-radius: 100%;
				border: 4rpx solid #19FCAC;
			}
			.line {
				position: absolute;
				width: 100px;
				height: 100px;
			}
		}
		
		.current {
			width: 120px;
			height: 120px;
		}
		
		.onLeft-1 {
			image {
				transform: scale(0.8, 0.8);
				transform-origin: 50% 50%;
				opacity: 0.9;
			}
		}
		
		.onLeft-2 {
			image {
				transform: scale(0.7, 0.7) !important;
				transform-origin: 50% 50%;
				opacity: 0.7;
			}
		}
		
		.onRight-2 {
			image {
				transform: scale(0.7, 0.7) !important;
				transform-origin: 50% 50%;
				opacity: 0.7;
			}
		}
		
		.onRight-1 {
			image {
				transform: scale(0.8, 0.8);
				transform-origin: 50% 50%;
				opacity: 0.9;
			}
		}
		
		.header {
			display: flex;
			flex-direction: row;
			align-items: center;
			// margin-bottom: 80rpx;
		
			image {
				width: 60rpx;
				height: 60rpx;
			}
		
			text {
				font-family: HarmonyOS_Sans_Black;
				font-size: 24rpx;
				color: #19FCAC;
				letter-spacing: 0;
				text-align: right;
				line-height: 1;
				font-weight: 900;
			}
		}
		
		.title {
			position: absolute;
			left: 50%;
			transform: translateX(-50%);
			top: 278rpx;
			// font-family: PixelFont;
			font-size: 26rpx;
			color: #19FCAC;
			letter-spacing: 0;
			text-align: right;
			font-weight: 400;
		}
		
		.desc {
			position: absolute;
			left: 50%;
			transform: translateX(-50%);
			top: 330rpx;
			width: 411rpx;
			// text-align: center;
			height: 81rpx;
			// overflow: auto;
			// display: flex;
			// flex-direction: column;
			// justify-content: center;
		
			font-family: HarmonyOS_Sans;
			font-size: 16rpx;
			color: #19FCAC;
			letter-spacing: 0;
			line-height: 1.3;
			font-weight: 400;
		}
		
		.link-home {
			position: relative;
			top: -40rpx;
		}
		.linkedin-logo {
			width: 30rpx;
			height: 30rpx;
			margin-right: 8rpx;
		}
		/deep/ .u-link {
			font-size: 16rpx !important;
		}
	}
	
	/deep/ .carousel-3d-slide {
		background-color: transparent !important;
	}

	.nice-swiper-lg {
		background: url(/static/frame.png) 0 0 no-repeat, url(/static/box1@3x.png) 50% 55% no-repeat;
		background-size: 100% 100%, 196.48rpx 159.76rpx;
		position: relative;
		height: 451.56rpx;
		padding: 15.62rpx 101.56rpx;
		
		/deep/ .carousel-3d-container {
			margin: 0 !important;
			position: relative;
			top: -15.62rpx;
		}
		
		.item {
			width: 100%;
			height: 100%;
			position: relative;
			display: flex;
			align-items: center;
			justify-content: center;
			.avatar {
				width: 136.71rpx;
				height: 136.71rpx;
				position: relative;
			}
			.avatar:after {
				content: ' ';
				position: absolute;
				left: 0;
				right: 0;
				top: 0;
				bottom: 0;
				border-radius: 100%;
				border: 1.56rpx solid #19FCAC;
			}
			.line {
				position: absolute;
				width: 167.96rpx;
				height: 167.96rpx;
			}
		}

		.current {
			width: 167.96rpx;
			height: 167.96rpx;
		}
		
		.onLeft-1 {
			image {
				transform: scale(0.8, 0.8);
				transform-origin: 50% 50%;
				opacity: 0.9;
			}
		}
		
		.onLeft-2 {
			image {
				transform: scale(0.7, 0.7) !important;
				transform-origin: 50% 50%;
				opacity: 0.7;
			}
		}
		
		.onRight-2 {
			image {
				transform: scale(0.7, 0.7) !important;
				transform-origin: 50% 50%;
				opacity: 0.7;
			}
		}
		
		.onRight-1 {
			image {
				transform: scale(0.8, 0.8);
				transform-origin: 50% 50%;
				opacity: 0.9;
			}
		}

		.header {
			display: flex;
			flex-direction: row;
			align-items: center;
			margin-bottom: 31.25rpx;

			image {
				width: 31.25rpx;
				height: 31.25rpx;
			}

			text {
				font-family: HarmonyOS_Sans_Black;
				font-size: 21.48rpx;
				color: #19FCAC;
				letter-spacing: 0;
				text-align: right;
				line-height: 42.96rpx;
				font-weight: 900;
			}
		}

		.title {
			position: absolute;
			left: 50%;
			transform: translateX(-50%);
			top: 292rpx;
			// font-family: PixelFont;
			font-size: 26.17rpx;
			color: #19FCAC;
			letter-spacing: 0;
			text-align: right;
			font-weight: 400;
		}

		.desc {
			position: absolute;
			left: 50%;
			transform: translateX(-50%);
			top: 360rpx;
			width: 400rpx;
			// text-align: center;
			height: 78.12rpx;
			display: flex;
			overflow: auto;
			flex-direction: column;
			justify-content: center;

			font-family: HarmonyOS_Sans;
			font-size: 9.37rpx;
			color: #19FCAC;
			letter-spacing: 0;
			line-height: 1.3;
			font-weight: 400;
		}
		
		.link-home {
		}
		.linkedin-logo {
			width: 20rpx;
			height: 20rpx;
			margin-right: 8rpx;
		}
		/deep/ .u-link {
			font-size: 9.37rpx !important;
		}
	}
</style>
