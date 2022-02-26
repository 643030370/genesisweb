<template>
	<view class="anim-item">
		<lottie :options="defaultOptions"  :height="481" v-on:animCreated="handleAnimation" />
		<view class="title">{{$t('page.homeAnims.title6')}}</view>
		<view class="desc">{{$t('page.homeAnims.desc6')}} </view>
	</view>
</template>

<script>
	import anim6 from "@/static/anims/anims6.json";
	export default {
		data(){
		    return {
		        defaultOptions: { animationData: anim6 },
		        animationSpeed: 1,
		        anim: {}
		    }
		},
		
		methods: {
			handleAnimation(anim){
			   this.anim = anim;
			 },
		}
	}
	
</script>


<style scoped>
  @import './anim.css';
</style>
