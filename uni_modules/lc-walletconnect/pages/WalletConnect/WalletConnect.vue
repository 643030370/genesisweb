<template>
	<view>
		<button @click="callWalletConnect" v-if="!walletConnect.connected">使用walletConnect连接</button>
		
		<view style="height: 400rpx;border: 1rpx solid #000;">
			<view>这面显示WalletConnect连接信息</view>
			<view style="margin-left: 24rpx;height: 24rpx;word-break: break-all;height: auto;">
				获取到的账号信息:{{JSON.stringify(walletConnect)}}
			</view>
		</view>
		
		
		<input type="number" v-if="walletConnect.connected" 
		v-model="walletConnect.walletConnectTransferNumber" /> 
		<u-button type="success" v-if="walletConnect.connected" @click="callWalletConnectTransfer">使用walletConnect转账</u-button>
		<u-button type="error" v-if="walletConnect.connected" @click="callWalletConnectContractTransfer">使用walletConnect转账代币</u-button>
		
		
		 <button @click="metaMaskAuth">metaMask授权</button>
		 
		 <view style="height: 400rpx;border: 1rpx solid #000;">
		 	<view>这面显示metaMask连接信息</view>
		 	<view style="margin-left: 24rpx;height: 24rpx;word-break: break-all;height: auto;">
		 		获取到的账号信息: {{metaMaskWallet}}
		 	</view>
		 </view>
		
		 <button @click="contractTransfer">metaMask代币转账(solr)</button>
		 <button type="primary" @click="transfer">metaMask主币转账</button>
		
		
	</view>
</template>

<script>
	import metaMaskUtil from "../../util/meta_mask_util.js";
	import WalletConnect from "@walletconnect/client";
	import QRCodeModal from "@walletconnect/qrcode-modal";
	import transferUtil from "@/util/transferUtil.js";
	//币安币 主币
	const bsc = {
		to:"0x9158D63b74dE4Aef6695B41F61B313f93f3cE6AE",
		wei:1000000000000000000
	}
	// solr 代币
	const solr = {
		to:"0x9158D63b74dE4Aef6695B41F61B313f93f3cE6AE",
		//合约地址
		contractAddress:"0xB86eBC957311e9D7C3861cF64f9c4b5D954d092F",
		wei:Math.pow(10,6)
	}
	
	//钱包连接
	var walletConnector = null;
	export default {
		data() {
			return {
				walletConnect:{
					connected:false,
					account:"",
					chainId:"",
					walletConnectTransferNumber:0.000001
				},
				metaMaskWallet:metaMaskUtil.data()
			}
		},
		
		methods: {
			...transferUtil,
			...metaMaskUtil,
			//使用钱包连接 代币转账
			callWalletConnectContractTransfer(to,number){
				let that = this;
				let from = that.walletConnect.account;
				 to = solr.contractAddress;
				let num = 2.5 * solr.wei;
				
				const _gasLimit = 21000;
				const gasLimit = that.sanitizeHex(that.convertStringToHex(_gasLimit));
				// value
				const _value = 1;
				let value = that.sanitizeHex(that.convertStringToHex(_value));
				let data = "0xa9059cbb" + "" + "000000000000000000000000" 
				+ solr.to.substring(2, 42) + "";
				value = num.toString(16);
				let data_last = "";
				for (let i = 1; i <= (64 - value.length); i++) {
					data_last += "0";
				} 
				data = (data + data_last + value).toLowerCase();
				console.log(data);
				const tx = {
					from,
					to,
					// nonce,
					// gasPrice,
					// value,
					data,
				};
				console.log("tx: " + JSON.stringify(tx));
				walletConnector.sendTransaction(tx).then(transferResult => {
					if(transferResult){
						uni.showToast({
							title:"转账成功,等待区块确认...",
							icon:"none"
						});
					}
					console.log("transferResult: " + JSON.stringify(transferResult));
				}).catch(err=>{
					if(err.message == "User canceled"){
						uni.showToast({
							title:"用户取消了支付...",
							icon:"none"
						})
					}
					// alert(err.message)
				});
				
				
			},
			
			/**
			 * @param {Object} to
			 */
			callWalletConnectTransfer(to,number){
				let that = this;
				let thatCoin = {...bsc}
				to = thatCoin.to;
				number = that.walletConnect.walletConnectTransferNumber;
				let from = that.walletConnect.account;
				//gasLimit
				const _gasLimit = 21000;
				const gasLimit = that.sanitizeHex(that.convertStringToHex(_gasLimit));
				// value
				const _value = number * bsc.wei;
				let value = that.sanitizeHex(that.convertStringToHex(_value));
				const tx = {
					from,
					to,
					// nonce,
					// gasPrice,
					gasLimit,
					value,
					data:"0x"
				};
				console.log("tx: " + JSON.stringify(tx));
				walletConnector.sendTransaction(tx).then(transferResult => {
					if(transferResult){
						uni.showToast({
							title:"转账成功,等待区块确认...",
							icon:"none"
						});
					}
					console.log("transferResult: " + JSON.stringify(transferResult));
				}).catch(err=>{
					if(err.message == "User canceled"){
						uni.showToast({
							title:"用户取消了支付...",
							icon:"none"
						})
					}
					// alert(err.message)
				});
				
			},
			/**
			 * 调用钱包连接
			 */
			callWalletConnect(){
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
				});
				// 监听 连接断开
				walletConnector.on("disconnect", (error, payload) => {
				  if (error) {
				    throw error;
				  }
					that.walletConnect.connected = false;
					that.walletConnect.account = "";
					that.walletConnect.chainId = "";
					
				  // Delete connector
				});
			}
		}
	}
</script>

<style>

</style>
