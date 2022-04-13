
<template>
 	<view class="pos-real" :class="{'content-sm': !$bigScreen, 'content-lg': $bigScreen}">
 		<view class="header-wrapper">
 			<view class="header h-box">
 				<image class="logo" src="/static/logo.png"></image>
 				<view class="flex-extend">
 					<view v-if="$bigScreen" class="h-box">
 						<view class="tab-box flex-extend h-box">
 							<nice-tabs @change="handleTabChange" :list="tabs"></nice-tabs>
 						</view>
 						<view class="btn-wallet" @tap="tapPopup">
 							<image src="/static/icon-wallet@2x.png"></image>
 							<text>{{addr}}</text>
 							<!-- <text>{{JSON.stringify(walletConnect)}}</text> -->
 						</view>	
 						<view class="popup" v-show="show">
 							<view class="popup-info">
 								<view class='popup-top'>
 									<view class='popup-title'>Connect Wallet</view>
 									<button class='popup-btn' type="default" @tap="cancel">X</button>
 								</view>
 								<view class='popup-center'>
 									<view class='list' @click="switchToEtheruemChain">
 										<image class='list-img' src="/static/fox.png" mode=""></image>
 										<view class='list-type'>{{$t('Metamask')}}</view>
 									</view>
 									
 									<view class='list' @click="callWalletConnect">
 									<!-- <view class='list' @click="callWalletConnect" v-if="!walletConnect.connected"> -->
 										<image class='list-img' src="/static/WechatIMG79.png" mode=""></image>
 										<view class='list-type'>{{$t('walletConnect')}}</view>
 									</view>
 								</view>
 								<view class='bottom-btn'>
 									<view class='bottom-btn'><a href="https://ethereum.org/wallets/">Learn How to Connect</a></view>
 								</view>		
 							</view>
 						</view>		
 	
 						<lang-select></lang-select>
 					</view>
 				</view>
 				<simple-menu @click="handleTabChange" v-if="!$bigScreen" :menus="tabs"></simple-menu>
 			</view>
 		</view>
 		
 		<view id="page1" class="page page1 pos-real">
 			<!-- <video src="/static/testdv.mp4" :autoplay="true" :muted="true" :controls="false" :loop="true" object-fit="cover"></video>
 			 -->
 			<video id="myVideo" src="https://d2n9tyap8kl1by.cloudfront.net/ad.mp4" objectFit="fill" autoplay="true" muted="true" loop="true"></video>
 			<!-- <view class="flex-v justify-center content">
 				<image class="img-title" :src="$t('image.title')" mode="widthFix"></image>
 				<text class="text-subtitle">
 					{{$t('page.home.subTitle')}}
 				</text>
 			</view> -->
 			<!-- <image @click="play" v-if="btnPlayVisible" class="btn-play" src="/static/icon-play.png"></image> -->
 		</view>
 		 <WhatIsRichVerse />
 		 <!--
 		 <TopBanner />
 		 <VideoBanner />
 		  -->
 		 
 		<view id="paeg8" class="page8">
 			<Anim1 />
 			<Anim2 />
 			<Anim3 />
 			<Anim4 />
 			<Anim5 />
 			<Anim6 />
 		</view>
 		<Balls />
 		
 		<view id="page2" class="page page2">
 			<product-list></product-list>
 			<image class="img-kedu" src="/static/decorate-1@3x.png"></image>
 		</view>
 		<view id="page3" class="page page3">
 			<view class="h-box justify-end">
 				<image class="img-model" src="/static/icon-black-lowpoly@3x.png"></image>
 				<text class="model-title-1">{{$t('page.economic.title_1')}}</text>
 				<text class="model-title-2">{{$t('page.economic.title_2')}}</text>
 			</view>
 			<view class="h-box justify-end model-text-desc">
 				{{$t('page.economic.subTitle')}}
 			</view>
 			<view class="pos-real" :class="{'v-box': !$bigScreen}">
 				<nice-box @change="economicChange" :status="economicModelIdx"></nice-box>
 				<view v-if="$bigScreen">
 					<view class="pos-abs" :style="{top: item.top, left: item.left, right: 0}" @click="handleModelClick(idx)" v-for="(item, idx) in economicModels" :key="idx">
 						<nice-label :dot="!item.highlight" :num="item.num" :text="item.text" :highlight="item.highlight"></nice-label>
 					</view>
 				</view>
 				<view class="text-economic" v-if="!$bigScreen">
 					<view class="h-box">
 						<text class="num">0{{economicModelIdx + 1}}</text>
 						<view class="tape flex-extend"></view>
 					</view>
 					<text>{{economicModels[economicModelIdx].text}}</text>
 				</view>
 			</view>
 		</view>
 		<view id="page4" class="page page4">
 			<view class="title-token v-box flex-align-end">
 				<view class="h-box">
 					<image src="/static/icon-black-lowpoly@3x.png"></image>
 					<text class="text-token">{{$t('page.tokenAllocation.title_1')}}</text>
 					<text class="text-allocation">{{$t('page.tokenAllocation.title_2')}}</text>
 				</view>
 				<text class="desc">
 					{{$t('page.tokenAllocation.subTitle')}}
 				</text>
 			</view>
 			<view class="digit-wrapper" :class="{'h-box': !$bigScreen, 'flex-v': $bigScreen}">
 				<view class="flex-extend">
 					<text class="digit-label">{{$t('page.tokenAllocation.totalSupply')}}</text>
 					<text class="digit-value">200,000,000,000_</text>
 				</view>
 				<view>
 					<image class="btn-buy" src="/static/buy-ges@3x.png"></image>
 					<image class="btn-buy" src="/static/buy-riv@3x.png"></image>
 				</view>
 			</view>
 			<view class="pos-real pie-wrapper" :class="{'v-box': $bigScreen}">
 				<nice-pie></nice-pie>
 			</view>
 		</view>
 		<view id="page5" class="page page5 pos-real">
 			<view class="title-roadmap" :class="{'h-box': $bigScreen, 'justify-center': $bigScreen}">
 				<image src="/static/icon-black-lowpoly@3x.png"></image>
 				<text class="text-road">{{$t('page.roadMap.title_1')}}</text>
 				<text class="text-map">{{$t('page.roadMap.title_2')}}</text>
 				<image class="img-swipe" v-if="!$bigScreen" src="/static/pointer-swipe@3x.png" mode="widthFix"></image>
 				<text class="text-swipe-tips" v-if="!$bigScreen">{{$t('page.roadMap.timeline_tips')}}</text>
 			</view>
 			<scroll-view v-if="!$bigScreen" scroll-x style="white-space: nowrap;">
 				<view class="pos-real" style="padding-bottom: 50rpx;width: 1539rpx;">
 					<image :src="$t('page.roadMap.timeline')" class="h-fill" mode="widthFix"></image>
 					<view class="pos-abs" :style="{bottom: 0, left: 0, right: 0}">
 						<lottie :options="defaultOptions" :height="lightHeight" :width="lightWidth" v-on:animCreated="handleAnimation" />
 					</view>
 				</view>
 			</scroll-view>
 			<view v-else>
 				<image :src="$t('page.roadMap.timeline')" style="width: 100%; vertical-align: top;" mode="widthFix"></image>
 				<view class="pos-abs" :style="{bottom: 0, left: 0, right: 0}">
 					<lottie :options="defaultOptions" :height="lightHeight" :width="lightWidth" v-on:animCreated="handleAnimation" />
 				</view>
 			</view>
 		</view>
 		<view id="page6" class="page page6">
 			<nice-swiper :list="avatars"></nice-swiper>
 		</view>
 		<view id="page7" class="page page7">
 			<view class="h-box justify-center">
 				<image class="img-diamond" src="/static/icon-qianzhui@3x.png"></image>
 				<text class="title-cooperation">{{$t('page.cooperation.title')}}</text>
 			</view>
 			<view class="partner-wrapper">
 				<view class="h-box flex-wrap justify-center">
 					<image class="partner-logo" v-for="(item, idx) in partners.slice(0, 10)" :key="idx" :src="item.logo"></image>
 				</view>
 			<!-- 	<view class="h-box flex-wrap justify-center">
 					<image class="partner-logo" v-for="(item, idx) in partners.slice(4, 7)" :key="idx" :src="item.logo"></image>
 				</view> -->
 			</view>
 		</view>
 		<view class="footer v-box">
 			<view class="logo">
 				<image src="/static/logo.png"></image>
 			</view>
 			<view class="h-box audit flex-extend justify-between">
 				<text class="link category">{{$t('label.info')}}</text>
 				<text @click="viewWhitepaper" class="link label">{{$t('label.whitePaper')}}</text>
 				<text @click="tokenEconomic" class="link label">{{$t('label.tokenEconomic')}}</text>
 				<text @click="genesis" class="link label">{{$t('label.genesis')}}</text>
 				<text @click="backGround" class="link label">{{$t('label.gameBackground')}}</text>
 				<text @click="auditReport" class="link label">{{$t('label.auditReport')}}</text>
 				<view @click="navTo('https://github.com/richverse/')" class="h-box link link-github">
 					<image src="/static/links/github@2x.png"></image>
 					<text>Github</text>
 				</view>
 			</view>
 			<view class="h-box h-fill link-wrapper">
 				<view v-for="(item, idx) in links" :key="idx" @click="navTo(item.href)" class="h-box item" :style="{'background-color': item.bgColor}">
 					<image class="img-link" :src="item.icon"></image>
 					<text class="label">{{item.label}}</text>
 				</view>
 			</view>
 		</view>
 	</view>
 </template>
 
 <script>
 	import * as animationData from "@/static/anims/light-data.json";
 	import Anim1  from "./anims/anim1";
 	import Anim2  from "./anims/anim2";
 	import Anim3  from "./anims/anim3";
 	import Anim4  from "./anims/anim4";
 	import Anim5  from "./anims/anim5";
 	import Anim6  from "./anims/anim6";
 	import Balls  from "./balls/balls";
 	import VideoBanner from "./components/videoBanner";
 	import TopBanner from "./components/TopBanner";
 	import WhatIsRichVerse from "./components/whatIsRichVerse";
 	import WalletConnect from "@walletconnect/client";
 	import QRCodeModal from "@walletconnect/qrcode-modal";
 	
 	var walletConnector = null;
 	 
 	export default {
		mounted() {
		    this.initialize();
		  },
 		data() {
 			return {
 				defaultOptions: { animationData: animationData },
 				tabIdx: 0,
 				economicModelIdx: 0,
 				
 				partners: [{
 					logo: '/static/Cooperation LOGO11@3x.png'
 				},{
 				    logo: '/static/CooperationLOGO13@3x.png'
 				},{
 					logo: '/static/CooperationLOGO0@3x.png'
 				},{
 					logo: '/static/CooperationLOGO6@3x.png'
 				},{
 				    logo: '/static/CooperationLOGO1@3x.png'
 				},{
 					logo: '/static/CooperationLOGO2@3x.png'
 				},{
 					logo: '/static/CooperationLOGO5@3x.png'
 				},{
 					logo: '/static/CooperationLOGO7@3x.png'
 				},{
 					logo: '/static/CooperationLOGO14@3x.png'
 				},{
 					logo: '/static/Cooperation LOGO12@3x.png'
 				}],
 				
 				winWidth: 0,
 				animLightHeight: 0,
 				
 				lightWidth: 0,
 				lightHeight: 0,
 				
 				
 				btnPlayVisible: false,
 				currentChainId: '',
 				chainId: '0x7ff',
 				testChainId: '0x800',
 				show:false,
 				address:'',
 				addr:'connect',
 				account:'',
 				walletConnect:{
 					connected:false,
 					account:'',
 					chainId:'',
 				},
 				
 			}
 		},
 		
 		components:{
 		    'Anim1': Anim1,
 			'Anim2': Anim2,
 			'Anim3': Anim3,
 			'Anim4': Anim4,
 			'Anim5': Anim5,
 			'Anim6': Anim6,
 			'Balls': Balls,
 			'VideoBanner': VideoBanner,
 			'TopBanner': TopBanner,
 			'WhatIsRichVerse': WhatIsRichVerse,
 		  },
 		  
 		onReady() {
 			this.winWidth = uni.getSystemInfoSync().windowWidth
 			this.animLightHeight = this.winWidth / 7.6
 			
 			if (this.$bigScreen) {
 				this.lightWidth = uni.upx2px(1920 / 2.56)
 				this.lightHeight = uni.upx2px(251 / 2.56)
 			} else {
 				this.lightWidth = 1920
 				this.lightHeight = uni.upx2px(201)
 			}
 			
 			this.videoContext = uni.createVideoContext('myVideo')
 		},
 
 		computed: {
 			links() {
 				return [{
 					icon: '/static/links/icon-tongxun1@2x.png',
 					label: this.$t('label.twitter'),
 					href: 'https://twitter.com/RichverseWeb3',
 					bgColor: '#484848'
 				}, {
 					icon: '/static/links/icon-tongxun2@2x.png',
 					label: this.$t('label.telegram'),
 					href: 'https://t.me/RichverseWeb3',
 					bgColor: '#3C3C3C'
 				}, {
 					icon: '/static/links/icon-tongxun5@2x.png',
 					label: this.$t('label.medium'),
 					href: 'https://medium.com/@Richverse',
 					bgColor: '#323232'
 				}, {
 					icon: '/static/links/icon-tongxun4@2x.png',
 					label: this.$t('label.facebook'),
 					href: 'https://www.facebook.com/Richverse-Genesis-102748172255710',
 					bgColor: '#2A2A2A'
 				}, {
 					icon: '/static/links/icon-tongxun3@2x.png',
 					label: this.$t('label.discord'),
 					href: 'https://discord.gg/v69T4dDEPc',
 					bgColor: '#262626'
 				}, {
 					icon: '/static/links/icon-tongxun6@2x.png',
 					label: this.$t('label.hackernoon'),
 					href: 'https://hackernoon.com/u/richverse',
 					bgColor: '#1E1E1E'
 				}, {
 					icon: '/static/links/icon-tongxun7@2x.png',
 					label: this.$t('label.linkedin'),
 					href: 'https://www.linkedin.com/company/richverse-web3/',
 					bgColor: '#181818'
 				}]
 			},
 			avatars() {
 				return [{
 					image: '/static/avatars/alki@3x.png',
 					title: 'Alkistis',
 					desc: this.$t('member.Alkistis'),
 					homePage: 'https://www.linkedin.com/in/alkistismav/',
 					post: 'Product Partner'
 				}, {
 					image: '/static/avatars/xacier@3x.png',
 					title: 'Xavier',
 					desc: this.$t('member.Xavier'),
 					homePage: 'https://www.linkedin.com/in/xsoriano/',
 					post: 'Technology Partner '
 				},{
 					image: '/static/avatars/JulioBerks.png',
 					title: 'Julio Berks',
 					desc: this.$t('member.JulioBerks'),
 					// homePage: 'https://www.linkedin.com/in/julio-berks-3ab1b62b/',
 					post: 'CGO'
 				}, {
 					image: '/static/avatars/JoelBailey@3x.png',
 					title: 'Joel Bailey',
 					desc: this.$t('member.JoelBailey'),
 					// homePage: 'https://www.linkedin.com/in/joel-bailey-3341aa2b/',
 					post: 'COO'
 				},{
 					image: '/static/avatars/ChristineHaynes.png',
 					title: 'Christine Haynes',
 					desc: this.$t('member.ChristineHaynes'),
 					// homePage: 'https://www.linkedin.com/in/christine-haynes-7109b046/',
 					post: 'CMO'
 				}, {
 					image: '/static/avatars/Alice@3x.png',
 					title: 'Alice',
 					desc: this.$t('member.Alice'),
 					homePage: 'https://www.linkedin.com/in/yujie-hong-8392a6a3/',
 					post: 'CPO'
 				},
 				// {
 				// 	image: '/static/avatars/alice.png',
 				// 	title: 'Alice',
 				// 	desc: this.$t('member.Alice')
 				// },
 				// {
 				// 	image: '/static/avatars/jason.png',
 				// 	title: 'Jason',
 				// 	desc: this.$t('member.Jason')
 				// }, {
 				// 	image: '/static/avatars/kevin.png',
 				// 	title: 'Kevin',
 				// 	desc: this.$t('member.Kevin')
 				// },
 				// {
 				// 	image: '/static/avatars/caleb.png',
 				// 	title: 'Caleb',
 				// 	desc: this.$t('member.Caleb')
 				// }, 
 				]
 			},
 			tabs() {
 				return [{
 					name: this.$t('menu.home')
 				}, {
 					name: this.$t('menu.product')
 				}, {
 					name: this.$t('menu.economicModel')
 				}, {
 					name: this.$t('menu.tokenAllocation')
 				},{
 					name: this.$t('menu.roadMap')
 				},{
 					name: this.$t('menu.developers')
 				}]
 			},
 			economicModels() {
 				return [{
 					num: 1,
 					text: this.$t('page.economic.model_1'),
 					highlight: true,
 					top: '19.53rpx',
 					left: '218.75rpx'
 				}, {
 					num: 2,
 					text: this.$t('page.economic.model_2'),
 					highlight: false,
 					top: '92.18rpx',
 					left: '244.53rpx'
 				}, {
 					num: 3,
 					text: this.$t('page.economic.model_3'),
 					highlight: false,
 					top: '162.5rpx',
 					left: '226.56rpx'
 				}, {
 					num: 4,
 					text: this.$t('page.economic.model_4'),
 					highlight: false,
 					top: '220.31rpx',
 					left: '182.03rpx'
 				}]
 			},
 			
 		},
 		methods: {
 			initialize () {
				document.body.addEventListener('mousedown', function(){
					let videoPlayer =document.getElementsByClassName("uni-video-video")[0]
					    videoPlayer.muted = false
					
				}, false);
			},
 			viewWhitepaper() {
 				uni.navigateTo({
 					// url: "/pages/common/pdfViewer/pdfViewer?url=https://d2n9tyap8kl1by.cloudfront.net/RICHVERSE-Whitepaper+1.22.pdf"
 					 url: "/pages/common/pdfViewer/pdfViewer?url=https://d2n9tyap8kl1by.cloudfront.net/Richverse+Web3-Whitepaper+.pdf"
 			    })
 			},
			tokenEconomic() {
 				uni.navigateTo({
 					 url: "/pages/common/pdfViewer/pdfViewer?url=https://d2n9tyap8kl1by.cloudfront.net/Richverse+Web3+Token+Economic+.pdf"
 			    })
 			},
			genesis() {
				uni.navigateTo({
					 url: "/pages/common/pdfViewer/pdfViewer?url=https://d2n9tyap8kl1by.cloudfront.net/%E3%80%8AGenesis%E3%80%8BNovice+manual.pdf"
				})
			},			
 			backGround(){
 				uni.navigateTo({
 					// url: "/pages/common/pdfViewer/pdfViewer?url=https://d2n9tyap8kl1by.cloudfront.net/RICHVERSE-Whitepaper+1.22.pdf"
 					url: "/pages/common/pdfViewer/pdfViewer?url=https://d2n9tyap8kl1by.cloudfront.net/The+GENESIS+Worldview.pdf"
 				})
 			},
			auditReport(){
				uni.navigateTo({
					url: "/pages/common/pdfViewer/pdfViewer?url=https://d2n9tyap8kl1by.cloudfront.net/REP-Richverse-Web3.0__final-20220411T070711Z.pdf"
				})
			},
 			navTo(href) {
 				if (href) {
 					window.open(href)
 				}
 			},
 			loadError(e) {
 				uni.showToast({
 					title: e.message,
 					icon: 'none'
 				})
 			},
 			play() {
 				this.videoContext.play()
 			},
 			upx2px(v) {
 				uni.upx2px(v)
 			},
 			economicChange(status) {
 				this.economicModelIdx = status
 			},
 			handleTabChange(idx) {
 				console.log('tabChange', idx)
 				uni.setNavigationBarTitle({
 					title: this.tabs[idx].name
 				})
 				document.querySelector(`#page${idx + 1}`).scrollIntoView({
 				  behavior: "smooth", // 定义动画过渡效果， "auto"或 "smooth" 之一。默认为 "auto"
 				  block: "center", // 定义垂直方向的对齐， "start", "center", "end", 或 "nearest"之一。默认为 "start"
 				  inline: "nearest" // 定义水平方向的对齐， "start", "center", "end", 或 "nearest"之一。默认为 "nearest"
 				})
 			},
 			handleAnimation(anim) {
 				console.log('anim create', anim)
 			},
 			handleModelClick(idx) {
 				this.economicModels.forEach(item => {
 					item.highlight = false
 				})
 				this.economicModels[idx].highlight = true
 				this.economicModelIdx = idx
 			},
 			tabChange(idx) {
 				this.tabIdx = idx
 			},
 			
 			tapPopup() {
 			    this.show = true;
 			},
 			cancel() {
 				this.show = false;
 			},
 			
 			
 			async requestAccount () {
 			    this.currentChainId = await ethereum.request({ method: 'eth_chainId' });
 				console.log(this.currentChainId,'currentChainId')
 			    try {
 			        if (this.currentChainId !== this.chainId && this.currentChainId !== this.testChainId && this.currentChainId !== '0x1' && this.currentChainId !== '0x38') {
 			          this.connectAccount();
 			        } else {
 			          const accounts = await ethereum.request({ method: 'eth_requestAccounts' });
 			          this.address = `${accounts[0]}`;
 					  this.addr = this.address.slice(0,4) + '...'+this.address.slice(-4)  
 			        }
 			        console.log(this.address,'address')
 			    }catch (e) {
 			        console.log('request accounts error:', e);	
 			    }	 
 			},
 			
 			async connectAccount () {
 			    try {
 			        if (this.currentChainId !== this.chainId  && this.currentChainId !== this.testChainId && this.currentChainId !== "0x1" && this.currentChainId !== "0x38") {
 			          this.address = this.$t('wrongNetwork');
 					  console.log('3')
 			        }else {
 			          const accounts = await ethereum.request({ method: 'eth_accounts' });
 			          this.address = `${accounts[0]}`;
 			        }
 			      } catch (e) {
 			        console.log('request accounts error:', e);
 			    }
 			},
 			
 			async switchToEtheruemChain () {
 				this.show = false;
 			    try {
 			        if (this.currentChainId !== this.chainId  && this.currentChainId !== this.testChainId && this.currentChainId !== "0x1" && this.currentChainId !== "0x38") {
 			          await ethereum.request({
 			            method: 'wallet_switchEthereumChain',
 			            params: [{ chainId: '0x38'}]
 			        })
 					this.requestAccount();
 			        this.currentChainId = await ethereum.request({ method: 'eth_chainId' });
 			        }
 			    } catch (e) {
 			        if (e.code === 4902) {
 			          try {
 			            await ethereum.request({
 			                method: 'wallet_addEthereumChain',
 			                params: [{
 								chainId: 0x38,
 								chainName: 'Binance Smart Chain Mainnet',
 								nativeCurrency: {
 									name: 'BNB',
 									symbol: 'bnb',
 									decimals: 18, 
 								},
 								rpcUrls: ["https://data-seed-prebsc-1-s2.binance.org:8545/"],
 								blockExplorerUrls: ['https://bscscan.com']
 			                }],
 							
 							// params: [{
 							// 	chainId: 0x61,
 							// 	chainName: 'Binance Smart Chain TestNet',
 							// 	nativeCurrency: {
 							// 	  name: 'BNB',
 							// 	  symbol: 'bnb',
 							// 	  decimals: 18,
 							// 	},          
 
 							// 	rpcUrls: ["https://bsc-dataseed1.ninicoin.io/"],
 							// 	blockExplorerUrls: ['https://testnet.bscscan.com']
 							// }]								
 														
 			            })
 			                this.currentChainId = await ethereum.request({ method: 'eth_chainId' });
 			            } catch (e) {
 			                console.log('add network error', e)
 							
 			            }
 			        }
 			    }
 				
 				
 			},
 			
 			callWalletConnect(){
 				this.show = false;
 				this.addr = 'connect';
 				let that = this;
 				// Create a connector
 				 walletConnector = new WalletConnect({
 				  bridge: "https://bridge.walletconnect.org", // Required
 				  qrcodeModal: QRCodeModal,
 				});
 				
 				// 检查是否已建立连接
 				if (walletConnector.connected) {
 					walletConnector.killSession().then().catch(a=>{
 						if(a.message == "Session currently connected"){
 							alert("1")
 						}
 					});
 				}
 				// 创建新的连接
 				walletConnector.createSession();
 				// 订阅连接事件 
 				walletConnector.on("connect", (error, payload) => {
 				  if (error) {
 				    throw error;
 				  }
 					 
 				  // 获取提供的帐户和链ID
 				  const { accounts, chainId } = payload.params[0];
 				  that.walletConnect.connected = true;
 				  that.walletConnect.account = accounts[0];
 				  that.walletConnect.chainId = chainId;
 				  that.account = that.walletConnect.account; 
 				  that.addr = that.account.slice(0,4) + '...'+that.account.slice(-4)			  
 				});
 				//监听 账户变更
 				walletConnector.on("session_update", (error, payload) => {
 				  if (error) {
 				    throw error;
 				  }
 				
 				  // 获取更新的帐户和链ID
 				  const { accounts, chainId } = payload.params[0];
 				  that.walletConnect.account = accounts[0];
 				  that.walletConnect.chainId = chainId;
 				  that.account = that.walletConnect.account;
 				  that.addr = that.account.slice(0,4) + '...'+that.account.slice(-4)
 				});
 				// 监听 连接断开
 				walletConnector.on("disconnect", (error, payload) => {
 				  if (error) {
 				    throw error;
 				  }
 					that.walletConnect.connected = false;
 					that.walletConnect.account = "";
 					that.walletConnect.chainId = "";
 					that.addr = 'connect';
 					
 				  // Delete connector
 				});
 			}
 
 			
 		}
 	}
 </script> 
 
 <style lang="scss" scoped>
 	.content-sm {
 		.footer {
 			position: relative;
 			// height: 138rpx;
 			background-color: #272727;
 			padding: 0 26rpx;
 			
 			.logo {
 				position: absolute;
 				width: 336rpx;
 				height: 90rpx;
 				top: -90rpx;
 				background-color: #000000;
 				display: flex;
 				justify-content: center;
 				align-items: center;
 				image {
 					width: 263rpx;
 					height: 70rpx;
 				}
 			}
 			
 			.category {
 				font-family: HarmonyOS_Sans_Black;
 				font-size: 16rpx;
 				color: #FFFFFF;
 				letter-spacing: 0;
 				line-height: 1;
 				font-weight: 900;
 				margin-right: 12rpx;
 			}
 			
 			.label {
 				font-family: PingFangSC-Medium;
 				font-size: 16rpx;
 				color: #FFFFFF;
 				letter-spacing: 0;
 				font-weight: 500;
 				// word-break: break-all;
 				// overflow: hidden;
 				// white-space: nowrap;
 				// text-overflow: ellipsis;
 				flex: 1;
 			}
 			
 			.audit {
 				align-self: stretch;
 				height: 100rpx;
 				.link {
 					cursor: pointer;
 				}
 				.label {
 					padding: 0 10rpx;
 					text-align: center;
 				}
 				.link-github {
 					image {
 						width: 40rpx;
 						height: 40rpx;
 						margin-right: 10rpx;
 					}
 					text {
 						font-family: PingFangSC-Medium;
 						font-size: 26rpx;
 						color: #FFFFFF;
 						letter-spacing: 0;
 						font-weight: 500;
 					}
 				}
 			}
 			
 			.link-wrapper {
 				flex-wrap: wrap;
 			}
 			
 			.item {
 				width: calc(33.3% - 40rpx);
 				height: 80rpx;
 				display: flex;
 				align-items: center;
 				cursor: pointer;
 				padding: 0 20rpx;
 			}
 			
 			.img-link {
 				width: 60rpx;
 				height: 60rpx;
 				margin-right: 10rpx;
 			}
 		}
 		.page8 {
 			display:  flex;
 			flex-direction: column;
 			align-items: center;
 				
 		}
 		.page7 {
 			background: url(/static/BJ-StrategicCooperation.png) 0 0 no-repeat;
 			background-size: 100% 100%;
 			// height: 711px !important;
 			margin-top: -50rpx;
 			padding-top: 70rpx;
 			padding-bottom: 120rpx;
 			.img-diamond {
 				width: 60rpx;
 				height: 60rpx;
 			}
 			.partner-wrapper {
 				margin-top: 35rpx;
 			}
 			.title-cooperation {
 				font-family: HarmonyOS_Sans_Black;
 				font-size: 24rpx;
 				color: #19FCAC;
 				letter-spacing: 0;
 				line-height: 1;
 				font-weight: 900;
 			}
 			.partner-logo {
 				width: calc((100% - 96px) / 5);
 				height: 53rpx;
 				margin: 16rpx;
 				background-color: #fff;
 			}
 		}
 
 		.page5 {
 			background: url(/static/BJ-Developers@3x.png) 0 0 no-repeat;
 			background-size: 100% 100%;
 			// padding-bottom: 52px;
 			// height: 717rpx;
 			padding-top: 80rpx;
 			.title-roadmap {
 				padding-left: 20rpx;
 				margin-bottom: 20rpx;
 				image {
 					width: 49rpx;
 					height: 38rpx;
 				}
 				.text-road {
 					font-family: HarmonyOS_Sans_Black;
 					font-size: 36rpx;
 					color: #19FCAC;
 					letter-spacing: 0;
 					text-align: right;
 					line-height: 1;
 					font-weight: 900;
 					margin-right: 20rpx;
 					margin-left: 10rpx;
 				}
 				.text-map {
 					font-family: HarmonyOS_Sans_Black;
 					font-size: 36rpx;
 					color: #FFFFFF;
 					letter-spacing: 0;
 					text-align: right;
 					line-height: 1;
 					font-weight: 900;
 				}
 				.text-swipe-tips {
 					color: #19FCAC;
 					font-size: 18rpx;
 				}
 				.img-swipe {
 					width: 38rpx;
 					height: 40rpx;
 					margin: 0 10rpx;
 					vertical-align: bottom;
 				}
 			}
 		}
 		.page4 {
 			background: url(/static/BJ-TokenAllocation@3x.png) 0 0 no-repeat;
 			background-size: 100% 100%;
 			height: 873rpx;
 			.pie-wrapper {
 				padding-top: 74rpx;
 			}
 			.digit-wrapper {
 				padding: 0 20rpx;
 				margin-top: 23rpx;
 			}
 			.digit-label {
 				font-family: HarmonyOS_Sans_Black;
 				font-size: 20rpx;
 				color: #19FCAC;
 				letter-spacing: 0;
 				line-height: 1.5;
 				font-weight: 900;
 			}
 			.digit-value {
 				font-family: HarmonyOS_Sans_Black;
 				font-size: 24rpx;
 				color: #19FCAC;
 				letter-spacing: 0;
 				line-height: 1.5;
 				font-weight: 900;
 			}
 			.btn-buy {
 				width: 158rpx;
 				height: 60rpx;
 			}
 			.btn-buy:not(:last-child) {
 				margin-right: 21rpx;
 			}
 			.title-token {
 				padding: 0 20rpx;
 				image {
 					width: 49rpx;
 					height: 38rpx;
 				}
 				.text-token {
 					font-family: HarmonyOS_Sans_Black;
 					font-size: 36rpx;
 					color: #19FCAC;
 					letter-spacing: 0;
 					text-align: right;
 					line-height: 1.3;
 					font-weight: 900;
 					margin-right: 20rpx;
 					margin-left: 10rpx;
 				}
 				.text-allocation {
 					font-family: HarmonyOS_Sans_Black;
 					font-size: 36rpx;
 					color: #FFFFFF;
 					letter-spacing: 0;
 					text-align: right;
 					line-height: 1.3;
 					font-weight: 900;
 				}
 				.desc {
 					font-family: PingFangSC-Regular;
 					font-size: 16rpx;
 					color: #B1B1B1;
 					letter-spacing: 0;
 					text-align: right;
 					line-height: 1.2;
 					font-weight: 400;
 					margin-top: 4rpx;
 					
 				}
 			}
 		}
 		.page3 {
 			padding: 50rpx 22rpx;
 			.img-model {
 				width: 49rpx;
 				height: 38rpx;
 				margin-right: 12rpx;
 			}
 			
 			.model-title-1 {
 				font-family: HarmonyOS_Sans_Black;
 				font-size: 36rpx;
 				color: #19FCAC;
 				letter-spacing: 0;
 				text-align: right;
 				line-height: 1.3;
 				font-weight: 900;
 				margin-right: 20rpx;
 			}
 			.model-title-2 {
 				font-family: HarmonyOS_Sans_Black;
 				font-size: 36rpx;
 				color: #fff;
 				letter-spacing: 0;
 				text-align: right;
 				line-height: 1.3;
 				font-weight: 900;
 			}
 			.model-text-desc {
 				font-family: PingFangSC-Regular;
 				font-size: 16rpx;
 				color: #B1B1B1;
 				letter-spacing: 0;
 				text-align: right;
 				line-height: 1.2;
 				font-weight: 400;
 				margin-top: 6rpx;
 				margin-bottom: 38rpx;
 			}
 			.text-economic {
 				align-self: flex-start;
 				font-size: 20rpx;
 				.num {
 					font-family: HarmonyOS_Sans_Bold;
 					font-size: 28rpx;
 					color: #FFFFFF;
 					letter-spacing: 0;
 					line-height: 32px;
 					font-weight: 700;
 				}
 				.tape {
 					margin-left: 11rpx;
 					height: 11rpx;
 					background-image: linear-gradient(270deg, rgba(0,0,0,0.00) 0%, #19FCAC 99%);
 				}
 			}
 		}
 		.page2 {
 			position: relative;
 			.img-kedu {
 				position: absolute;
 				left: 0;
 				bottom: 0;
 				width: 10rpx;
 				height: 103rpx;
 			}
 		}
 		
 		.page1 {
 			height: 777rpx;
 			position: relative;
 			video {
 				width: 100%;
 				height: 100%;
 			}
 			.btn-play {
 				width: 100rpx;
 				height: 100rpx;
 				position: absolute;
 				left: 50%;
 				top: 50%;
 				transform: translate(-50%, -50%);
 				z-index: 99;
 			}
 			.content {
 				position: absolute;
 				left: 0;
 				top: 50%;
 				transform: translateY(-50%);
 				right: 0;
 				z-index: 99;
 				padding-left: 62rpx;
 				.img-title {
 					width: 663rpx;
 				}
 				.text-subtitle {
 					margin-top: 30rpx;
 					margin-left: 20rpx;
 				}
 			}
 		}
 
 		.header-wrapper {
 			position: fixed;
 			left: 0;
 			right: 0;
 			top: 0;
 			z-index: 100;
 		}
 
 		.header {
 			background-color: rgba($color: #000000, $alpha: 0.72);
 			height: 96rpx;
 			padding: 0 20rpx;
 		}
 
 		.logo {
 			width: 248rpx;
 			height: 67rpx;
 			margin-right: 10rpx;
 		}
 
 		.img-lang {
 			width: 64rpx;
 			height: 43rpx;
 			margin-left: 10rpx;
 		}
 	}
 
 	.content-lg {
 		width: 100%;
 		overflow-x: auto;
 		margin: 0 auto;
 		
 			
 		.addr{
 			font-size: 6rpx;
 		}
 			
 		.btn-addr{
 			font-size: 12px;
 			color: #FFEF9C;
 		}
 		.btn-wallet {
 			display: flex;
 			align-items: center;
 			justify-content: center;
 			margin-right: 18.75rpx;
 			width: 58.59rpx;
 			height: 19.53rpx;
 			border: 1px solid rgba($color: #19FCAC, $alpha: 0.4);
 			border-radius: 1.17rpx;
 			image {
 				width: 10.54rpx;
 				height: 10.15rpx;
 				margin-right: 3.9rpx;
 			}
 			text {
 				font-family: OPPOSans-R;
 				font-size: 8.59rpx;
 				color: #FFEF9C;
 				letter-spacing: 0;
 				text-align: center;
 				line-height: 8.59rpx;
 				font-weight: 400;
 			}
 		}
 		.page8 {
 			// max-width: 1200px;
 			margin: auto;
 			display:  flex;
 			// justify-content: space-between;
 		    justify-content: space-evenly;
 			flex-wrap: wrap;
 		}
 		.page7 {
 			background: url(/static/BJ-StrategicCooperation.png) 0 0 no-repeat;
 			background-size: 100% 100%;
 			height: 277.73rpx !important;
 			margin-top: -49.21rpx;
 			padding-top: 49.21rpx;
 			.img-diamond {
 				width: 31.25rpx;
 				height: 31.25rpx;
 			}
 			.partner-wrapper {
 				margin-top: 31.25rpx;
 			}
 			.title-cooperation {
 				font-family: HarmonyOS_Sans_Black;
 				font-size: 21.48rpx;
 				color: #19FCAC;
 				letter-spacing: 0;
 				line-height: 42.96rpx;
 				font-weight: 900;
 			}
 			.partner-logo {
 				width: 115.23rpx;
 				height: 46.87rpx;
 				margin: 3.9rpx;
 			}
 		}
 		.page6 {
 			// height: 600rpx;
 		}
 		.page5 {
 			background: url(/static/BJ-Developers@3x.png) 0 0 no-repeat;
 			background-size: 100% 100%;
 			padding-bottom: 22rpx;
 			// height: 394rpx;
 			padding-top: 39.06rpx;
 			.title-roadmap {
 				margin-bottom: 50.78rpx;
 				image {
 					width: 38.28rpx;
 					height: 28.9rpx;
 				}
 				.text-road {
 					font-family: HarmonyOS_Sans_Black;
 					font-size: 34rpx;
 					color: #19FCAC;
 					letter-spacing: 0;
 					text-align: right;
 					line-height: 34rpx;
 					font-weight: 900;
 					margin-right: 7.81rpx;
 					margin-left: 3.9rpx;
 				}
 				.text-map {
 					font-family: HarmonyOS_Sans_Black;
 					font-size: 34rpx;
 					color: #FFFFFF;
 					letter-spacing: 0;
 					text-align: right;
 					line-height: 34rpx;
 					font-weight: 900;
 				}
 			}
 			/deep/ svg {
 				vertical-align: top;
 			}
 		}
 		.page4 {
 			background: url(/static/BJ-TokenAllocation@3x.png) 0 0 no-repeat;
 			background-size: 100% 100%;
 			padding: 3.9rpx 59.37rpx 0 59.37rpx;
 			height: 419.53rpx;
 			.digit-label {
 				font-family: HarmonyOS_Sans_Black;
 				font-size: 15.62rpx;
 				color: #19FCAC;
 				letter-spacing: 0;
 				line-height: 1.5;
 				font-weight: 900;
 			}
 			.digit-value {
 				font-family: HarmonyOS_Sans_Black;
 				font-size: 15.62rpx;
 				color: #19FCAC;
 				letter-spacing: 0;
 				line-height: 1.5;
 				font-weight: 900;
 			}
 			.btn-buy {
 				width: 82.03rpx;
 				height: 26.17rpx;
 				margin-top: 11.71rpx;
 			}
 			.btn-buy:not(:last-child) {
 				margin-right: 21rpx;
 			}
 			.title-token {
 				image {
 					width: 38.28rpx;
 					height: 28.9rpx;
 				}
 				.text-token {
 					font-family: HarmonyOS_Sans_Black;
 					font-size: 34rpx;
 					color: #19FCAC;
 					letter-spacing: 0;
 					text-align: right;
 					line-height: 1.3;
 					font-weight: 900;
 					margin-right: 7.81rpx;
 					margin-left: 3.9rpx;
 				}
 				.text-allocation {
 					font-family: HarmonyOS_Sans_Black;
 					font-size: 34rpx;
 					color: #FFFFFF;
 					letter-spacing: 0;
 					text-align: right;
 					line-height: 1.3;
 					font-weight: 900;
 				}
 				.desc {
 					font-family: PingFangSC-Regular;
 					font-size: 6.25rpx;
 					color: #B1B1B1;
 					letter-spacing: 0;
 					text-align: right;
 					line-height: 9.37rpx;
 					font-weight: 400;
 				}
 			}
 		}
 		.page3 {
 			background: url(/static/BJ-EconomicModel@3x.png) 0 0 no-repeat;
 			background-size: 100% 100%;
 			padding-right: 59.37rpx;
 			padding-left: 7.81rpx;
 			.img-model {
 				width: 38.28rpx;
 				height: 28.9rpx;
 				margin-right: 5.85rpx;
 			}
 			
 			.model-title-1 {
 				font-family: HarmonyOS_Sans_Black;
 				font-size: 34rpx;
 				color: #19FCAC;
 				letter-spacing: 0;
 				text-align: right;
 				line-height: 1.3;
 				font-weight: 900;
 				margin-right: 15rpx;
 			}
 			.model-title-2 {
 				font-family: HarmonyOS_Sans_Black;
 				font-size: 34rpx;
 				color: #fff;
 				letter-spacing: 0;
 				text-align: right;
 				line-height: 1.3;
 				font-weight: 900;
 			}
 			.model-text-desc {
 				font-family: PingFangSC-Regular;
 				font-size: 6.25rpx;
 				color: #B1B1B1;
 				letter-spacing: 0;
 				text-align: right;
 				line-height: 9.37rpx;
 				font-weight: 400;
 				margin-top: 3.9rpx;
 			}
 		}
 		.page2 {
 			padding-left: 59.37rpx;
 			height: 401.95rpx;
 			position: relative;
 			.img-kedu {
 				position: absolute;
 				left: 0;
 				bottom: 0;
 				width: 9.76rpx;
 				height: 100.39rpx;
 			}
 		}
 
 		.page1 {
 			height: 402.73rpx;
 			.text-subtitle {
 				margin-top: 15.62rpx;
 				font-family: PingFangSC-Regular;
 				font-size: 7.81rpx;
 				color: #B1B1B1;
 				letter-spacing: 0;
 				line-height: 1;
 				font-weight: 400;
 			}
 			video {
 				width: 750rpx;
 				height: 402.73rpx;
 			}
 			.btn-play {
 				width: 50rpx;
 				height: 50rpx;
 				position: absolute;
 				left: 50%;
 				top: 50%;
 				transform: translate(-50%, -50%);
 				z-index: 99;
 				// opacity: 0.9;
 			}
 			.content {
 				position: absolute;
 				left: 0;
 				// top: 0;
 				top: 50%;
 				padding-left: 59.37rpx;
 				transform: translateY(-50%);
 				right: 0;
 				// bottom: 0;
 				z-index: 99;
 				.img-title {
 					width: 300.39rpx;
 				}
 				.text-subtitle {
 					margin-top: 33.98rpx;
 					margin-left: 10.93rpx;
 				}
 			}
 		}
 
 		.img-title {
 			width: 55%;
 		}
 
 		.footer {
 			position: relative;
 			height: 98.82rpx;
 			.logo {
 				position: absolute;
 				width: 123.82rpx;
 				height: 32.03rpx;
 				top: -32.03rpx;
 				background-color: #000000;
 				display: flex;
 				justify-content: center;
 				align-items: center;
 				image {
 					width: 80.07rpx;
 					height: 21.48rpx;
 				}
 			}
 			
 			.category {
 				font-family: HarmonyOS_Sans_Black;
 				font-size: 15.62rpx;
 				color: #19FCAC;
 				letter-spacing: 0;
 				line-height: 1;
 				font-weight: 900;
 				margin-right: 20.31rpx;
 			}
 			
 			.item {
 				width: 14.3%;
 				height: 44.14rpx;
 				display: flex;
 				justify-content: center;
 				align-items: center;
 				cursor: pointer;
 			}
 			
 			.label {
 				font-family: PingFangSC-Medium;
 				font-size: 11.71rpx;
 				color: #FFFFFF;
 				letter-spacing: 0;
 				font-weight: 500;
 			}
 
 			.img-link {
 				width: 31.25rpx;
 				height: 31.25rpx;
 				margin-right: 7.42rpx;
 			}
 			
 			.audit {
 				padding: 0 26rpx;
 				align-self: stretch;
 				.link {
 					cursor: pointer;
 				}
 				.link-github {
 					image {
 						width: 17.18rpx;
 						height: 17.18rpx;
 						margin-right: 3.9rpx;
 					}
 					text {
 						font-family: PingFangSC-Medium;
 						font-size: 11.71rpx;
 						color: #FFFFFF;
 						letter-spacing: 0;
 						font-weight: 500;
 					}
 				}
 			}
 		}
 
 		.header-wrapper {
 			padding: 8.2rpx;
 			position: fixed;
 			left: 0;
 			right: 0;
 			z-index: 99;
 		}
 
 		.header {
 			background: rgba(23,23,23,0.86);
 			height: 29.68rpx;
 			padding: 0 3.9rpx 0 19.53rpx;
 			
 			.tab-box {
 				margin-left: 39.06rpx;
 			}
 				
 			.popup{
 				position: fixed;
 				width: 160rpx;
 				top: 50%;
 				left: 50%;
 				transform: translate(-50%,-50%);
 				font-size: 30rpx;
 				padding: 20rpx;
 				border-radius: 20rpx;
 				background-color: #fff;
 				z-index: 9999;
 			    // background-color:rgba(23, 23, 23, 0.86);
 				background-color:#000000;
 				
 						
 				.popup-top{
 					display: flex;
 					justify-content: space-between;
 					border-bottom: 1px solid #F0F0F0;
 					padding-bottom: 4rpx;
 						
 					.popup-title{
 						color:rgba(25, 252, 172, 0.7);
 						font-size: 10rpx;
 					}
 						
 					.popup-btn{
 						width: 20rpx ;
 						background-color:#000000;
 						margin: 0rpx;
 						padding: 0rpx;
 						margin-top: -6px;
 						color:rgba(25, 252, 172, 0.8);
 					}	
 					
 					button::after { border: none }	
 				}
 					
 				.popup-center{
 					display: flex;
 				    // flex-wrap: wrap;
 					// justify-content: center;
 					margin: 20rpx 0;
 						
 					.list{
 						width: 60rpx;
 						height: 60rpx;
 						text-align: center;
 						cursor: pointer;
 						margin: 20px;
 							
 						.list-img{
 							width: 30rpx;
 							height: 30rpx;
 						}
 						
 						.list-type{
 							color:rgba(25, 252, 172, 0.7);
 							font-size: 8rpx;
 						}
 						
 					}
 				}	
 					
 				.bottom-btn{
 					background-color: rgba(25, 252, 172, 0.4);
 					border: 1px solid rgba(25, 252, 172, 0.4);
 					border-radius: 10rpx;
 						
 					.bottom-btn{
 						font-size: 8rpx;
 						text-align: center;
 						height: 18rpx;
 						line-height: 18rpx;
 							
 						a{
 							text-decoration:none;
 							color: #feff9c;
 						}
 					}
 					
 				}
 				
 			}
 		}
 
 		.logo {
 			width: 96.87rpx;
 			height: 26.17rpx;
 			margin-right: 3.9rpx;
 		}
 		
 	}
 	
 		
 
 </style>
