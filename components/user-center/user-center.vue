<template>
	<simple-container>
		<view class="mg-t-lg flex-h">
			<match-media :min-width="960">
				<view class="card v-box mg-r-md">
					<view @click="menuClick(idx)" v-for="(item,idx) in menus" :key="idx" class="menu-item" :class="{'menu-item-active': item.active}">
						{{item.name}}
					</view>
				</view>
			</match-media>
			<view class="card flex-extend main-content">
				
			</view>
		</view>
	</simple-container>
</template>

<script>
	export default {
		name:"user-center",
		data() {
			return {
				menus: [{
					name: '个人信息',
					path: '/pages/ucenter/userinfo/userinfo',
					active: true
				}, {
					name: '我的订单',
					path: '/pages/ucenter/my-orders',
					active: false
				}, {
					name: '我的邀请',
					path: '/pages/ucenter/my-team',
					active: false
				}, {
					name: '邀请码',
					path: '/pages/ucenter/invitation-code',
					active: false
				}]
			};
		},
		methods: {
			menuClick(idx) {
				let item = this.menus[idx]
				uni.redirectTo({
					url: item.path
				})
				item.active = true
			}
		}
	}
</script>

<style scoped lang="scss">
	.main-content {
		min-height: calc(100vh - 354rpx - 100rpx - 200rpx);
	}
	.card {
		width: 220px;
		background: #F3FBFF;
		color: #000000;
		padding: 40px 0;
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
