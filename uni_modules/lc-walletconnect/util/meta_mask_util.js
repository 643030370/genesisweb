export default {
	/**************************************************************************/
	// import metaMaskUtil from "../../util/metaMaskUtil.js";
	// var Web3 = require('web3');
	// var provider = null;
	// if (typeof window.ethereum !== 'undefined' || (typeof window.web3 !== 'undefined')) {
	// 	provider = window['ethereum'] || window.web3.currentProvider;
	// 	web3 = new Web3(provider); 
	// }
	/**************************************************************************/
	// 需要安装web3
	//npm install web3
	/**************************************************************************/
	//vue
	//metaMaskWallet:metaMaskUtil.data(),
	/**************************************************************************/
	// html**********************************************************************/
	// <button @click="metaMaskAuth">metaMask授权</button>
	// {{metaMaskWallet}}
	// <button @click="contractTransfer">metaMask代币转账(solr)</button>
	// <button type="primary" @click="transfer">metaMask主币转账</button>
	/*****************************************************************************/
	
	/**
	 * 构建metaMask主币转账 参数
	 */ 
	biuldTx(number,to){
		let that = this;
		let wei = 18; //币 精度
		let value = Math.pow(10, wei) * number;//计算精本位
		value = value.toString(16);
		let param = {
			from: that.metaMaskWallet.account, //从当前钱包开始转账
			to, //转账地址
			value
		}
		return [param];
	},
	/**
	 * MetaMask主币转账
	 */
	transfer(){
		let that = this;
		let param = that.biuldTx(0.00001,"0x9158D63b74dE4Aef6695B41F61B313f93f3cE6AE");
		that.transferAsync(param,(err,res)=>{
			
		});
	},
	//监听metamask账号切换
	/**
	 * 监听metamask账号切换
	 */
	data(){
		return  {
			auth: false,//是否连接到了 metaMask 钱包
			account: "",//当前钱包地址 | 账号
			chainId:""//网络ID
		}
	},
	/**
	 * 监听metaMask账号变更
	 */
	metaMaskAccountsChanged() {
		let that = this;
		ethereum.on("accountsChanged", function(accounts) {
			let account = accounts[0];
			that.metaMaskWallet.account = account;
			uni.showToast({
				title: "切换钱包" + account,
				icon: "none"
			})
		});
	},
	
	/**
	 * MetaMask 转账 异步
	 */
	transferAsync(param,callback){
		let that = this;
		ethereum.sendAsync({
		 method: 'eth_sendTransaction',
		 params: param,
		 from: that.metaMaskWallet.account,
		}, function (err, result) {
			if(typeof callback == "function"){
				callback(err, result)
			}
		  if(err){
			  alert("转账失败")
		  }else{
			  alert("转咋啊搜噶麓山国际,"+result.result);
			  console.log("txid",result.result);
		  }
		}) 
	},
	
	/**
	 * metaMask合约转账
	 * @param {function} callback 
	 */
	contractTransfer(callback) {
		let that = this;
	 	let param = that.biuldContractTx(0.01,"0x9158D63b74dE4Aef6695B41F61B313f93f3cE6AE","0xB86eBC957311e9D7C3861cF64f9c4b5D954d092F");
		// alert(JSON.stringify(params))
		console.log("params: " + JSON.stringify(param));
		//异步调用
		that.transferAsync(param,callback);
		//同步调用
		// ethereum.send({
		// 	method: 'eth_sendTransaction',
		// 	params: [param],
		// 	from: that.metaMaskWallet.account, // Provide the user's account to use.
		// }).then(txid=>{
		// 	alert("txid=="+JSON.stringify(txid))
		// }).catch(error=>{
		// 	alert("error=="+error.message);
		// })
	},
	/**
	 * 构建合约转账数据 tx
	 */
	biuldContractTx(number,to,contractAddress) {
		let that = this;
		let wei = 6; //币 精度
		let value = Math.pow(10, wei) * number;
		let data = "0xa9059cbb" + "" + "000000000000000000000000" +
			to.substring(2, 42) + "";
		value = value.toString(16);
		let data_last = "";
		for (let i = 1; i <= (64 - value.length); i++) {
			data_last += "0";
		}
		data = (data + data_last + value).toLowerCase();
		let param = {
			from: that.metaMaskWallet.account, //从当前钱包开始转账
			to: contractAddress, //先转账到合约地址
			data,
		}
		return [param];
	},
	/**
	 * @param {Object} callback
	 * MetaMask 授权
	 */
	metaMaskAuth(callback) {
		let that = this;
		//判断用户是否安装MetaMask钱包插件
		if (typeof(window.ethereum) == "undefined") {
			// alert("请安装metaMask钱包")
		} else {
			//如果用户安装了MetaMask，你可以要求他们授权应用登录并获取其账号
			ethereum.enable().catch(function(reason) {
				//如果用户拒绝了登录请求
				if (reason === "User rejected provider access") {
					// 用户拒绝登录后执行语句；
					uni.showToast({
						title: "用户拒绝了授权...",
						icon: "none"
					})
				} else {
					// 本不该执行到这里，但是真到这里了，说明发生了意外
					uni.showModal({
						title: "错误",
						content: "程序发生未知错误,请截图发给管理员!!!" + JSON.stringify(reason)
					})
				}
			}).then(function(accounts) {
				// 判断是否连接以太
				// if (ethereum.networkVersion !== desiredNetwork) {}
				uni.showToast({
					title: "metaMask钱包授权成功...",
					icon: "none"
				})
				that.metaMaskWallet.auth = true;
				that.metaMaskWallet.account = ethereum.selectedAddress;
				that.metaMaskWallet.chainId = ethereum.networkVersion;
				//监听账号变更
				that.metaMaskAccountsChanged();
			});
		}
	}
	
}
