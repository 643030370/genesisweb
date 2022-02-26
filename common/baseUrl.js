let apiBaseUrl, h5BaseUrl

if(process.env.NODE_ENV === 'development'){
    // 开发环境
    apiBaseUrl = 'http://localhost:8080/jeecg-boot'
	h5BaseUrl = 'http://localhost:8081/#'
}else{
    // 生产环境
    apiBaseUrl = 'https://steamup.cn/jeecg-boot'
	h5BaseUrl = 'https://steamup.cn/#'
}

export default {
	apiBaseUrl: apiBaseUrl,
	h5BaseUrl: h5BaseUrl
}