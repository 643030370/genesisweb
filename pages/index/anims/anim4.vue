<template>
	<view class="anim-item">
		<lottie :options="defaultOptions"  :height="481" v-on:animCreated="handleAnimation" />
		<view class="title">{{$t('page.homeAnims.title4')}}</view>
		<view class="desc"> {{$t('page.homeAnims.desc4')}} </view>
	</view>
</template>

<script>
	import anim4 from "@/static/anims/anims4.json";
	export default {
		data(){
		    return {
		        defaultOptions: { animationData: anim4 },
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
