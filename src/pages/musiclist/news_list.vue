<template>
	<div class="hot">
		<MusicList :url="hotMusicUrl"/>
	</div>
</template>

<script>
	import MusicList from "../../components/Music_List"
	export default{
		name:"hot",
		data(){
			return{
				hotMusicUrl:"/v1/restserver/ting?method=baidu.ting.billboard.billList&type=1&size=5&offset=0"
			}
		},
		components:{
			MusicList
		}
	}
</script>
	
<style>
</style>