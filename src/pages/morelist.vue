<template>
	<div class="more-list">
		<div class="wrapper">
			<h3>{{this.$route.params.title}}</h3>
			<VuePullRefresh :on-refresh="onRefresh">
				<router-link tag="div" :to="{name:'MusicPlay',params:{songid:item.song_id}}" class="info url log" v-for='(item,index) in moreListData' :key='index'>
					<div class="poster">
						<img :src="item.pic_big" :alt="item.title">
					</div>
					<div class="text-wrap">
						<div class="title">{{item.title}}</div>
						<div class="author">{{item.artist_name}}</div>
					</div>
				</router-link>
			</VuePullRefresh>
		</div>
	</div>
</template>
<script>
	import VuePullRefresh from 'vue-pull-refresh';
	export default{
		name:'morelist',
		data(){
			return{
				moreListData:[],
				offset:0
			}
		},
		components:{
			VuePullRefresh
		},
		mounted(){
			const moreListUrl = this.HOST + "/v1/restserver/ting?method=baidu.ting.billboard.billList&type="+this.$route.params.musictype +"&size=12&offset=0";//只拿12条数据,从第0条开始拿数据
			this.$axios.get(moreListUrl)
			.then(res => {
				this.moreListData = res.data.song_list
				this.offset = this.offset+12
				// console.log(res.data)
			}).catch(error => {
				console.log(error);
				//捕获错误
			})
		},
		methods:{
			onRefresh:function(){
				var that = this;
				const moreListUrl = this.HOST + "/v1/restserver/ting?method=baidu.ting.billboard.billList&type="+this.$route.params.musictype +"&size=12&offset="+this.offset;//累加一次加12偏移量this.offset
				return new Promise(function(resolve,reject){
					setTimeout(() => {
						that.$axios.get(moreListUrl)
						.then(res => {
							that.offset >= res.data.billboard.billboard_songnum -12 ? console.log("没数据了") : that.offset += 12
							// that.moreListData = taht.moreListData.conact(res.data.song_list)
							that.moreListData = res.data.song_list
							resolve();
						}).catch(error => {
							console.log(error);
						})
					})
				})
			}
		}
	}
</script>

<style scoped>
	.wrapper {
    padding-top: 13px;
    text-align: center;
    margin-bottom: 10px;
    background: #fff;
    clear: both;
    overflow: hidden;
}
 
h3{
  font-size: 22px;
  text-align: left;
  margin-left: 17px;
  margin-bottom: 5px;
}
 
.wrapper .info {
    width: 42%;
    float: left;
    text-align: center;
    padding-left: 17px;
    display: block;
    text-align: left;
    margin-bottom: 10px;
    position: relative;
}
</style>