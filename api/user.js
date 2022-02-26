import {
	request
} from "@/common/request.js"

export function register({
	showLoading = true,
	nickname,
	phone,
	invitationCode,
	avatar,
	password,
	smscode
}) {
	return request({
		url: '/api/public/register',
		method: 'post',
		data: {
			nickname,
			phone,
			invitationCode,
			avatar,
			password,
			smscode
		}
	})
}

export function login({
	showLoading = true,
	username,
	password,
	captcha,
	checkKey
}) {
	return request({
		url: '/api/public/login',
		method: 'post',
		data: {
			username,
			password,
			captcha,
			checkKey
		}
	})
}

export function logout({
	showLoading = true,
}) {
	return request({
		url: '/sys/logout',
		method: 'post',
		data: {}
	})
}

export function getCaptchaImage({
	showLoading = true,
	key
}) {
	return request({
		url: '/sys/randomImage/' + key,
	})
}

//统计总收益和邀请用户总数
export function getMemApiStatistics() {
	return request({
		url: "/member/api/getMemApiStatistics",
		method: 'get'
	})
}

//前台获取用户基本信息
export function getMemApiDesignerInfo() {
	return request({
		url: "/member/api/getMemApiDesignerInfo",
		method: 'get'
	})
}

//前台查询订单表中uid为当前用户ID的数据
export function getMemApiGameOrderList({
	pageNo,
	pageSize
}) {
	return request({
		url: "/member/api/getMemApiGameOrderList",
		method: 'get',
		data: {
			pageNo,
			pageSize
		}
	})
}

//查询用户表中inviterId为当前用户ID的数据
export function getMemApiInvitedToRecordList({
	pageNo,
	pageSize
}) {
	return request({
		url: "/member/api/getMemApiInvitedToRecordList",
		method: 'get',
		data: {
			pageNo,
			pageSize
		}
	})
}

//查询分销记录表中beneficiaryId为当前用户ID的数据
export function getMemApiIncomeRecordList({
	pageNo,
	pageSize
}) {
	return request({
		url: "/member/api/getMemApiIncomeRecordList",
		method: 'get',
		data: {
			pageNo,
			pageSize
		}
	})
}

//查询当前游戏的登录用户的优惠码
export function getNowPromotionCode({
	goodsId
}) {
	return request({
		url: "/member/api/getNowPromotionCode",
		method: 'get',
		data: {
			goodsId
		}
	})
}

//重置当前用户当前游戏的优惠码
export function getResetCode({
	id
}) {
	return request({
		url: "/member/api/getResetCode",
		method: 'get',
		data: {
			id
		}
	})
}

//查询当前用户提现记录
export function getMemApiWithdrawList({
	pageNo,
	pageSize
}) {
	return request({
		url: "/member/api/getMemApiWithdrawList",
		method: 'get',
		data: {
			pageNo,
			pageSize
		}
	})
}

//用户提现
export function applyWithdraw({
	fee
}) {
	return request({
		url: '/designerinn/withdrawApply/applyWithdraw',
		method: 'post',
		data: {
			fee
		}
	})
}

//获取所有账号信息
export function getAll() {
	return request({
		url: "/api/designerinn/thirdCashAccount/getAll",
		method: 'get',
		data: {}
	})
}

//添加支付宝账号
export function saveAliPayAccount({
	id,
	accountName,
	realName
}) {
	return request({
		url: '/api/designerinn/thirdCashAccount/saveAliPayAccount',
		method: 'post',
		data: {
			id,
			accountName,
			realName
		}
	})
}

//添加银行卡
export function saveBankCard({
	id,
	bankName,
	cardNo,
	accountName
}) {
	return request({
		url: '/api/designerinn/thirdCashAccount/saveBankCard',
		method: 'post',
		data: {
			id,
			bankName,
			cardNo,
			accountName
		}
	})
}

//获取二维码页面地址
export function getWxAuthUrl() {
	return request({
		url: '/wx/getQRCodeUrl',
		method: 'get'
	})
}

//绑定微信
export function bindWx({
	code
}) {
	return request({
		url: '/wx/bind',
		method: 'get',
		data: {
			code
		}
	})
}

//修改当前用户的头像昵称
export function editUser({
	avatar,
	nickname
}) {
	return request({
		url: "/member/api/editUser",
		method: 'get',
		data: {
			avatar,
			nickname
		}
	})
}

//短信登录接口
export function sms({
	mobile,
	smsmode
}) {
	return request({
		url: '/sys/sms',
		method: 'post',
		data: {
			mobile,
			smsmode
		}
	})
}

//更新手机号
export function updateMobile({
	phone,
	smscode
}) {
	return request({
		url: '/sys/user/updateMobile',
		method: 'put',
		data: {
			phone,
			smscode
		}
	})
}

//修改密码
export function updatePassword({
	username,
	oldpassword,
	password,
	confirmpassword
}) {
	return request({
		url: '/sys/user/updatePassword',
		method: 'put',
		data: {
			username,
			oldpassword,
			password,
			confirmpassword
		}
	})
}
