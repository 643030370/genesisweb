<template>
	<view class="img">
		<u-upload ref="uUpload" :action="uploadAction" :file-list="fileList" :multiple="isMultiple" :header="headers"
			:form-data="{biz:bizPath}" :before-upload="beforeUpload" :disabled="disabled" :max-count="number"
			@on-change="handleChange" @on-remove="handleDelete"></u-upload>
	</view>
</template>

<script>
	import baseUrl from "@/common/baseUrl.js"

	const uidGenerator = () => {
		return '-' + parseInt(Math.random() * 10000 + 1, 10);
	}
	const getFileName = (path) => {
		if (path.lastIndexOf("\\") >= 0) {
			let reg = new RegExp("\\\\", "g");
			path = path.replace(reg, "/");
		}
		return path.substring(path.lastIndexOf("/") + 1);
	}
	export default {
		name: 'JImageUpload',
		data() {
			return {
				uploadAction: baseUrl.apiBaseUrl + "/sys/common/upload",
				uploadLoading: false,
				picUrl: false,
				headers: {},
				fileList: [],
				previewImage: "",
				previewVisible: false,
			}
		},
		props: {
			text: {
				type: String,
				required: false,
				default: "上传"
			},
			/*这个属性用于控制文件上传的业务路径*/
			bizPath: {
				type: String,
				required: false,
				default: "temp"
			},
			value: {
				type: [String, Array],
				required: false
			},
			disabled: {
				type: Boolean,
				required: false,
				default: false
			},
			isMultiple: {
				type: Boolean,
				required: false,
				default: false
			},
			//update-begin-author:wangshuai date:20201021 for:LOWCOD-969 新增number属性，用于判断上传数量
			number: {
				type: Number,
				required: false,
				default: 0
			}
			//update-end-author:wangshuai date:20201021 for:LOWCOD-969 新增number属性，用于判断上传数量
		},
		watch: {
			value: {
				handler(val, oldValue) {
					if (val instanceof Array) {
						this.initFileList(val.join(','))
					} else {
						this.initFileList(val)
					}
					if (!val || val.length == 0) {
						this.picUrl = false;
					}
				},
				//立刻执行handler
				immediate: true
			}
		},
		created() {
			const token = uni.getStorageSync("uni_id_token")
			this.headers = {
				"X-Access-Token": token
			}
		},
		methods: {
			getFileAccessHttpUrl(avatar, subStr) {
				if (!subStr) subStr = 'http'
				try {
					if (avatar && avatar.startsWith(subStr)) {
						return avatar;
					} else {
						if (avatar && avatar.length > 0 && avatar.indexOf('[') == -1) {
							return baseUrl.apiBaseUrl + "/sys/common/static/" + avatar;
						}
					}
				} catch (err) {
					return;
				}
			},
			initFileList(paths) {
				if (!paths || paths.length == 0) {
					this.fileList = [];
					return;
				}
				this.picUrl = true;
				let fileList = [];
				let arr = paths.split(",")
				for (var a = 0; a < arr.length; a++) {
					let url = this.getFileAccessHttpUrl(arr[a]);
					fileList.push({
						uid: uidGenerator(),
						name: getFileName(arr[a]),
						status: 'done',
						error: false,
						progress: 100,
						url: url,
						response: {
							status: "history",
							message: arr[a]
						}
					})
				}
				this.$nextTick(() => {
					this.$refs.uUpload.lists = fileList
				})
			},
			beforeUpload(index, list) {
				let fileInfo = list[index]
				var fileType = fileInfo.file.type;
				if (fileType.indexOf('image') < 0) {
					uni.showToast({
						title: '请上传图片',
						icon: 'error'
					})
					return false;
				}
			},
			handleChange(res, index, lists, name) {
				this.picUrl = false;
				this.handlePathChange()
			},
			handlePathChange() {
				let uploadFiles = this.$refs.uUpload.lists
				let path = ''
				if (!uploadFiles || uploadFiles.length == 0) {
					path = ''
				}
				let arr = [];
				if (!this.isMultiple && uploadFiles.length > 0) {
					arr.push(uploadFiles[uploadFiles.length - 1].response.message)
				} else {
					for (let a = 0; a < uploadFiles.length; a++) {
						// update-begin-author:taoyan date:20200819 for:【开源问题z】上传图片组件 LOWCOD-783
						if (!uploadFiles[a].error) {
							arr.push(uploadFiles[a].response.message)
						} else {
							return;
						}
						// update-end-author:taoyan date:20200819 for:【开源问题z】上传图片组件 LOWCOD-783
					}
				}
				if (arr.length > 0) {
					path = arr.join(",")
				}
				this.$emit('change', path);
			},
			handleDelete(index, lists, name) {
				//如有需要新增 删除逻辑
				this.handlePathChange()
			},
			handleCancel() {
				this.close();
				this.previewVisible = false;
			},
			close() {

			},
		},
		model: {
			prop: 'value',
			event: 'change'
		}
	}
</script>

<style scoped>
	/* update--begin--autor:lvdandan-----date:20201016------for：j-image-upload图片组件单张图片详情回显空白
  * https://github.com/zhangdaiscott/jeecg-boot/issues/1810
  * https://github.com/zhangdaiscott/jeecg-boot/issues/1779
  */

	/deep/ .imgupload .iconp {
		padding: 20px;
	}

	/* update--end--autor:lvdandan-----date:20201016------for：j-image-upload图片组件单张图片详情回显空白*/

	/deep/ .image-upload-single-over .ant-upload-select {
		display: none
	}
</style>
