<template>
	<view>
		<web-view :src="url"></web-view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				pdfUrl: 'https://d2n9tyap8kl1by.cloudfront.net/Whitepaper.pdf'
			}
		},
		computed: {
			url() {
				return `/static/pdfviewer/web/viewer.html?file=${this.pdfUrl}`
			}
		},
		onLoad(e) {
			if (e.url) {
				this.pdfUrl = e.url
			}
		},
		methods: {

		}
	}
</script>

<style>

</style>
