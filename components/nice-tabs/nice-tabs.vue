<template>
	<view class="nice-tabs" :class="{'nice-tabs-lg': $bigScreen}">
		<view @click="handleClick(idx)" class="item" v-for="(item, idx) in list" :key="idx">
			{{item.name}}
			<view class="thumb" :class="{'thumb-active': currentIdx == idx}"></view>
		</view>
	</view>
</template>

<script>
	export default {
		name:"nice-tabs",
		data() {
			return {
				currentIdx: -1
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
		created() {
			if (this.list && this.list.length) {
				this.currentIdx = 0
			}
		},
		watch: {
			list(newVal) {
				if (newVal && newVal.length > 0) {
					this.currentIdx = 0
				}
			}
		},
		methods: {
			handleClick(idx) {
				this.currentIdx = idx
				this.$emit('change', idx)
			}
		}
	}
</script>

<style lang="scss" scoped>
	.nice-tabs {
		
	}
	.nice-tabs-lg {
		display: flex;
		align-items: center;
		.item {
			font-family: OPPOSans-R;
			font-size: 8.59rpx;
			color: #FFFFFF;
			letter-spacing: 0;
			font-weight: 400;
			position: relative;
			height: 28.51rpx;
			line-height: 28.51rpx;
		}
		.item:not(:last-child) {
			margin-right: 7.81rpx;
		}
		.thumb {
			position: absolute;
			width: 100%;
			left: 0;
			bottom: 0;
			height: 2.34rpx;
			background: #19FCAC;
			content: ' ';
			transition: 0.5s;
			transform: scaleX(0);
		}
		.thumb-active {
			transition: 0.5s;
			transform: scaleX(1);
		}
		.item:hover {
			.thumb {
				transition: 0.5s;
				transform: scaleX(1);
			}
		}
	}
</style>
