<template>
	<simple-container>
		<view class="body-style" :class="{'body-lg':$bigScreen}">
			<view class="title-style">我的提现</view>
			<view class="card-style pad-md" :class="{'h-box':$bigScreen,'pad-l-xxl':$bigScreen}">
				<view class="label-style">提现金额：</view>
				<view class="h-box">
					<view class="h-box input-style">
						<u-input v-model="fee" type="number" :border="false" placeholder="最高可提现20￥"
							:customStyle="{'color':'#000000'}" :clearable="false" />
						<view @click="withdrawAll" style="color: #0089FF;">提现全部</view>
					</view>
					<view class="pad-l-sm">
						<u-button @click="handleOk" class="but-style">确定</u-button>
					</view>
				</view>
			</view>
			<view class="table-style">提现记录</view>
			<view class="h-box pad-t-sm">
				<view style="width: 60px;height: 2px;background: #2B83B9;"></view>
				<view style="width: 100%;height: 2px;background: #E0EEF6;"></view>
			</view>
			<view v-if="total > 0">
				<view v-for="(item,index) in withdrawList" :key="index">
					<match-media :max-width="960">
						<view class="h-box pad-t-md">
							<view class="time-style">{{item.createTime}}</view>
							<view class="money-style flex-extend pad-l-sm">￥{{item.fee}}</view>
							<view v-if="item.status == 'PENDING'" class="under-review v-box"
								style="background: #2B83B9;">
								审核中
							</view>
							<view v-else-if="item.status == 'PASSED'" class="under-review v-box"
								style="background: #89C059;">
								已完成</view>
							<view v-else-if="item.status == 'REJECTED'" class="under-review v-box"
								style="background: #CCCCCC;">
								失败</view>
						</view>
						<view v-if="item.status == 'REJECTED'" class="hint-style">
							<u-icon name="info-circle"></u-icon>
							<text style="padding-left: 10rpx;">{{item.rejectReason}}</text>
						</view>
					</match-media>
					<match-media :min-width="960">
						<view class="h-box pad-t-md" style="width: 45%;">
							<view class="time-style">{{item.createTime}}</view>
							<view class="money-style flex-extend pad-l-md">￥{{item.fee}}</view>
							<view v-if="item.status == 'REJECTED'" class="hint-style pad-r-md">
								<u-icon name="info-circle"></u-icon>
								<text style="padding-left: 10rpx;">{{item.rejectReason}}</text>
							</view>
							<view v-if="item.status == 'PENDING'" class="under-review v-box"
								style="background: #2B83B9;">
								审核中
							</view>
							<view v-else-if="item.status == 'PASSED'" class="under-review v-box"
								style="background: #89C059;">
								已完成
							</view>
							<view v-else-if="item.status == 'REJECTED'" class="under-review v-box"
								style="background: #CCCCCC;">
								失败
							</view>
						</view>
					</match-media>
				</view>
				<div class="v-box" style="padding: 50px 0;">
					<uni-pagination @change="noChange" :current="pageNo" :total="total" :pageSize="pageSize"
						showIcon="true" />
				</div>
			</view>
			<view v-else class="pad-t-xxl">
				<u-empty mode="list"></u-empty>
			</view>
		</view>
	</simple-container>
</template>

<script>
	import {
		getMemApiWithdrawList,
		getMemApiStatistics,
		applyWithdraw
	} from "@/api/user.js"

	export default {
		data() {
			return {
				count: {},
				fee: '',
				balance: '',
				busy: false,
				withdrawList: [],
				pageNo: 1,
				pageSize: 10,
				total: 0
			}
		},
		onLoad() {
			this.loadData()
		},
		methods: {
			noChange(e) {
				this.pageNo = e.current
				this.loadData()
			},
			async loadData() {
				//获取可以提现的金额
				let res = await getMemApiStatistics()
				//console.log("qqq",res.incomeCount)
				this.balance = res.incomeCount
				//获取提现列表
				let list = await getMemApiWithdrawList({
					pageNo: this.pageNo,
					pageSize: this.pageSize,
				})
				this.withdrawList = list.records
				this.total = list.total
			},
			//提现全部
			withdrawAll() {
				this.fee = this.balance
			},
			async handleOk() {
				if (this.busy) {
					return
				}
				let fee = parseFloat(this.fee)
				if (!fee || fee <= 0 || fee > 20) {
					uni.showModal({
						title: "提示",
						content: "提现金额需大于0且小于等于20，请正确填写",
						showCancel: false
					})
					return
				}
				this.busy = true
				try {
					await applyWithdraw({
						fee
					})
					uni.showModal({
						title: "成功",
						content: "提交成功，请等待审核",
						showCancel: false
					})
					this.fee = null
					this.loadData()
				} catch (e) {
					console.error(e)
				} finally {
					this.busy = false
				}
			}
		}
	}
</script>

<style lang="scss" scoped>
	.body-style {
		background-color: #F3FBFF;
		margin-top: 60rpx;
		padding: 30rpx;
	}

	.body-lg {
		min-height: 820px;
		padding: 60rpx 80rpx;
	}

	.title-style {
		font-size: 24px;
		font-family: PingFangSC-Semibold, PingFang SC;
		font-weight: 600;
		color: #000000;
		line-height: 33px;
	}

	.card-style {
		width: 100%;
		height: 130px;
		background-color: #EBF4F9;
		margin: 30rpx 0;
	}

	.label-style {
		font-size: 14px;
		font-family: PingFangSC-Regular, PingFang SC;
		font-weight: 400;
		color: #000000;
		line-height: 20px;
	}

	.input-style {
		background-color: #FFFFFF;
		padding: 0 20rpx;
	}

	.but-style {
		background: linear-gradient(137deg, #2BBEFF 0%, #008FE7 100%);
		border-radius: 4px;
		font-size: 20px;
		font-family: PingFangSC-Regular, PingFang SC;
		font-weight: 400;
		color: #FFFFFF;
		line-height: 28px;
	}

	.table-style {
		font-size: 14px;
		font-family: PingFangSC-Semibold, PingFang SC;
		font-weight: 600;
		color: #000000;
		line-height: 20px;
	}

	.time-style {
		font-size: 14px;
		font-family: PingFangSC-Regular, PingFang SC;
		font-weight: 400;
		color: #000000;
		line-height: 20px;
	}

	.money-style {
		font-size: 14px;
		font-family: PingFangSC-Regular, PingFang SC;
		font-weight: 400;
		color: #FB6400;
		line-height: 20px;
	}

	.under-review {
		width: 80px;
		height: 24px;
		border-radius: 2px;
		font-size: 12px;
		padding-top: 8rpx;
	}

	.hint-style {
		font-size: 12px;
		font-family: PingFangSC-Regular, PingFang SC;
		font-weight: 400;
		color: #FF0000;
		line-height: 17px;
	}
</style>
