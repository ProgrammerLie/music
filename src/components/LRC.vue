<template>
	<div class="lrcContainer">
		<div class="lrc" ref='lrc'>
			 <p v-show="parseInt(currentTime) >= keyArr[index] && parseInt(currentTime) <keyArr[index+1]" class="lrc-p" v-for="(item,key,index) in lrcData" :key="index">{{item}}</p>
			{{getAllkey}} 
			<!-- <p class="lrc-p" :class="{active:parseInt(currentTime) >= keyArr[index] && parseInt(currentTime) <keyArr[index+1]}" v-for="(item,key,index) in lrcData" :key="index">
				{{item}}{{srcollLrc(key,index)}}
			</p> -->
		</div>
	</div>
</template>

<script>
	export default{
		name:"lrc",
		data(){
			return{
				lrc:{},
				lrcData:{},
				keyArr:[]
			}
		},
		props:{
			songid:{
				type:[String,Number],
				default:""
			},
			currentTime:{//正在播放时间
				type:[String,Number],
				default:0
			},
			durationTime:{//整体时间
				type:[String,Number],
				default:0
			}
		},
		mounted(){
			const LRCUrl = this.HOST + "/v1/restserver/ting?method=baidu.ting.song.lry&songid=" +this.songid;
			this.$axios.get(LRCUrl).then(res=>{
				this.lrc = res.data
				// 数据格式处理
				var lyrics = res.data.lrcContent.split("\n");
				//用\n替换得到数据的回车
				var lrcObj = {};
				for(var i = 0 ;i<lyrics.length;i++){
					var lyric = decodeURIComponent(lyrics[i]);
					//解码函数decodeURIComponent
					var timeReg = /\[\d*:\d*((\.|\:)\d*)*\]/g;
					var timeRegExpArr = lyric.match(timeReg);
					if(!timeRegExpArr)continue;
					var clause = lyric.replace(timeReg,'');
						for(var k= 0,h = timeRegExpArr.length;k < h;k++ ){
							var t = timeRegExpArr[k];
							var min = Number(String(t.match(/\[\d*/i)).slice(1)),
								sec = Number(String(t.match(/\:\d*/i)).slice(1));
							var time = min*60 + sec;
							lrcObj[time] = clause;
						}
				}
				this.lrcData = lrcObj;
				// console.log(this.lrcData)
			}).catch(error =>{
				console.log(error);
		})
			
		},
		computed:{
			getAllkey(){
				for( var i in this.lrcData){
					this.keyArr.push(i);
					console.log(this.keyArr)
				}
			}
		},
		methods:{
			srcollLrc(key,index){
				const lrcDiv = this.$refs.lrc
				if(key < this.currentTime && key > this.currentTime - (this.keyArr[index+1] - this.keyArr[index])){
					lrcDiv.style.top = -((index-1)*1.1)+"rem"
				}
			}
		}
	}
</script>

<style scoped>
	.lrcContainer{
		width: 100%;
		height: 5.8rem;
		margin-top: 0.1rem;
		overflow: hidden;
		position: relative;
	}
	.lrc{
		width: 100%;
		position: absolute;
		top: 0;
	}
	.active{
		color:red !important;
	}
	.lrc-p{
		height: 1.11rem;
		line-height: 1.11rem;
	}
	.up30{
		margin-top: -1.11rem;
	}
</style>