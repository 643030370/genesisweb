<template>
	<view class="layout" :style="{'padding-bottom': botPad + 'px'}">
		<slot></slot>
		<view v-show="footerVisible" class="layout-footer" :style="{'padding-bottom': footerBotPad + 'px', 'z-index': zIndex, 'background-color': footerBgColor}">
			<view :style="{height: footerHeight + 'rpx'}">
				<slot name="footer"></slot>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
			};
		},
		props: {
			footerVisible: {
				type: Boolean,
				default: false
			},
			footerHeight: {
				type: Number,
				default: 120
			},
			footerBgColor: {
				type: String,
				default: '#fff'
			},
			nativeTabBar: {
				type: Boolean,
				default: false
			},
			customBotPad: {
				type: Number,
				default: 0
			},
			zIndex: {
				type: Number,
				default: 99
			}
		},
		created() {
			
		},
		computed: {
			botPad() {
				let sysInfo = uni.getSystemInfoSync()
				if (!sysInfo) {
					return 0
				}
				if (this.footerVisible) {
					return uni.upx2px(this.footerHeight) + sysInfo.safeAreaInsets.bottom
				} else {
					return sysInfo.safeAreaInsets.bottom
				}
			},
			footerBotPad() {
				let sysInfo = uni.getSystemInfoSync()
				if (!sysInfo) {
					return 0
				}
				return this.customBotPad + sysInfo.safeAreaInsets.bottom
			}
		},
		mounted() {
			// let sysInfo = uni.getSystemInfoSync()
			// if (!this.nativeTabBar) {
			// 	if (this.$slots['footer']) {
			// 		this.botPad = uni.upx2px(this.footerHeight) + sysInfo.safeAreaInsets.bottom
			// 	} else {
			// 		this.botPad = sysInfo.safeAreaInsets.bottom
			// 	}
			// }
		}
	}
</script>

<style lang="scss">
	.safe-area {
		padding-bottom: constant(safe-area-inset-bottom);
		padding-bottom: env(safe-area-inset-bottom);
	}
	.layout {
		width: 100%;
		&-footer {
			position: fixed;
			bottom: 0;
			width: 100%;
		}
	}
</style>
