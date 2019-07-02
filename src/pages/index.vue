<template lang="html">
	<div class="index">
		<ul>
			<li>
				<router-link to="/home">
					<span class="iconfont icon-gallery-view"></span>
				</router-link>
			</li>
			<!-- ../assets/xxx.png -->
			<li>
				<router-link to="/artists">
					歌手
				</router-link>
			</li>
			<li>
				<router-link to="/listcate">
					榜单
				</router-link>
			</li>
			<li>
				<router-link to="/search">
					搜索
				</router-link>
			</li>
		</ul>
		<router-view/>
	</div>
</template>
<script>
	export default{

	}
</script>
<style scoped>
	*{
		margin: 0;
		padding: 0;
	}
	.index ul{
		display: flex;
		height: 1.3rem;
		line-height: 1.3rem;
		background: #eee;
	}
	.index ul li{
		height: 100%;
		flex: 1;
		display: block;
		list-style: none;
		text-align: center;
	}
	.index ul li a{
		text-decoration:none;
		font-size: 0.4rem;
		color: #999;
		
	}
	.icon-shouye{
		font-size: 1rem;
	}
	ul li a.active{
		color: #299DE7 !important;
	}
</style>