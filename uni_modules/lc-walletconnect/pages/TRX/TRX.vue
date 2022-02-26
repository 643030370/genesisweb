<template>
	<div class="hello" style="width: 80%;margin: 0px auto;">
		<h1>{{ msg }}</h1>
		<view style="word-break: break-all;">我的钱包地址:{{walletAddress}}</view>
		<button @click="linkWallet">
			连接钱包
		</button>
		<button @click="getBalance">
			获取钱包余额
		</button>
		<button @click="transaction">
			TRX转账交易
		</button>
		<button @click="transactionToken">
			TRX-ERC20转账交易
		</button>
		<button @click="transactionContract">
			合约方法调用
		</button>
	</div>
</template>

<script>
	export default {
		name: 'HelloWorld',
		data() {
			return {
				msg: 'tron-web-dapp',
				tronWeb: null,
				walletAddress: null
			}

		},
		mounted() {
			if (window.tronWeb) {
				this.tronWeb = window.tronWeb;
				console.log(this.tronWeb)
				this.walletAddress = this.tronWeb.defaultAddress.base58;
				// alert(this.walletAddress)
			}
		},
		methods: {
			linkWallet() {

				try {
					if (window.tronWeb) {
						this.tronWeb = window.tronWeb;
						console.log(window.tronWeb)
						this.walletAddress = this.tronWeb.defaultAddress.base58;
						console.log(this.tronWeb.defaultAddress.base58)
					} else {

					}
				} catch (e) {
					//TODO handle the exception
					alert(e.message)
				}
			},
			//查询钱包余额
			async getBalance() {
				//当前连接的钱包地址获取 window.tronWeb.defaultAddress.base58
				var balance = await this.tronWeb.trx.getBalance(this.walletAddress);
				console.log("balance=", balance)
				alert(balance / Math.pow(10, 6))
			},
			//trx转账交易
			async transaction() {
				try {
					var tx = await this.tronWeb.transactionBuilder.sendTrx(
						"TFTKKkRxDDQpy8WEyeLKGUMBNWv2Z8ips7", 0.01 * Math.pow(10, 6), this.walletAddress
					);
					var signedTx = await this.tronWeb.trx.sign(tx);
					var broastTx = await this.tronWeb.trx.sendRawTransaction(signedTx);
					if (broastTx.result) {

						let {
							txid
						} = broastTx;
						alert("txid==" + txid)
						// alert(JSON.stringify(broastTx));  
					}
				} catch (e) {
					//TODO handle the exception
					alert(e)
				}

			},
			//trx-token转账交易
			async transactionToken() {

				//转账方式1

				// let contract = await this.tronWeb.contract().at("TR7NHqjeKQxGTCi8q8ZY4pL8otSzgjLj6t");
				// let result = await contract.transfer(
				// 	"TFTKKkRxDDQpy8WEyeLKGUMBNWv2Z8ips7",
				// 	1
				// 	// this.tronWeb.toHex(0.1 * Math.pow(10,6))
				// ).send({
				// 	feeLimit: 10000000
				// }).then(output => {
				// 	alert("合约转账" + JSON.stringify(output))
				// 	console.log('- Output:', output, '\n');
				// });
				// console.log('result: ', result);
				// // alert(JSON.stringify(result))

				//转账方式2
				// const parameter = [{
				// 	type: 'address',
				// 	value: 'TFTKKkRxDDQpy8WEyeLKGUMBNWv2Z8ips7'
				// }, {
				// 	type: 'uint256',
				// 	value: this.tronWeb.toHex(1 * Math.pow(10, 6))
				// }]
				// var tx = await this.tronWeb.transactionBuilder.triggerSmartContract(
				// 	"TR7NHqjeKQxGTCi8q8ZY4pL8otSzgjLj6t", "transfer(address,uint256)", {}, parameter, this
				// 	.walletAddress);
				// var signedTx = await this.tronWeb.trx.sign(tx.transaction);
				// var broastTx = await this.tronWeb.trx.sendRawTransaction(signedTx);
				// console.log(broastTx)

				// let contract = await this.tronWeb.contract().at("TR7NHqjeKQxGTCi8q8ZY4pL8otSzgjLj6t");
				//  let result1 = await contract.decimals().call();
				//  console.log('result: ', result1);
			},
			//调用合约中的方法
			async transactionContract() {
				try {
					//调用方式1
					// let contract = await this.tronWeb.contract().at("TR7NHqjeKQxGTCi8q8ZY4pL8otSzgjLj6t");

					// console.log("contract=", contract)
					// let result = await contract.registrationExt(
					// 	"TFTKKkRxDDQpy8WEyeLKGUMBNWv2Z8ips7"
					// ).send({
					// 	callValue: this.tronWeb.toHex(1 * Math.pow(10, 6)), //发送TRX余额
					// 	feeLimit: 10000000
					// }).then(output => {
					// 	alert(output)
					// 	console.log('- Output:', output, '\n');
					// }).catch(e => {
					// 	alert(e.message)
					// });
					// alert(result)
					// console.log('result: ', result)



					// 调用方式2
					const parameter = [{
						type: 'address',
						value: 'TFTKKkRxDDQpy8WEyeLKGUMBNWv2Z8ips7'
					}];
					var tx = await this.tronWeb.transactionBuilder.triggerSmartContract(
						"TR7NHqjeKQxGTCi8q8ZY4pL8otSzgjLj6t",
						"registrationExt(address)", {},
						parameter,
						this.walletAddress
					);
					var signedTx = await this.tronWeb.trx.sign(tx.transaction);
					var broastTx = await this.tronWeb.trx.sendRawTransaction(signedTx);
					console.log(broastTx)

				} catch (e) {
					alert(e)
					//TODO handle the exception
				}


			}
		}
	}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
	h1,
	h2 {
		font-weight: normal;
	}

	ul {
		list-style-type: none;
		padding: 0;
	}

	li {
		display: inline-block;
		margin: 0 10px;
	}

	a {
		color: #42b983;
	}
</style>
