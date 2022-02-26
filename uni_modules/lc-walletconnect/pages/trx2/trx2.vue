<template>
	<view>
		<button @click="run">执行trc20</button>
	</view>
</template>
<style lang="scss">
	
</style>
<script>
	alert(window.tronWeb)
	import usdt_trc20 from "../../util/trxUsdtUtil.js";
	// const ACCOUNT = "TL4RieYsviyN8XKBP6cGGfbveoyWtycTu5";
	usdt_trc20.get_balance("TL4RieYsviyN8XKBP6cGGfbveoyWtycTu5",balance=>{
		alert(balance)
	});
	
	
	usdt_trc20.transfer("TL4RieYsviyN8XKBP6cGGfbveoyWtycTu5",0.1,res=>{
		if(res){
			alert("交易成功,txid=="+res)
		}
	},err=>{
		if(err == "cancel"){
			alert("交易取消");
		}
		// alert(err)
	})
	
	// const CONTRACT = "TR7NHqjeKQxGTCi8q8ZY4pL8otSzgjLj6t";
	
	
	// async function main() {
	//     const {
	//         abi
	//     } = await tronWeb.trx.getContract(CONTRACT);
	//     // console.log(JSON.stringify(abi));
	
	//     const contract = tronWeb.contract(abi.entrys, CONTRACT);
	
	//     const balance = await contract.methods.balanceOf(ACCOUNT).call();
	//     console.log("balance:", balance.toString());
	// 	alert("他的余额=="+balance)
	//     const resp = await contract.methods.transfer(ACCOUNT, 1).send();
	//     console.log("transfer:", resp);
	// }
	
	// main().then(() => {
	//         console.log("ok");
	//     })
	//     .catch((err) => {
	//         console.log("error:", err);
	//     });
	export default {
		data() {
			return {
				
			}
				
		},
		methods: {
		 async	run(){
				try{
					var contractAddress = "TR7NHqjeKQxGTCi8q8ZY4pL8otSzgjLj6t";
					//选择合约方法
					let functionSelector = "transfer(address,uint256)"; 
					  //根据方法构造参数
					let parameter = [
						{type: "address",value: "TFTKKkRxDDQpy8WEyeLKGUMBNWv2Z8ips7"},
						{ type: "uint256", value: 0.1 * Math.pow(10,6) }
					];
					//额外参数
					let options = {
						 shouldPollResponse: false,
						 feeLimit: 1000000 //1Trx
					};
					// 构造智能合约交易信息
					let res = await tronWeb.transactionBuilder
					  .triggerSmartContract(contractAddress, functionSelector, options, parameter)
					    .catch(err1 => {
					     // 构建交易信息失败
						 alert("构建交易信息失败"+err1)
						  return false;
					    });
					// 向转账交易信息中追加 备注信息 
					await tronWeb.transactionBuilder.addUpdateData(res.transaction, "111", 'utf8');
					// 对已经添加备注的交易信息进行签名
					let sign = await tronWeb.trx.sign(res.transaction).catch(err2 => {
						//签名失败
						alert("签名失败=="+err2);
						return false;
					});
					// 将签名交易广播上链
					let transfer_res =  await tronWeb.trx.sendRawTransaction(sign).catch(outputErr => {
						//交易广播出错
						console.log(outputErr);
						alert("交易广播出错"+outputErr)
						return false;
					});
					alert(JSON.stringify(transfer_res));
				}catch(e){
					//TODO handle the exception
					alert(e.message)
				}
				
			}
		},
		onPageScroll(e) {
			
		}
		,
		onReady() {
		},
		onLoad() {
			
		}
	}
</script>


