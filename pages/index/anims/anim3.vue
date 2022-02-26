<template>
	<view class="anim-item">
		<lottie :options="defaultOptions"  :height="481" v-on:animCreated="handleAnimation" />
		<view class="title">{{$t('page.homeAnims.title3')}}</view>
		<view class="desc">{{$t('page.homeAnims.desc3')}}</view>
	</view>
</template>

<script>
	import anim3 from "@/static/anims/anims3.json";
	export default {
		data(){
		    return {
		        defaultOptions: { animationData: anim3 },
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
