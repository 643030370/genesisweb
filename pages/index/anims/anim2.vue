<template>
	<view class="anim-item">
		<lottie :options="defaultOptions"   :height="481" v-on:animCreated="handleAnimation" />
		<view class="title">{{$t('page.homeAnims.title2')}}</view>
		<view class="desc">{{$t('page.homeAnims.desc2')}}</view>
	</view>
</template>

<script>
	import anim2 from "@/static/anims/anims2.json";
	export default {
		data(){
		    return {
		        defaultOptions: { animationData: anim2 },
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
