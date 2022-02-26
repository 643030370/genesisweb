<template>
	<view id="page1" class="page page1 pos-real">
		<!-- <video src="/static/testdv.mp4" :autoplay="true" :muted="true" :controls="false" :loop="true" object-fit="cover"></video>
		 -->
		<video id="myVideo" src="https://d2n9tyap8kl1by.cloudfront.net/ad.mp4" objectFit="fill" :autoplay="true" :loop="true"></video>
		<!-- <view class="flex-v justify-center content">
			<image class="img-title" :src="$t('image.title')" mode="widthFix"></image>
			<text class="text-subtitle">
				{{$t('page.home.subTitle')}}
			</text>
		</view> -->
		<!-- <image @click="play" v-if="btnPlayVisible" class="btn-play" src="/static/icon-play.png"></image> -->
	</view>
</template>

<script>
</script>

<style  lang="scss" scoped>
	.content-sm {
		.page1 {
			height: 500rpx;
			position: relative;
			video {
				width: 100%;
				height: 100%;
			}
			.btn-play {
				width: 100rpx;
				height: 100rpx;
				position: absolute;
				left: 50%;
				top: 50%;
				transform: translate(-50%, -50%);
				z-index: 99;
			}
			.content {
				position: absolute;
				left: 0;
				top: 50%;
				transform: translateY(-50%);
				right: 0;
				z-index: 99;
				padding-left: 62rpx;
				.img-title {
					width: 663rpx;
				}
				.text-subtitle {
					margin-top: 30rpx;
					margin-left: 20rpx;
				}
			}
		}
	}
	
	.content-lg {
		width: 100%;
		overflow-x: auto;
		margin: 0 auto;
		
		.page1 {
			height: 402.73rpx;
			.text-subtitle {
				margin-top: 15.62rpx;
				font-family: PingFangSC-Regular;
				font-size: 7.81rpx;
				color: #B1B1B1;
				letter-spacing: 0;
				line-height: 1;
				font-weight: 400;
			}
			video {
				width: 750rpx;
				height: 402.73rpx;
			}
			.btn-play {
				width: 50rpx;
				height: 50rpx;
				position: absolute;
				left: 50%;
				top: 50%;
				transform: translate(-50%, -50%);
				z-index: 99;
				// opacity: 0.9;
			}
			.content {
				position: absolute;
				left: 0;
				// top: 0;
				top: 50%;
				padding-left: 59.37rpx;
				transform: translateY(-50%);
				right: 0;
				// bottom: 0;
				z-index: 99;
				.img-title {
					width: 300.39rpx;
				}
				.text-subtitle {
					margin-top: 33.98rpx;
					margin-left: 10.93rpx;
				}
			}
		}
	
	}
	
		
</style>
