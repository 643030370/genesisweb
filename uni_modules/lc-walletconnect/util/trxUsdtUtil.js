
//合约地址

const TRX_USDT_CONTRACT = "TR7NHqjeKQxGTCi8q8ZY4pL8otSzgjLj6t";

const ACCOUNT = "TL4RieYsviyN8XKBP6cGGfbveoyWtycTu5";



const UTRC20 = {
	 async get_balance(address,callback,err){
		 try{
		 	const {abi} = await tronWeb.trx.getContract(TRX_USDT_CONTRACT);
			const usdt_trc20_abi = abi;
		 	const trx_usdt_contract = tronWeb.contract(usdt_trc20_abi.entrys, TRX_USDT_CONTRACT);
		 	 const usdt_trc20_balance = await trx_usdt_contract.methods.balanceOf(address).call();
		 	 if(typeof callback == "function"){
					callback(usdt_trc20_balance)
		 	 }
		 }catch(e){
			 if(typeof(err) == "function"){
				 err(e);
			 }
		 	//TODO handle the exception
		 }
		
		  // return usdt_trc20_balance;
	},
	async transfer(address,num,callback,fail){
		try{
			const {abi} = await tronWeb.trx.getContract(TRX_USDT_CONTRACT);
			var usdt_trc20_abi = abi;
			const trx_usdt_contract = tronWeb.contract(usdt_trc20_abi.entrys, TRX_USDT_CONTRACT);
			  const resp = await trx_usdt_contract.methods.transfer(address, num * Math.pow(10,6)).send();
			  if(typeof callback == "function"){
			  		callback(resp)
			  }
		}catch(e){
			if(typeof fail == "function"){
				fail(e);
			}
		}
	}
}



export default {
	...UTRC20
}