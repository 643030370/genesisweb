<template>
	<view class="anim-item">
		<lottie :options="defaultOptions"  :height="481" v-on:animCreated="handleAnimation" />
		<view class="title">{{$t('page.homeAnims.title1')}}</view>
		<view class="desc">{{$t('page.homeAnims.desc1')}}</view>
	</view>
</template>

<script>
	import anim1 from "@/static/anims/anims1.json";
	export default {
		data(){
		    return {
		        defaultOptions: { animationData: anim1 },
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
