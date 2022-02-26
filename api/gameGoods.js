import {request} from '@/common/request.js'

//获取游戏列表(带搜索)
// export function getGameGoodsList({
// 	pageNo = 1,
// 	pageSize = 8,
// 	keyword
// }) {
//   return request({
//     url: "/api/public/getGameGoodsList",
//     method: 'get',
// 	data: {
// 		pageNo,
// 		pageSize,
// 		keyword
// 	}
//   })
// }

export function getGameGoodsIndex({
	pageNo = 1,
	pageSize = 8,
	keyword
}) {
  return request({
    url: "/api/public/getGameGoodsIndex",
    method: 'get',
	data: {
		pageNo,
		pageSize,
		keyword
	}
  })
}

//获取游戏详情
export function getGoodsDetail({
	id
}) {
  return request({
    url: "/api/public/getGoodsDetail",
    method: 'get',
	data: {
		id
	}
  })
}

//查验优惠码
export function getCheckCode({
	goodsId,
	promotionCode
}) {
  return request({
    url: "/gamemall/gameGoods/getCheckCode",
    method: 'get',
	data: {
		goodsId,
		promotionCode
	}
  })
}

//获取首页广告信息
export function getAdvertisingList() {
	return request({
		url: "/api/public/getAdvertisingList",
		method: 'get',
		data: {}
	})
}