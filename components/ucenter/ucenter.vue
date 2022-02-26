<template>
	<simple-container>
		<view class="mg-t-lg flex-h">
			<match-media :min-width="960">
				<view class="card v-box mg-r-md" style="width: 220px;">
					<view @click="menuClick(idx)" v-for="(item,idx) in tabs" :key="idx" class="menu-item"
						:class="{'menu-item-active': tabIdx == idx}">
						{{item.name}}
					</view>
				</view>
			</match-media>
			<view class="card flex-extend main-content" :class="{'card-lg': $bigScreen}">
				<slot></slot>
			</view>
		</view>
	</simple-container>
</template>

<script>
	import {
		mapState
	} from "vuex"
	
	const commonMenus = [{
					name: '个人信息',
					url: '/pages/ucenter/my-info'
				}, {
					name: '我的订单',
					url: '/pages/ucenter/my-orders'
				}]
	
	export default {
		name: "ucenter",
		data() {
			return {
				
			};
		},
		computed: {
			...mapState("user", ["info"]),
			tabs() {
				if (this.info.agent) {
					return commonMenus.concat({
					name: '我的邀请',
					url: '/pages/ucenter/my-team'
				},{
						name: '优惠码',
						url: '/pages/ucenter/my-discount-code'
					})
				}
				return commonMenus
			}
		},
		props: {
			tabIdx: {
				type: Number,
				default: 0
			}
		},
		methods: {
			menuClick(idx) {
				let url = this.tabs[idx].url
				uni.reLaunch({
					url
				})
			}
		}
	}
</script>

<style scoped lang="scss">
	.main-content {
		min-height: calc(100vh - 354rpx - 100rpx - 200rpx);
	}

	.card {
		background: #F3FBFF;
		color: #000000;
		padding: 30rpx 40rpx;
	}

	.card-lg {
		padding: 30px 40px;
	}

	.menu-item {
		font-size: 24px;
		line-height: 60px;
		position: relative;
	}

	.menu-item-active {
		font-weight: 600;
	}

	.menu-item-active::after {
		position: absolute;
		content: ' ';
		left: 0;
		right: 0;
		bottom: 0;
		height: 4px;
		background: #2B83B9;
	}
</style>
