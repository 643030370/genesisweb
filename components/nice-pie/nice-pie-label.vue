<template>
	<view :style="{'left': x + 'px', 'top': y + 'px', 'width': width + 'px', 'z-index': zIndex}" 
		:class="{'nice-pie-label-sm': !$bigScreen, 'nice-pie-label-lg': $bigScreen, 'active-lg': $bigScreen && active && align == 'right', 'active-sm': !$bigScreen && active && align == 'right', 'active-align-left-lg': $bigScreen && active && align == 'left', 'active-align-left-sm': !$bigScreen && active && align == 'left', 'alignLeft': align == 'left', 'alignRight': align == 'right'}">
		<text class="label">{{label}}</text>
		<text class="value">{{value}}</text>
	</view>
</template>

<script>
	export default {
		name:"nice-pie-label",
		data() {
			return {
				
			};
		},
		props: {
			label: {
				type: String,
				default: 'Label'
			},
			value: {
				type: String,
				default: '50%'
			},
			align: {
				type: String,
				default: 'right'
			},
			srcWidth: {
				type: Number,
				default: 200
			},
			targetWidth: {
				type: Number,
				default: 400
			},
			x: {
				type: Number,
				default: 0
			},
			y: {
				type: Number,
				default: 0
			},
			active: {
				type: Boolean,
				default: false
			},
			zIndex: {
				type: Number,
				default: 1
			}
		},
		computed: {
			width() {
				return this.active ? this.targetWidth : this.srcWidth
			}
		},
		methods: {
			
		}
	}
</script>

<style lang="scss" scoped>
	.alignLeft {
		.label {
			left: 0;
		}
		.value {
			left: 0;
		}
	}
	.alignRight {
		.label {
			right: 0
		}
		.value {
			right: 0
		}
	}
	.nice-pie-label-sm {
		position: absolute;
		height: 2rpx;
		background-color: rgba($color: #FFFFFF, $alpha: 0.3);
		.label {
			font-family: HarmonyOS_Sans_Black;
			font-size: 18rpx;
			color: #3B3B3B;
			letter-spacing: 0;
			font-weight: 900;
			display: inline-block;
			overflow-x: hidden;
			white-space: nowrap;
			position: absolute;
			bottom: 4rpx;
		}
		.value {
			font-family: HarmonyOS_Sans_Black;
			font-size: 26rpx;
			color: #3B3B3B;
			letter-spacing: 0;
			font-weight: 900;
			line-height: 1.1;
			display: inline-block;
			position: absolute;
			top: 4rpx;
		}
	}
	.nice-pie-label-sm:after {
		position: absolute;
		content: ' ';
		left: 0;
		top: -4rpx;
		width: 8rpx;
		height: 8rpx;
		border-radius: 4rpx;
		background-color: #fff;
	}
	.nice-pie-label-lg {
		position: absolute;
		height: 2rpx;
		background-color: rgba($color: #FFFFFF, $alpha: 0.3);
		.label {
			font-family: HarmonyOS_Sans_Black;
			font-size: 7.81rpx;
			color: #3B3B3B;
			letter-spacing: 0;
			font-weight: 900;
			display: inline-block;
			position: absolute;
			bottom: 1.56rpx;
		}
		.value {
			font-family: HarmonyOS_Sans_Black;
			font-size: 17.96rpx;
			color: #3B3B3B;
			letter-spacing: 0;
			font-weight: 900;
			line-height: 1;
			display: inline-block;
			position: absolute;
			top: 1.56rpx;
		}
	}
	.line-active {
		transition: 1s;
		transform-origin: 0 0;
		transform: scaleX(1.5);
	}
	.active-lg {
		transition: 1s;
		
		.value {
			transition: 1.1s;
			// font-size: 100px;
			color: #19FCAC;
			transform: scale(2, 2);
			transform-origin: 100% 0;
		}
		.label {
			transition: 1.1s;
			// font-size: 40px;
			color: #19FCAC;
			transform: scale(2, 2);
			transform-origin: 100% 100%;
		}
	}
	.active-align-left-lg {
		transition: 1s;
		// width: 666px !important;
		transform: translateX(-64.84rpx);
		
		.value {
			transition: 1.1s;
			color: #19FCAC;
			transform: scale(2, 2);
			transform-origin: 0 0;
		}
		.label {
			transition: 1.1s;
			color: #19FCAC;
			transform: scale(2, 2);
			transform-origin: 0 100%;
		}
	}
	.active-sm {
		transition: 1s;
		
		.value {
			transition: 1.1s;
			// font-size: 100px;
			color: #19FCAC;
			transform: scale(1.5, 1.5);
			transform-origin: 100% 0;
		}
		.label {
			transition: 1.1s;
			// font-size: 40px;
			color: #19FCAC;
			transform: scale(1.5, 1.5);
			transform-origin: 100% 100%;
		}
	}
	.active-align-left-sm {
		transition: 1s;
		// width: 666px !important;
		transform: translateX(-64.84rpx);
		
		.value {
			transition: 1.1s;
			color: #19FCAC;
			transform: scale(2, 2);
			transform-origin: 0 0;
		}
		.label {
			transition: 1.1s;
			color: #19FCAC;
			transform: scale(2, 2);
			transform-origin: 0 100%;
		}
	}
</style>
