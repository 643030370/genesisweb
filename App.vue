<script>
	import initApp from '@/common/appInit.js';
	// import checkIsAgree from '@/pages/uni-agree/utils/uni-agree.js';
	export default {
		globalData: {
			searchText: '',
			appVersion: {},
			config: {}
		},
		onLaunch: function() {
			console.log('App Launch')
			initApp();
			// #ifdef APP-PLUS
			//checkIsAgree(); APP端暂时先用原生默认生成的。目前，自定义方式启动vue界面时，原生层已经请求了部分权限这并不符合国家的法规
			// #endif

			// #ifdef H5
			// checkIsAgree(); // 默认不开启。目前全球，仅欧盟国家有网页端同意隐私权限的需要。如果需要
			// #endif

			// #ifdef APP-PLUS
			//idfa有需要的用户在应用首次启动时自己获取存储到storage中
			//https://ask.dcloud.net.cn/article/36107
			/*if(~plus.storage.getItem('idfa')){
				plus.device.getInfo({//需要勾选IDFA
					success:function(e){  
						console.log('idfa =  '+JSON.stringify(e.idfa));  
					},
					fail:function(e){
						console.log('getDeviceInfo failed: '+JSON.stringify(e));  
					}  
				});
			}*/
			// #endif
		},
		onShow: function() {
			console.log('App Show')
		},
		onHide: function() {
			console.log('App Hide')
		},
		methods: {
			
		},
	}
</script>

<style lang="scss">
	/*每个页面公共css */
	@import "uview-ui/index.scss";
	@import "./common/common.css";
	
	// @font-face {  
	//     font-family: PixelFont;
	//     src: url('/static/pixelfont.ttf') format('truetype');
	// }
	
	
	page {
		background-color: #000000;
		color: #FFFFFF;
	}

	/deep/ .uni-pagination__num-tag {
		height: 60rpx !important;
		border-radius: 4px !important;
		color: #17195B !important;
		background: rgba(255, 255, 255, 0.5);
		border-radius: 4px;
	}

	/deep/ .page--active {
		color: #17195B !important;
		background-color: #FFFFFF !important;
	}

	.simple-card {
		background: #28425A;
		padding: 40rpx;
	}
</style>
