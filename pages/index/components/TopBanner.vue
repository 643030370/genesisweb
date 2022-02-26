<template>
	<view id="page9" class="page9">
		<image class="title" src="/static/Home-TopBanner-Title.png"></image>
		<view class="desc">
			{{$t('page.topBanner.topBannerDesc')}}
		</view>
	</view>
</template>

<script>
</script>

<style lang="scss" scoped>
	.content-sm {
		.page9 {
			background: url(/static/Home-Top-Banner.png) 0 0 no-repeat;
			background-size: cover;
			background-position: center;
			height: 681rpx;
			
			.title {
				// width: 1094px;
				width: 566rpx;
				// height: 271px;
				height: 140rpx;
				margin-top: 252rpx;
				margin-left: 54rpx;
			}
			.desc {
				width: 651rpx;
				height: 64rpx;
				font-family: PingFangSC-Regular;
				font-size: 20rpx;
				color: #B1B1B1;
				letter-spacing: 0;
				line-height: 30rpx;
				font-weight: 400;
				margin-top: 15rpx;
				margin-left: 74rpx;
			}
		}
	}
	.content-lg {
		.page9 {
			background: url(/static/Home-Top-Banner.png) 0 0 no-repeat;
			background-size: cover;
			background-position: center;
			height: 462rpx;
			
			.title {
				// width: 1094px;
				width: 491rpx;
				// height: 271px;
				height: 122rpx;
				margin-top: 140rpx;
				margin-left: 99rpx;
			}
			.desc {
				width: 317rpx;
				height: 29rpx;
				font-family: PingFangSC-Regular;
				font-size: 9rpx;
				color: #B1B1B1;
				letter-spacing: 0;
				line-height: 13rpx;
				font-weight: 400;
				margin-top: 37rpx;
				margin-left: 115rpx;
			}
		}
		
	}
</style>
