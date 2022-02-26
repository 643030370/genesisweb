<template>
	<view class="page10">
		<view class="title-row">
			<view class="title">
				<image class="img-left" src="/static/kejikuang-zuo@2x.png"></image>
				<view class="h1">{{$t('page.topBanner.whatIsH1')}}</view>
				<view class="h2">{{$t('page.topBanner.whatIsH2')}}</view>
				<image class="img-right" src="/static/kejikuang-you@2x.png"></image>
				<image class="img-center" src="/static/kejikuang-zhong@2x.png"></image>
			</view>
		</view>
		<view class="desc-row">
			<view class="desc">
				{{$t('page.topBanner.whatIsDesc1')}}
				<br/><br/>
				{{$t('page.topBanner.whatIsDesc2')}}
			</view>
		</view>
		<view class="icon-row">
			<image class="icon" src="/static/icon-anniu@2x.png"></image>
		</view>
	</view>
</template>

<script>
</script>

<style lang="scss" scoped>
.content-sm {
	.page10 {
		width: 100%;
		.title-row {
			width: 100%;
			position: relative;
			padding: 40rpx 15rpx;
			box-sizing: border-box;
			
			.title {
				width: 314rpx;
				height: 129rpx;
				position: relative;
				margin: auto;
				font-family: HarmonyOS_Sans_Black;
				font-size: 64rpx;
				letter-spacing: 0;
				text-align: center;
				line-height: 64rpx;
				font-weight: 900;
				.h1 {
					color: #FFFFFF;
				}
				.h2 {
					color: #19FCAC;
				}
				
				.img-left {
					position: absolute;
					top: 0;
					left: -191rpx;
					bottom: 0;
					margin: auto;
					width: 191rpx;
					height: 91rpx;
					object-fit: contain;
				}
				.img-right {
					position: absolute;
					top: 0;
					right: -191rpx;
					bottom: 0;
					margin: auto;
					width: 191rpx;
					height: 91rpx;
					object-fit: contain;
				}
				.img-center {
					position: absolute;
					bottom: -12rpx;
					left: -34rpx;
					margin-top: 9rpx;
					width: 381rpx;
					height: 12rpx;
					object-fit: contain;
				}
			}
			
			
		}
		.desc-row {
			width: 100%;
			margin-top: 40rpx;
			.desc {
				box-sizing: border-box;
				padding: 5rpx;
				width: 660rpx;
				// height: 330rpx;
				font-family: PingFangSC-Regular;
				font-size: 16rpx;
				color: #707070;
				letter-spacing: 0;
				text-align: center;
				line-height: 24rpx;
				font-weight: 400;
				margin: auto;
			}
		}
		.icon-row {
			width: 100%;
			.icon {
				width: 41rpx;
				height: 88rpx;
				margin: 20rpx 50%;
			}
		}
	}
}
.content-lg {
	.page10 {
		width: 100%;
		
		.title-row {
			width: 100%;
			position: relative;
			padding: 58rpx 7rpx;
			box-sizing: border-box;
			
			.title {
				width: 343rpx;
				height: 141rpx;
				position: relative;
				margin: auto;
				font-family: HarmonyOS_Sans_Black;
				font-size: 70rpx;
				letter-spacing: 0;
				text-align: center;
				line-height: 70rpx;
				font-weight: 900;
				.h1 {
					color: #FFFFFF;
				}
				.h2 {
					color: #19FCAC;
				}
				
				.img-left {
					position: absolute;
					top: 0;
					left: -191rpx;
					bottom: 0;
					margin: auto;
					width: 191rpx;
					height: 91rpx;
					object-fit: contain;
				}
				.img-right {
					position: absolute;
					top: 0;
					right: -191rpx;
					bottom: 0;
					margin: auto;
					width: 191rpx;
					height: 91rpx;
					object-fit: contain;
				}
				.img-center {
					position: absolute;
					bottom: -12rpx;
					left: -19rpx;
					margin-top: 9rpx;
					width: 381rpx;
					height: 12rpx;
					object-fit: contain;
				}
			}
			
			
		}
		.desc-row {
			width: 100%;
			margin-top: 20rpx;
			.desc {
				box-sizing: border-box;
				padding: 5rpx;
				width: 726rpx;
				min-height: 148rpx;
				font-family: PingFangSC-Regular;
				font-size: 12.5rpx;
				color: #707070;
				letter-spacing: 0;
				text-align: center;
				line-height: 16rpx;
				font-weight: 400;
				margin: auto;
			}
		}
		.icon-row {
			width: 100%;
			.icon {
				width: 18rpx;
				height: 39rpx;
				margin: 20rpx 50%;
			}
		}
	}
	
}
</style>

