<template>
	<view class="session">
		<view class="ball-box">
			<view class="circle">
				<view class="item-box" :style="{transform: 'rotate('+ (this.rotateV+60) +'deg) translate('+ ($bigScreen?181:202) +'rpx) rotate(-'+(this.rotateV+60)+'deg)'}">
					<img class="icon" src='../../../static/icon-VR mining@2x.png'/>
				</view>
				<view class="item-box" :style="{transform: 'rotate('+ (this.rotateV+120) +'deg) translate('+($bigScreen?181:202)+'rpx) rotate(-'+(this.rotateV+120)+'deg)'}">
					<img class="icon" src='../../../static/icon-SOCIALFI@2x.png'/>
				</view>
				<view class="item-box" :style="{transform: 'rotate('+ (this.rotateV+180) +'deg) translate('+($bigScreen?181:202)+'rpx) rotate(-'+(this.rotateV+180)+'deg)'}">
					<img class="icon" src='../../../static/icon-gateway@2x.png'/>
				</view>
				<view class="item-box" :style="{transform: 'rotate('+ (this.rotateV+240) +'deg) translate('+($bigScreen?181:202)+'rpx) rotate(-'+(this.rotateV+240)+'deg)'}">
					<img class="icon" src='../../../static/icon-Market transactions@2x.png'/>
				</view>
				<view class="item-box" :style="{transform: 'rotate('+ (this.rotateV+300) +'deg) translate('+($bigScreen?181:202)+'rpx) rotate(-'+(this.rotateV+300)+'deg)'}">
					<img class="icon" src='../../../static/icon-NFT Concentrated Trading@2x.png'/>
				</view>
				<view class="item-box" :style="{transform: 'rotate('+ (this.rotateV+360) +'deg) translate('+($bigScreen?181:202)+'rpx) rotate(-'+(this.rotateV+360)+'deg)'}">
					<img class="icon" src='../../../static/icon-GAMEFI@2x.png'/>
				</view>
			</view>
			<view class="ball-anim">
				<lottie :options="defaultOptions"  v-on:animCreated="handleAnimation" />
			</view>
		</view>
	</view>
</template>

<script>
	import rotation from "@/static/anims/rotation.json";
	export default {
		data(){
		    return {
		        defaultOptions: { animationData: rotation },
		        animationSpeed: 1,
		        anim: {},
				rotateV: 0,
		    }
		},
		
		methods: {
			handleAnimation(anim){
			   this.anim = anim;
			 },
			
		  handleScroll() {
				let scrollTop = document.documentElement.scrollTop; //滚动高度
				let scrollHeight = document.body.scrollHeight;
				this.rotateV = scrollTop / scrollHeight *360;
		  },

		},
		mounted() {
		     this.$nextTick(() => {
		       window.addEventListener("scroll", this.handleScroll); // 监听（绑定）滚轮滚动事件
		     });
		},
		beforeDestroy() {
		    window.removeEventListener("scroll", this.handleScroll);
		  },
		
		
	}
	
</script>

<style lang="scss" scoped>
.content-sm {
	.session {
		width: 100%;
		position: relative;
	}
	.ball-box{
		margin: auto;
		// width: 1312px;  // 1px = 2.23rpx
		width: 656rpx;
		// height: 1312px;
		height: 656rpx;
		background: url(../../../static/BJ@2x.png) 0 0 no-repeat;
		background-size: 100% 100%;
		background-position: center;
		display: flex;
		justify-content: center;
		align-items: center;
	}
	.circle {
		// width: 808px;
		// height: 808px;
		width: 404rpx;
		height: 404rpx;
		border: 2px dashed #19FCAC;
		border-radius: 50%;
		position: relative;
	}
	.circle > * {
	  display: block;
	  position: absolute;
	  top: 50%;
	  left: 50%;
	  transition: all 0.05s linear;
	}
	
	.circle > *:nth-of-type(6) {
		// margin: -75px;
		margin: -34rpx;
	  // -webkit-transform: rotate(360deg) translate(404px) rotate(-360deg);
	  -webkit-transform: rotate(360deg) translate(202rpx) rotate(-360deg);
	}
	.circle > *:nth-of-type(5) {
		// margin: -75px -160px;
		// margin: -34rpx -72rpx;
		margin: -34rpx -98rpx;
	  // -webkit-transform: rotate(300deg) translate(404px) rotate(-300deg);
	  -webkit-transform: rotate(300deg) translate(202rpx) rotate(-300deg);
	}
	.circle > *:nth-of-type(4) {
		// margin: -75px -200px;
		// margin: -34rpx -90rpx;
		margin: -34rpx -74rpx;
	  // -webkit-transform: rotate(240deg) translate(404px) rotate(-240deg);
	  -webkit-transform: rotate(240deg) translate(202rpx) rotate(-240deg);
	}
	.circle > *:nth-of-type(3) {
		margin: -34rpx;
	  // -webkit-transform: rotate(180deg) translate(404px) rotate(-180deg);
	  -webkit-transform: rotate(180deg) translate(202rpx) rotate(-180deg);
	}
	.circle > *:nth-of-type(2) {
		margin: -34rpx;
	  // -webkit-transform: rotate(120deg) translate(404px) rotate(-120deg);
	  -webkit-transform: rotate(120deg) translate(202rpx) rotate(-120deg);
	}
	.circle > *:nth-of-type(1) {
		margin: -34rpx;
	  // -webkit-transform: rotate(60deg) translate(404px) rotate(-60deg);
	  -webkit-transform: rotate(60deg) translate(202rpx) rotate(-60deg);
	}
	
	.circle .item-box {
		.icon {
			// width: auto;
			// height: 200px;
			height: 74rpx;
			// object-fit: cover;
		}
		z-index: 2;
	}
	.ball-anim {
		// width: 527px;
		// height: 432px;
		width: 263.5rpx;
		height: 263.5rpx;
		position: absolute;
		top: 50%;
		left: 50%;
		// margin:  -216px -263px;
		margin:  -132rpx -132rpx;
		z-index:1;
	}
}
.content-lg {
	.session {
		width: 100%;
		position: relative;
	}
	.ball-box{
		margin: auto;
		// width: 1312px;  // 1px = 2.23rpx
		width: 588rpx;
		// height: 1312px;
		height: 588rpx;
		background: url(../../../static/BJ@2x.png) 0 0 no-repeat;
		background-size: 100% 100%;
		display: flex;
		justify-content: center;
		align-items: center;
	}
	.circle {
		// width: 808px;
		// height: 808px;
		width: 362rpx;
		height: 362rpx;
		border: 2px dashed #19FCAC;
		border-radius: 50%;
		position: relative;
	}
	.circle > * {
	  display: block;
	  position: absolute;
	  top: 50%;
	  left: 50%;
	  transition: all 0.05s linear;
	}
	
	.circle > *:nth-of-type(6) {
		// margin: -75px;
		margin: -34rpx;
	  // -webkit-transform: rotate(360deg) translate(404px) rotate(-360deg);
	  // -webkit-transform: rotate(360deg) translate(181rpx) rotate(-360deg);
	  transform: rotate(360deg) translate(181rpx) rotate(-360deg);
	}
	.circle > *:nth-of-type(5) {
		// margin: -75px -160px;
		// margin: -34rpx -72rpx;
		margin: -34rpx -92rpx;
	  // -webkit-transform: rotate(300deg) translate(404px) rotate(-300deg);
	  // -webkit-transform: rotate(300deg) translate(181rpx) rotate(-300deg);
	  transform:  rotate(300deg) translate(181rpx) rotate(-300deg);
	}
	.circle > *:nth-of-type(4) {
		// margin: -75px -200px;
		// margin: -34rpx -90rpx;
		margin: -34rpx -69rpx;
	  // -webkit-transform: rotate(240deg) translate(404px) rotate(-240deg);
	  // -webkit-transform: rotate(240deg) translate(181rpx) rotate(-240deg);
	  transform:  rotate(240deg) translate(181rpx) rotate(-240deg);
	}
	.circle > *:nth-of-type(3) {
		margin: -34rpx;
	  // -webkit-transform: rotate(180deg) translate(404px) rotate(-180deg);
	  // -webkit-transform: rotate(180deg) translate(181rpx) rotate(-180deg);
	  transform: rotate(180deg) translate(181rpx) rotate(-180deg);
	}
	.circle > *:nth-of-type(2) {
		margin: -34rpx;
	  // -webkit-transform: rotate(120deg) translate(404px) rotate(-120deg);
	  // -webkit-transform: rotate(120deg) translate(181rpx) rotate(-120deg);
	  transform:  rotate(120deg) translate(181rpx) rotate(-120deg);
	}
	.circle > *:nth-of-type(1) {
		margin: -34rpx;
	  // -webkit-transform: rotate(60deg) translate(404px) rotate(-60deg);
	  // -webkit-transform: rotate(60deg) translate(181rpx) rotate(-60deg);
	  transform:  rotate(60deg) translate(181rpx) rotate(-60deg);
	}
	
	.circle .item-box {
		.icon {
			// width: 100%;
			// height: 200px;
			// height: 90rpx;
			height: 69rpx;
			// object-fit: cover;
		}
	}
	.ball-anim {
		// width: 527px;
		// height: 432px;
		width: 236rpx;
		height: 193rpx;
		position: absolute;
		top: 50%;
		left: 50%;
		// margin:  -216px -263px;
		margin:  -97rpx -118rpx;
	}
}
</style>
