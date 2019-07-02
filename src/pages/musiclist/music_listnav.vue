<template>
	<div class="music-nav">
		<div class="log url hd">
			<h2>音乐榜单</h2>
			<div>更多</div>
		</div>
		<ul>
			<li>
				<router-link to="/home/hot">热歌榜</router-link>
			</li>
			<li>
				<router-link to="/home/news">新歌榜</router-link>
			</li>
			<li>
				<router-link to="/home/king">King榜</router-link>
			</li>
		</ul>
	</div>
</template>

<script>
	export default{

	}
</script>

<style scoped>
	.music-nav{
		background-color: #fff;
		border-top: 0.1rem solid #eee;
		padding: 0.13rem 0.22rem;
	}
	.hd{
		margin: 0.18rem 0 0.24rem 0;
		display: -webkit-box;
		display: -webkit-flex;
		display: flex;
	}
	.hd h2{
		-webkit-box-flex: 1;
		-webkit-flex: 1;
		flex: 1;
		margin: 0;
		padding: 0;
		font-size: 0.5rem;
	}
	.hd{
		margin-bottom: 0;
	}
	ul{
		display: flex;
		height: 1.3rem;
		line-height: 1.3rem;
		background: #eee;
	}
	ul li{
		flex: 1;
		list-style: none;
		text-align: center;
	}
	ul li a{
		text-decoration:none;
		display: block;
		font-size: 0.4rem;
		color: #999;
	}

	ul li a.active{
		color: #299DE7 !important;
	}
	.gap-line{
		position: absolute;
		right: 0;
		top: 0.26rem;
		height: 0.24rem;
		width: 0.026rem;
		border-left: 0.026rem solid #eee;
	}
</style>