<template>
	<view :class="{'nice-pie-sm': !$bigScreen, 'nice-pie-lg': $bigScreen}">
		<nice-pie-label v-for="(item, idx) in labels" :key="idx" :label="item.label" :value="item.value"
			:align="item.align" :x="item.x" :y="item.y" :active="idx == activeIdx" 
			:srcWidth="item.srcWidth" :targetWidth="item.targetWidth" :zIndex="$bigScreen ? 1 : 99"></nice-pie-label>
		<image class="sphere" src="/static/nice-pie/nice-pie_19@3x.png"></image>

		<view class="board">
			<lottie :options="defaultOptions" :height="animHeight" :width="animWidth" />
		</view>
		<view class="pos-real fill" style="z-index: 10;">
			<qiun-data-charts @complete="handleComplete" @getIndex="handleClick" type="ring" :eopts="opts" :echartsH5="true"
				:chartData="chartData" :animation="false" />
		</view>
	</view>
</template>

<script>
	import eCharts from '@/uni_modules/qiun-data-charts/js_sdk/u-charts/config-echarts.js';
	import NicePieLabel from "./nice-pie-label.vue"
	import * as animationData from "@/static/anims/light-data-2.json";
	export default {
		name: "nice-pie",
		components: {
			NicePieLabel
		},
		data() {
			return {
				defaultOptions: {
					animationData: animationData
				},
				animWidth: 0,
				animHeight: 0,
				opts: {
					animation: false,
					tooltip: {
						show: false
					},
					legend: {
						show: false
					},
				},
				chartData: {
					categories: [],
					series: [{
						tooltip: {
							show: false
						},
						label: {
							show: false
						},
						labelLine: {
							show: false
						},
						radius: ['50%', '100%'],
						"data": [{
								"name": "Seed Round",
								"value": 5,
								itemStyle: {
									color: "#2a2a2a",
									borderColor: "#19FCAC"
								}
							},
							{
								"name": "Private",
								"value": 10,
								itemStyle: {
									color: "#2a2a2a",
									borderColor: "#19FCAC"
								}
							},
							{
								"name": "Staking",
								"value": 20,
								color: "#2a2a2a",
								itemStyle: {
									color: "#2a2a2a",
									borderColor: "#19FCAC"
								}
							},
							{
								"name": "Public Sale",
								"value": 2,
								itemStyle: {
									color: "#2a2a2a",
									borderColor: "#19FCAC"
								}
							},
							{
								"name": "Development",
								"value": 5,
								itemStyle: {
									color: "#2a2a2a",
									borderColor: "#19FCAC"
								}
							},
							{
								"name": "Treasury",
								"value": 15,
								itemStyle: {
									color: "#2a2a2a",
									borderColor: "#19FCAC"
								}
							},
							{
								"name": "Marketing",
								"value": 4,
								itemStyle: {
									color: "#2a2a2a",
									borderColor: "#19FCAC"
								}
							},
							{
								"name": "Play To Earn",
								"value": 25,
								itemStyle: {
									color: "#2a2a2a",
									borderColor: "#19FCAC"
								}
							},
							{
								"name": "Advisors",
								"value": 4,
								itemStyle: {
									color: "#2a2a2a",
									borderColor: "#19FCAC"
								}
							},
							{
								"name": "Core Team",
								"value": 15,
								itemStyle: {
									color: "#2a2a2a",
									borderColor: "#19FCAC"
								}
							}
						]
					}],
				},
				activeIdx: -1
			};
		},
		computed: {
			labels() {
				return [{
						label: this.$t('page.tokenAllocation.SeedRound'),
						value: '5%',
						align: 'right',
						srcWidth: this.$bigScreen ? uni.upx2px(140) : uni.upx2px(206),
						targetWidth: this.$bigScreen ? uni.upx2px(220) : uni.upx2px(409),
						x: this.$bigScreen ? uni.upx2px(120) : uni.upx2px(250),
						y: this.$bigScreen ? uni.upx2px(0) : uni.upx2px(0)
					}, {
						label: this.$t('page.tokenAllocation.Private'),
						value: '5%',
						align: 'right',
						srcWidth: this.$bigScreen ? uni.upx2px(195.31) : uni.upx2px(200),
						targetWidth: this.$bigScreen ? uni.upx2px(260.16) : uni.upx2px(350),
						x: this.$bigScreen ? uni.upx2px(175.78) : uni.upx2px(360),
						y: this.$bigScreen ? uni.upx2px(20) : uni.upx2px(35)
					},
					{
						label: this.$t('page.tokenAllocation.Staking'),
						value: '20%',
						align: 'right',
						srcWidth: this.$bigScreen ? uni.upx2px(191) : uni.upx2px(220),
						targetWidth: this.$bigScreen ? uni.upx2px(260.16) : uni.upx2px(350),
						x: this.$bigScreen ? uni.upx2px(180) : uni.upx2px(380),
						y: this.$bigScreen ? uni.upx2px(90) : uni.upx2px(205)
					},
					{
						label: this.$t('page.tokenAllocation.PublicSale'),
						value: '2%',
						align: 'right',
						srcWidth: this.$bigScreen ? uni.upx2px(195.31) : uni.upx2px(170),
						targetWidth: this.$bigScreen ? uni.upx2px(260.16) : uni.upx2px(351),
						x: this.$bigScreen ? uni.upx2px(175.78) : uni.upx2px(430),
						y: this.$bigScreen ? uni.upx2px(155) : uni.upx2px(325)
					},
					{
						label: this.$t('page.tokenAllocation.Development'),
						value: '5%',
						align: 'right',
						srcWidth: this.$bigScreen ? uni.upx2px(195.31) : uni.upx2px(205),
						targetWidth: this.$bigScreen ? uni.upx2px(260.16) : uni.upx2px(340),
						x: this.$bigScreen ? uni.upx2px(175.78) : uni.upx2px(400),
						y: this.$bigScreen ? uni.upx2px(190) : uni.upx2px(385)
					},
					{
						label: this.$t('page.tokenAllocation.Treasury'),
						value: '15%',
						align: 'right',
						srcWidth: this.$bigScreen ? uni.upx2px(241) : uni.upx2px(320),
						targetWidth: this.$bigScreen ? uni.upx2px(300) : uni.upx2px(450),
						x: this.$bigScreen ? uni.upx2px(130) : uni.upx2px(282),
						y: this.$bigScreen ? uni.upx2px(228) : uni.upx2px(440)
					},
					{
						label: this.$t('page.tokenAllocation.Marketing'),
						value: '4%',
						align: this.$bigScreen ? 'left' : 'right',
						srcWidth: this.$bigScreen ? uni.upx2px(260) : uni.upx2px(149),
						targetWidth: this.$bigScreen ? uni.upx2px(280) : uni.upx2px(274),
						x: this.$bigScreen ? uni.upx2px(-130) : uni.upx2px(182),
						y: this.$bigScreen ? uni.upx2px(225) : uni.upx2px(470)
					},
					{
						label: this.$t('page.tokenAllocation.PlayToEarn'),
						value: '25%',
						align: this.$bigScreen ? 'left' : 'right',
						srcWidth: this.$bigScreen ? uni.upx2px(195.31) : uni.upx2px(540),
						targetWidth: this.$bigScreen ? uni.upx2px(260.16) : uni.upx2px(650),
						x: this.$bigScreen ? uni.upx2px(-130) : uni.upx2px(60),
						y: this.$bigScreen ? uni.upx2px(150) : uni.upx2px(265),
					},
					{
						label: this.$t('page.tokenAllocation.Advisors'),
						value: '4%',
						align: this.$bigScreen ? 'left' : 'right',
						srcWidth: this.$bigScreen ? uni.upx2px(195.31) : uni.upx2px(508),
						targetWidth: this.$bigScreen ? uni.upx2px(260.16) : uni.upx2px(620),
						x: this.$bigScreen ? uni.upx2px(-130) : uni.upx2px(90),
						y: this.$bigScreen ? uni.upx2px(65) : uni.upx2px(145)
					},
					{
						label: this.$t('page.tokenAllocation.CoreTeam'),
						value: '15%',
						align: this.$bigScreen ? 'left' : 'right',
						srcWidth: this.$bigScreen ? uni.upx2px(195.31) : uni.upx2px(450),
						targetWidth: this.$bigScreen ? uni.upx2px(260.16) : uni.upx2px(580),
						x: this.$bigScreen ? uni.upx2px(-130) : uni.upx2px(132),
						y: this.$bigScreen ? uni.upx2px(30) : uni.upx2px(95)
					},
				]
			}
		},
		onReady() {
			this.animWidth = this.$bigScreen ? uni.upx2px(30.08) : uni.upx2px(403)
			this.animHeight = this.$bigScreen ? uni.upx2px(106.25) : uni.upx2px(218)
		},
		methods: {
			handleComplete(e) {
				this.chart = eCharts.instance[e.id]
			},
			handleClick(e) {
				let item = this.chartData.series[0].data[e.currentIndex]
				if (e.currentIndex != this.activeIdx) {
					if (this.activeIdx != -1) {
						let oldItem = this.chartData.series[0].data[this.activeIdx]
						oldItem.itemStyle.color = '#2a2a2a'
					}
					item.itemStyle.color = "#19FCAC"
					this.activeIdx = e.currentIndex
				} else {
					item.itemStyle.color = '#2a2a2a'
					this.activeIdx = -1
				}
				this.chart.setOption(this.chartData)
			}
		}
	}
</script>

<style lang="scss" scoped>
	.nice-pie-sm {
		position: relative;
		width: 474rpx;
		height: 474rpx;

		.nice-pie-item {
			position: absolute;
		}

		.sphere {
			position: absolute;
			left: 63rpx;
			top: 68rpx;
		}

		.board {
			position: absolute;
			left: 38rpx;
			top: 380rpx;
			width: 403rpx;
			height: 218rpx;
		}

		.sphere {
			width: 350rpx;
			height: 350rpx;
		}
	}

	.nice-pie-lg {
		position: relative;
		width: 231.25rpx;
		height: 231.25rpx;

		.nice-pie-item {
			position: absolute;
		}

		.sphere {
			position: absolute;
			left: 26rpx;
			top: 28rpx;
		}

		.board {
			position: absolute;
			left: 19.53rpx;
			top: 175.78rpx;
			width: 196.48rpx;
			height: 106.25rpx;
		}

		.sphere {
			width: 180.46rpx;
			height: 180.46rpx;
		}
	}
</style>
