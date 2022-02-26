import {request} from "@/common/request.js"

export function genGoodsOrder({
	showLoading = true,
	goodsId,
	promotionCode
}) {
	return request({
		showLoading,
		url: '/designerinn/order/genGoodsOrder',
		data: {
			goodsId,
			promotionCode
		}
	})
}

export function getOrderDetail({
	showLoading = true,
	orderId
}) {
	return request({
		showLoading,
		url: '/designerinn/order/getOrderDetail',
		data: {
			orderId
		}
	})
}

export function getAliPayQRCode({
	showLoading = true,
	orderId
}) {
	return request({
		showLoading,
		url: '/designerinn/order/getAliPayQRCode',
		data: {
			orderId
		}
	})
}

export function getWxPayQRCode({
	showLoading = true,
	orderId
}) {
	return request({
		showLoading,
		url: '/designerinn/order/getWxPayQRCode',
		data: {
			orderId
		}
	})
}

export function aliPayQueryOrder({
	showLoading = true,
	orderId
}) {
	return request({
		showLoading,
		url: '/designerinn/order/aliPayQueryOrder',
		data: {
			orderId
		}
	})
}

export function wxQueryOrder({
	showLoading = true,
	orderId
}) {
	return request({
		showLoading,
		url: '/designerinn/order/wxQueryOrder',
		data: {
			orderId
		}
	})
}