<template>
	<div class="play">
		<div class="header">
			<div class="title">
				<router-link to='/'>
					<span class="iconfont icon-fanhui left"></span>
				</router-link>
				<div class="music-info">
					<p>{{currentUrl.songinfo.title}}</p>
					<p class="author">{{currentUrl.songinfo.author}}</p>
				</div>
				<router-link to="/search"><span class="iconfont icon-search right"></span></router-link>
			</div>
		</div>

		<div class="song-info">
			<div class="song-info-img">
				<img :src="currentUrl.songinfo.pic_big" alt="">
				<LRC :currentTime="currentTime" :durationTime="durationTime" :songid="this.$route.params.songid"/>
			</div>
			<div class="iconbox">
				<span class="iconfont icon-xihuan1 left"></span>
				<i class="box"></i>
				<span class="iconfont icon-download left"></span>
			</div>
		</div>
		<div class="song">
      		<audio ref="player" :src="currentUrl.bitrate.show_link" controls autoplay></audio>
  		</div>


	</div>
</template>

<script>
	//异步引入歌词
	// import LRC from "../components/LRC"
	import Vue from "vue"
	const LRC = Vue.component("lrc",(resolve)=>require(["../components/LRC"],resolve))//异步操作,引入vue,老是忘记

	export default{
		currentTime:0,
		name:"musicplay",
		data(){
			return{
				currentUrl:{
					songinfo:{
						title:'',
						author:''//初始化，不然会报错
					},
					bitrate:{
						show_link:''
					},
					
				},
				currentTime:0,
				durationTime:0
			}
		},
		components:{
			LRC
		},
		mounted(){
			const playUrl = this.HOST + "/v1/restserver/ting?method=baidu.ting.song.play&songid=" +this.$route.params.songid;
			this.$axios.get(playUrl).then(res =>{
				this.currentUrl = res.data;
				// console.console.log(this.currentUrl)
			}).catch(error=>{
				console.log(error);
			})
			this.addEventListeners();
		},
		beforeDestroyed(){//销毁时执行
			this.removeEventListeners();
		},
		//只能用原生原生的方法做
		methods:{

			addEventListeners(){
				//timeupdate监听播放时间
				this.$refs.player.addEventListener('timeupdate',this._currentTime),
				//canplay监听整体时间
				this.$refs.player.addEventListener('canplay',this._durationTime)
			},
			removeEventListeners:function(){

				this.$refs.player.removeEventListener('timeupdate',this._currentTime),
				this.$refs.playes.removeEventListener('canplay',this._durationTime)
			},

			_currentTime(){console.log(this.currentTime)
				this.currentTime = this.$refs.player.currentTime
				//cucurrenTime是audio标签获取提供的歌曲当前播放时间的方法
			},
			_durationTime(){
				this.durationTime = this.$refs.player.duration
				//duration是audio标签提供获取歌曲播放整体的时间方法
			}
		}
	}
</script>

<style scoped>
	a{
		text-decoration:none;
	}
	.header{
		padding:10px;
	}
	.music-info{
		flex: 1;
		font-size: 20px;
		margin-top: 20px;
	}
	.music-info p{
		margin-top: 20px;
		margin-bottom: 0;
	}
	.title{
		display: flex;
		text-align: center;
	}
	.left{
		font-size: 25px;
	}
	.right{
		font-size: 30px;
	}
	.song-info{
		padding: 19px;
	}
	.song-info-img{
		text-align: center;
	}
	.song-info-img img{
		width: 50%;
		border-radius: 5px;
		box-shadow: 0 0 10px 0 rgba(50,50,50,31);
	}
	.song-lrc{
		margin-top: 20px;
		min-height: 50px;
	}
	.iconbox{
		display: flex;
		margin-top: 30px;
	}
	.iconbox .box{
		flex: 1;
	}
	.song{
		width: 100%;
		text-align: center;
	}
	.song audio{
		width: 80%;
	}
	.active{
		colo:#222;
	}
	.author{
		margin:0rem;
		font-size: 12px;
		color: #999;
	}
	.icon-search{
		font-size: 20px;
		color: #aaa;
	}
	.icon-fanhui,.icon-download,.icon-xihuan1{
		color: #aaa;
		font-size: 20px;
	}
</style>