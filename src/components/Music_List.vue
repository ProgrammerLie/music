<!-- hot king new 公共组件 -->
<template>
	<div class="borad panels">
		<div class="panel hotsongs on">
			<ul class="list">
				<router-link :to="{name:'MusicPlay',params:{songid:item.song_id}}" tag='li' class="song url" v-for="(item,index) in currentData" :key="index">
					<div class="poster">
						<img :src="item.pic_big" :alt="item.title">
					</div>
					<div class="info">
						<div class="name">
							{{item.title}}
						</div>
						<div class="author">{{item.artist_name}}</div>
					</div>
				</router-link>
			</ul>
		</div>
	</div>
</template>

<script>
	export default{
		data(){
			return{
				currentData:[]
			}
		},
		props:{
			url:{
				type:String,
				default:""
			}
		},
		mounted(){
			const httpUrl = this.HOST+this.url;
			this.$axios.get(httpUrl).then(res => {
				// console.log("Music_List",res.data)
				this.currentData = res.data.song_list
			}).catch(error => {
				console.log(error)
			})
		}

	}
</script>

<style scoped>
	.panel{
		height: 10rem;
		overflow-y:auto;
		border-top: 0.026rem solid #eee;
		position: relative;
		top: -0.026rem;
		display: block;
		background: #fff;

	}
	.list{
		/*padding: 0.26rem;*/
		padding-top: 0;

	}
	.panel .list li{
		border-bottom: 0.026rem solid #eee;
		padding-left: 0;
		display: flex;
		padding-top: 0.2rem;
	}
	.panel .list li .poster{
		position: relative;
		width: 2.05rem;
		margin-right: 0.2rem;
	}
	.panel .list li .poster img{
		width: 100%;
		height: auto;
		border: 1px solid #eee;
	}
	.info{
		flex: 1;
		display:inline-block;
		overflow: hidden;
		text-overflow: ellipsis;
		white-space: normal;
	}
	.info .name{
		width: 6.8rem;
		font-size: 0.32rem;
		overflow: hidden;
		text-overflow: ellipsis;
		white-space:nowrap;
		line-height: 0.4rem;
		max-height: 0.746rem;
		margin-bottom: 0.03rem;
	}
	.info .author{
		overflow: hidden;
		text-overflow: ellipsis;
		white-space: normal;
		font-size: 0.32rem;
		color: #999;
		margin-top: 0.4rem;
	}
	.more .songs{
		color: #999;
		margin-top: 0.24rem;
		font-size: 0.32rem;
		text-align: center;
		height: 0.85rem;
		line-height: 0.85rem; 
	}
</style>