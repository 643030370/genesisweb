<template>
	<view class="simple-menu">
		<image @click="open = true" class="switch" v-show="!open" src="/static/icon-menu@3x.png"></image>
		<image @click="open = false" class="switch" v-show="open" src="/static/icon-menu-open@3x.png"></image>
		<view v-if="open" class="popup">
			<view @click="itemClick(idx)" class="item" v-for="(item, idx) in menus" :key="idx">{{item.name}}</view>
			<view class="item">
				<lang-select @change="open = false" :simpleMode="true"></lang-select>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		name:"simple-menu",
		data() {
			return {
				open: false
			};
		},
		props: {
			menus: {
				type: Array,
				default: () => {
					return []
				}
			}
		},
		methods: {
			itemClick(idx) {
				this.open = false
				this.$emit('click', idx)
			}
		}
	}
</script>

<style lang="scss" scoped>
	.simple-menu {
		.switch {
			width: 44rpx;
			height: 44rpx;
			position: relative;
			z-index: 99;
		}
		.popup {
			position: fixed;
			top: 0;
			right: 0;
			bottom: 0;
			left: 0;
			opacity: 0.9;
			background: #000000;
			z-index: 98;
			padding-top: 96rpx;
			padding-right: 20rpx;
			
			.item {
				text-align: right;
				font-family: OPPOSans-M;
				font-size: 42rpx;
				color: #FFFFFF;
				letter-spacing: 0;
				font-weight: 500;
				height: 88rpx;
			}
		}
	}
</style>
