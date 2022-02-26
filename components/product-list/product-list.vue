<template>
	<view :class="{'product-list-sm': !$bigScreen, 'product-list-lg': $bigScreen}">
		<view class="header-wrapper">
			<view class="prod-header h-box">
				<text v-if="$bigScreen" class="prod-title">Products</text>
				<text @click="handleTabChange(index)" v-for="(item,index) in tabs" :key="index" class="prod-tab-item"
					:class="{'prod-tab-item-active': tabIdx == index}">{{item.name}}</text>
				<view v-if="$bigScreen" class="flex-extend h-box justify-end">
					<image v-if="tabs[tabIdx].canScrollLeft" @click="scrollLeft" class="nav-item"
						src="/static/icon-Left-highlight@3x.png"></image>
					<image v-else class="nav-item" src="/static/icon-Left@3x.png"></image>
					<image v-if="tabs[tabIdx].canScrollRight" @click="scrollRight" class="nav-item"
						src="/static/icon-Right-highlight@3x.png"></image>
					<image v-else class="nav-item" src="/static/icon-Right@3x.png"></image>
				</view>
			</view>
		</view>
		<view id="scrollViewWrapper">
			<scroll-view v-show="index == tabIdx" v-for="(item,index) in tabs" :key="index" @scroll="onScroll" scroll-with-animation :scroll-left="tabs[tabIdx].scrollLeft" class="scroller" scroll-x
				style="white-space: nowrap;">
				<view class="scroll-content">
					<view v-for="(item, idx) in item.list" :key="idx" class="prod-item">
						<view class="prod-item-img">
							<image :src="item.image" mode="aspectFill"></image>
						</view>
						<view class="prod-item-tape"></view>
						<text class="prod-item-title flex-extend">
							{{item.title}}
						</text>
						<view class="prod-item-text">
							{{item.desc}}
						</view>
						<u-line border-style="dashed"></u-line>
					</view>
				</view>
			</scroll-view>
		</view>
	</view>
</template>

<script>
	export default {
		name: "product-list",
		data() {
			return {
				tabIdx: 0,

				left: 0,
			}
		},
		computed: {
			tabs() {
				return [{
					name: this.$t('page.products.earlyProduct'),
					canScrollLeft: true,
					canScrollRight: true,
					scrollLeft: 0,
					list: [{
						// image: '/static/prods/prod4.jpg',
						image: '/static/prods/prod4.jpeg',
						title: this.$t('page.products.gameCollection'),
						desc: this.$t('page.products.gameCollectionDesc')
					}, {
						// image: '/static/prods/prod5.jpg',
						image: '/static/prods/prod5.jpeg',
						title: this.$t('page.products.dafuweng'),
						desc: this.$t('page.products.dafuwengDesc')
					}]
				}, {
					name: this.$t('page.products.futureDevelopment'),
					canScrollLeft: true,
					canScrollRight: true,
					scrollLeft: 0,
					list: [{
						image: '/static/prods/prod2.png',
						title: this.$t('page.products.NFTTransactionAggregators'),
						desc: this.$t('page.products.NFTTransactionAggregators')
					}, {
						image: '/static/prods/prod1.png',
						title: this.$t('page.products.XRSocial'),
						desc: this.$t('page.products.XRSocial')
					}, {
						image: '/static/prods/prod3.jpg',
						title: this.$t('page.products.VRNativeEngine'),
						desc: this.$t('page.products.VRNativeEngine')
					}]
				}]
			}
		},
		mounted() {
			const query = uni.createSelectorQuery().in(this);
			query.select('#scrollViewWrapper').boundingClientRect(data => {
				console.log('data', data)
			  this.tabs.forEach(item => {
				  item.maxLength = item.list.length * 809 + (item.list.length - 1) * 138 - data.width
				  console.log('maxLength', item.maxLength)
				  item.canScrollLeft = item.maxLength > 0
				  item.canScrollRight = false
			  })
			}).exec();
		},
		methods: {
			onScroll(e) {
				let tab = this.tabs[this.tabIdx]
				tab.scrollLeft = e.detail.scrollLeft
			},
			scrollLeft() {
				let tab = this.tabs[this.tabIdx]
				tab.scrollLeft += 947
				let maxLength = tab.maxLength
				if (tab.scrollLeft >= maxLength) {
					tab.scrollLeft = maxLength
				}
				console.log('left', tab.scrollLeft)
				if (tab.scrollLeft == maxLength) {
					tab.canScrollRight = true
					tab.canScrollLeft = false
				}
			},
			scrollRight() {
				let tab = this.tabs[this.tabIdx]
				tab.scrollLeft -= 947
				if (tab.scrollLeft <= 0) {
					tab.scrollLeft = 0
				}
				console.log('left', tab.scrollLeft)
				if (tab.scrollLeft == 0) {
					tab.canScrollLeft = true
					tab.canScrollRight = false
				}
			},
			handleTabChange(idx) {
				this.tabIdx = idx
			}
		}
	}
</script>

<style lang="scss" scoped>
	.product-list-sm {
		height: 100%;
		background-color: #000000;
		background: url("/static/decorate-wange1@3x.png") 0 0 no-repeat,
			url("/static/decorate-wange2@3x.png") 0 calc(100vh - 200px) no-repeat;
		background-size: 100% 200px, 100% 200px;
		
		.scroller {
			margin-top: 33rpx;
			.scroll-content {
				padding-left: 50rpx;
			}
			.prod-item {
				width: 405rpx;
				height: 368rpx;
				display: inline-flex;
				flex-direction: column;
				word-wrap: break-word;
				vertical-align: top;
				margin-right: 48rpx;
				&-img {
					position: relative;
					width: 100%;
					height: 224rpx;
					image {
						width: 100%;
						height: 100%;
					}
				}
				&-img:hover:after {
					position: absolute;
					left: 0;
					top: 0;
					right: 0;
					bottom: 0;
					content: ' ';
					border: 8rpx solid #19FCAC;
					opacity: 0.3;
				}
				&-img:after {
					
				}
		
				&-tape {
					margin-top: 10rpx;
					width: 100%;
					height: 4.5rpx;
					background-image: linear-gradient(270deg, rgba(0, 0, 0, 0.00) 0%, #19FCAC 99%);
				}
		
				&-title {
					font-family: OPPOSans-H;
					font-size: 18rpx;
					color: #FFFFFF;
					letter-spacing: 0;
					line-height: 1.2;
					font-weight: 800;
					margin-top: 10rpx;
					white-space: normal;
				}
		
				&-text {
					font-family: PingFangSC-Regular;
					font-size: 16rpx;
					color: #B1B1B1;
					letter-spacing: 0;
					line-height: 1.3;
					font-weight: 400;
					margin-top: 4.5rpx;
					white-space: normal;
				}
				
				/deep/ .u-line {
					margin-top: 10rpx !important;
				}
			}
		}
		
		.header-wrapper {
			height: 97rpx;
			padding: 25rpx 0 0 20rpx;
			.prod-header {
				height: 60rpx;
				border-left: 0.5rpx solid rgba($color: #fff, $alpha: 0.3);
				border-top: 0.5rpx solid rgba($color: #fff, $alpha: 0.3);
				padding-left: 31rpx;
			
				.prod-tab-item {
					font-family: OPPOSans-R;
					font-size: 24rpx;
					color: #FFFFFF;
					letter-spacing: 0;
					text-align: right;
					font-weight: 400;
					margin-right: 38rpx;
					padding: 0 12rpx;
					cursor: pointer;
					height: 39rpx;
				}
			
				.prod-tab-item-active {
					background-color: #19FCAC;
					color: #000000;
				}
			
				.nav-item {
					width: 77px;
					height: 15px;
					cursor: pointer;
					margin-left: 10px;
				}
			}
		}
	}

	.product-list-lg {
		padding-top: 23.43rpx;
		
		background: url("/static/decorate-wange1@3x.png") 0 0 no-repeat,
			url("/static/decorate-wange2@3x.png") 0 100% no-repeat;
		background-size: 100% 78.12rpx, 100% 78.12rpx;

		.scroller {
			margin-top: 31.25rpx;

			.prod-item {
				width: 316.01rpx;
				height: 255.46rpx;
				vertical-align: top;
				display: inline-flex;
				flex-direction: column;
				&-img {
					position: relative;
					width: 100%;
					height: 174.6rpx;
					image {
						width: 100%;
						height: 100%;
					}
				}
				&-img:hover:after {
					position: absolute;
					left: 0;
					top: 0;
					right: 0;
					bottom: 0;
					content: ' ';
					border: 6.25rpx solid #19FCAC;
					opacity: 0.3;
				}
				&-img:after {
					
				}

				&-tape {
					margin-top: 3.9rpx;
					width: 316.01rpx;
					height: 3.51rpx;
					background-image: linear-gradient(270deg, rgba(0, 0, 0, 0.00) 0%, #19FCAC 99%);
				}

				&-title {
					font-family: OPPOSans-H;
					font-size: 8.59rpx;
					color: #FFFFFF;
					letter-spacing: 0;
					line-height: 1.2;
					font-weight: 800;
					margin-top: 7.81rpx;
				}

				&-text {
					font-family: PingFangSC-Regular;
					font-size: 6.25rpx;
					color: #B1B1B1;
					letter-spacing: 0;
					line-height: 9.37rpx;
					font-weight: 400;
					margin-top: 11.71rpx;
					white-space: break-spaces;
				}
				
				/deep/ .u-line {
					margin-top: 3.9rpx !important;
				}
			}
			.prod-item:not(:last-child) {
				margin-right: 53.9rpx;
			}
		}
		
		.header-wrapper {
			padding-right: 59.37rpx;
			.prod-header {
				height: 31.25rpx;
				border-left: 0.19rpx solid rgba($color: #fff, $alpha: 0.3);
				border-top: 0.19rpx solid rgba($color: #fff, $alpha: 0.3);
				padding-left: 7.81rpx;
			
				.prod-title {
					font-family: OPPOSans-H;
					font-size: 8.59rpx;
					color: #FFFFFF;
					letter-spacing: 0;
					text-align: right;
					font-weight: 800;
					margin-right: 10.93rpx;
				}
			
				.prod-tab-item {
					font-family: OPPOSans-R;
					font-size: 8.59rpx;
					color: #FFFFFF;
					letter-spacing: 0;
					text-align: right;
					font-weight: 400;
					margin-right: 10.93rpx;
					padding: 0 1.56rpx;
					cursor: pointer;
				}
			
				.prod-tab-item-active {
					border: 0.78rpx solid #19FCAC;
				}
			
				.nav-item {
					width: 30.07rpx;
					height: 5.85rpx;
					cursor: pointer;
					margin-left: 3.9rpx;
				}
			}
		}
	}
</style>
