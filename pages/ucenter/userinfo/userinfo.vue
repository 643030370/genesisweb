<template>
	<user-center></user-center>
</template>
<script>
	import {
		mapMutations,
		mapGetters
	} from 'vuex';
	export default {
		data() {
			return {
				
			}
		},
		computed: {
			...mapGetters({
				userInfo: 'user/info',
				login: 'user/hasLogin'
			}),
			avatar_file() {
				if (this.userInfo.avatar_file && this.userInfo.avatar_file.url) {
					return this.userInfo.avatar_file
				}
			}
		},
		methods: {
			...mapMutations({
				setUserInfo: 'user/login'
			}),
		}
	}
</script>
<style lang="scss" scoped>
	/* #ifndef APP-NVUE */
	view {
		display: flex;
		box-sizing: border-box;
		flex-direction: column;
	}
	/* #endif */
	.item {
		width: 750rpx;
		flex-direction: row;
		justify-content: space-between;
		align-items: center;
	}

	.avatarUrl {
		width: 50px;
		height: 50px;
		border-radius: 6px;
	}

	.chooseAvatar {
		border: solid 1px #ddd;
		border-radius: 10px;
		width: 130rpx;
		height: 130rpx;
		line-height: 130rpx;
	}
</style>
