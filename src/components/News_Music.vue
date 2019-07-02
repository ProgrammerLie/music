<template lang="html">
	<div class="mod-albums">
		<div class="hd log url">
			<h2>新歌速递</h2>
			<div>更多</div>
		</div>
		<div class="container">
			<div class="gallery">
				<router-link tag='div' :to="{name:'MusicPlay',params:{songid:item.song_id}}" class="card url" v-for="(item,index) in newsMusic" :key="index">
					<div class="album">
						<img :src="item.pic_big" :alt="item.title">
						<div class="name">{{item.title}}</div>
						<div class="author">{{item.author}}</div>
					</div>
				</router-link>
			</div>
		</div>
	</div>
</template>

<script>
	export default{
		name:"newsMusic",
		data(){
			return{
				newsMusic:[]
			}
		},
		mounted(){
			var url = this.HOST + "/v1/restserver/ting?method=baidu.ting.billboard.billList&type=1&size=3&offset=0";//只拿3条数据,从第0条开始拿数据
			this.$axios.get(url).then(res => {
				this.newsMusic = res.data.song_list
				// console.log(res.data)
			}).catch(error => {
				console.log(error);
				//捕获错误
			})
		}
	}
</script>

<style scoped>
	.mod-albums{
		border-top: 0.1rem solid #eee;
		background-color: #fff;
		padding: 0.2rem 0.2rem;
	}
	.hd{
		display: flex;
		margin: 0.1rem 0 0.1rem 0;
	}
	.hd h2{
		-webkit-box-flex: 1;
		-webkit-flex: 1;
		flex: 1;
		margin: 0;
		padding: 0;
		font-size: 0.5rem;
	}
	.hd div{
		width: 1.706rem;
		font-size: 0.34rem;
		text-align: right;
	}
	.mod-albums .gallery{
		overflow: hidden;
		margin: 0 -0.133rem;
	}
	.mod-albums .gallery .card{
		width: 33.3%;
		float: left;
		-webkit-box-sizing: boder-box;
		box-sizing: border-box;
		padding: 0 0.12rem 0.2rem;
	}
	.mod-albums .gallery .card .album{
		position: relative;
	}
	.mod-albums .gallery .card .album img{
		width: 100%;
		height: auto;
		border: 0.01rem solid #eee;
	}
	.mod-albums .gallery .card .album .name{
		width: 2.98rem;
		font-size: 0.32rem;
		overflow: hidden;
		text-overflow: ellipsis;
		white-space:nowrap;
		line-height: 0.4rem;
		max-height: 0.746rem;
		margin-bottom: 0.03rem;
	}
</style>