<template>
	<simple-container :showNav="false" :showRight="false">
		<uni-row>
			<uni-col :xs="24" :sm="24" :md="12" :lg="12" :xl="12">
				<view class="simple-card v-box">
					<view>
						<view class="title" :class="{'title-lg': $bigScreen}">注册</view>
						<view class="line"></view>
						<u-form ref="form" :model="registerModel" :border="false">
							<!-- <u-form-item label="用户头像：" label-width="230" label-align="right" :border-bottom="false">
								<j-image-upload v-model="registerModel.avatar" :isMultiple="false" :number="1"></j-image-upload>
							</u-form-item> -->
							<u-form-item prop="nickname" label="昵称：" label-width="230" label-align="right"
								:border-bottom="false">
								<u-input v-model="registerModel.nickname" placeholder="请输入昵称"></u-input>
							</u-form-item>
							<u-form-item prop="phone" label="手机号：" label-width="230" label-align="right"
								:border-bottom="false">
								<u-input v-model="registerModel.phone" placeholder="请输入手机号" type="number"></u-input>
							</u-form-item>
							<u-form-item prop="smscode" label="验证码：" label-width="230" label-align="right"
								:border-bottom="false">
								<u-input v-model="registerModel.smscode" placeholder="请输入验证码" :clearable="false">
								</u-input>

								<u-button v-if="!verification" size="mini" slot="right" type="success" @click="getCode">
									发送验证码
								</u-button>
								<u-button v-else disabled size="mini" slot="right" type="success">
									已发送
									<u-count-down @end="timeOut" :timestamp="60" :show-hours="false"
										:show-minutes="false" bg-color="" color="" font-size=""></u-count-down>
								</u-button>

							</u-form-item>
							<u-form-item prop="password" label="登陆密码：" label-width="230" label-align="right"
								:border-bottom="false">
								<u-input v-model="registerModel.password" type="password" placeholder="请输入密码"></u-input>
							</u-form-item>
							<u-form-item prop="password2" label="重复登陆密码：" label-width="230" label-align="right"
								:border-bottom="false">
								<u-input v-model="registerModel.password2" type="password" placeholder="请再次输入密码">
								</u-input>
							</u-form-item>
							<!-- <u-form-item label="邀请码：" label-width="230" label-align="right" :border-bottom="false">
								<u-input v-model="registerModel.invitationCode" placeholder="请输入邀请码"></u-input>
							</u-form-item> -->
							<button @click="submit" :disabled="registerSuccess" class="u-reset-button mg-t-lg btn-login"
								:class="{'btn-login-lg': $bigScreen}">注册</button>
						</u-form>
					</view>
				</view>
			</uni-col>
		</uni-row>
	</simple-container>
</template>

<script>
	import {
		mapMutations
	} from 'vuex'
	import {
		register,
		sms,
	} from '@/api/user.js'
	export default {
		data() {
			return {
				verification: false,
				registerModel: {
					"phone": "",
					"smscode": "",
					"nickname": "",
					'invitationCode': '',
					'password': '',
					'password2': '',
					'avatar': ''
				},
				rules: {
					phone: [{
							required: true,
							message: '请输入手机号',
							trigger: ['change', 'blur'],
						},
						{
							validator: (rule, value, callback) => {
								return this.$u.test.mobile(value);
							},
							message: '手机号码不正确',
							trigger: ['change', 'blur'],
						}
					],
					nickname: [{
						required: true,
						message: '请输入昵称',
						trigger: ['change', 'blur'],
					}],
					smscode: [{
						required: true,
						message: '请输入验证码',
						trigger: ['change', 'blur'],
					}],
					password: [{
						required: true,
						message: '请输入密码',
						trigger: ['change', 'blur'],
					}, {
						validator: (rule, value, callback) => {
							return this.registerModel.password2 == this.registerModel.password;
						},
						message: '两次输入的密码不一致',
						trigger: ['change', 'blur'],
					}],
					password2: [{
						required: true,
						message: '请再次输入密码',
						trigger: ['change', 'blur'],
					}, {
						validator: (rule, value, callback) => {
							return this.registerModel.password2 == this.registerModel.password;
						},
						message: '两次输入的密码不一致',
						trigger: ['change', 'blur'],
					}]
				},
				registerSuccess: false
			}
		},
		onLoad(e) {
			this.registerModel.invitationCode = e.invitationCode || ''
		},
		onReady() {
			this.$refs.form.setRules(this.rules)
		},
		methods: {
			timeOut() {
				this.verification = false
			},
			async getCode() {
				if (this.registerModel.phone) {
					await sms({
						mobile: this.registerModel.phone,
						smsmode: 1
					})
					this.verification = true
				} else {
					this.$showError('请填写手机号')
				}
			},
			...mapMutations("user", ["login"]),
			submit() {
				this.$refs.form.validate(async valid => {
					if (valid) {
						try {
							let res = await register(this.registerModel)
							this.login({
								...res.userInfo,
								token: res.token,
								tokenExpired: res.tokenExpired
							})
							this.registerSuccess = true
							this.$toast('注册成功')
							setTimeout(() => {
								uni.reLaunch({
									url: "/pages/index/index"
								})
							}, 1500)
						} catch (e) {
							console.error(e)
						}
					}
				})
			}
		}
	}
</script>
<style>

</style>
<style scoped>
	.line {
		height: 2px;
		background: linear-gradient(270deg, rgba(96, 139, 171, 0) 0%, #315372 51%, rgba(49, 83, 114, 0) 100%);
		border-radius: 4px;
		margin: 30rpx 0;
	}

	.title {
		text-align: center;
		font-size: 36rpx;
		font-weight: 600;
		line-height: 50rpx;
	}

	.title-lg {
		text-align: center;
		font-size: 36px;
		font-weight: 600;
		color: #FFFFFF;
		line-height: 50px;
	}

	/deep/ .u-input {
		background-color: #FFFFFF !important;
		padding: 0 20rpx !important;
		max-width: 300px;
	}

	/deep/ .u-input__input {
		color: #000000 !important;
	}

	.simple-card {
		margin-top: 10%;
	}

	.uni-row {
		display: flex;
		justify-content: center;
	}

	.icon-head {
		width: 90rpx;
		height: 90rpx;
	}

	/deep/ .u-form-item {
		/* color: #FFFFFF; */
	}

	.uni-container {
		padding: 15px;
	}

	.send-btn {
		margin-top: 5px;
	}

	.btn-login {
		height: 48px;
		line-height: 48px;
		font-size: 20px;
		background: linear-gradient(137deg, #2BBEFF 0%, #008FE7 100%);
		border-radius: 4px;
		color: #FFFFFF;
	}

	.btn-login-lg {
		width: 360px;
		height: 48px;
		line-height: 48px;
		font-size: 20px;
		background: linear-gradient(137deg, #2BBEFF 0%, #008FE7 100%);
		border-radius: 4px;
		color: #FFFFFF;
	}
</style>
