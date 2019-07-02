<template lang="html">
	<div class="box">
		<TodayRecommend title="今日推荐" type="20"/>
		<NewsMusic/>
		<SwiperBanner/>
		<MusicListNav/>
		<keep-alive>
			<router-view/>
			<!-- 在音乐榜单视图层，添加<keep-alive> 缓存，
			每点击一次都会刷新，所以要用到缓存 -->
		</keep-alive>
		<TodayRecommend title="热门歌单" type="23"/>
	</div>
</template>
	
<script>
	import TodayRecommend from "../components/Today_Recommend";
	import NewsMusic from "../components/News_Music"
	import SwiperBanner from "../components/Swiper_Banner"
	import MusicListNav from "./musiclist/music_listnav"
	export default{
		name:"home",
		components:{
			TodayRecommend,
			NewsMusic,
			SwiperBanner,
			MusicListNav
		}
	}
</script>

<style scoped>
	.box{
		border: 0.1rem solid #eee;
	}
</style>