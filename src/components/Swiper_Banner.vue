<template>
	<div class="banner">
		<swiper :options="swiperOption">
		<!-- slides -->
			<swiper-slide><img src="@/assets/img/01.png" alt=""></swiper-slide>
			<swiper-slide><img src="@/assets/img/02.png" alt=""></swiper-slide>
			<swiper-slide><img src="@/assets/img/03.png" alt=""></swiper-slide>
			<swiper-slide><img src="@/assets/img/04.png" alt=""></swiper-slide>
			<!-- Optional controls -->
			<div class="swiper-pagination"  slot="pagination"></div>
		</swiper>
	</div>
</template>

<script>
	import 'swiper/dist/css/swiper.css'
	import { swiper, swiperSlide } from 'vue-awesome-swiper'
	export default{
		data(){
			return{
				swiperOption:{
					pagination:{
						el:'.swiper-pagination'
					},
					autoplay:true
				}
			}
		},
		components:{
			swiper,
			swiperSlide
		}
	}
</script>

<style scoped>
	.banner{
		border-top: 0.1rem solid #eee;
	}
	img{
		width: 100%;
		height: auto;
	}
</style>