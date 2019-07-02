<template>
	<div>
		<Title :name="this.$route.params.name" :avatar="this.$route.params.avatar"/>
		<List :ting_uid="this.$route.params.ting_uid"/>
	</div>
</template>

<script>
	import Title from "../../components/datails/title"
	import List from "../../components/datails/list"
	export default{
		name:"datails",
		data(){
			return{
				
			}
		},
		components:{
			Title,
			List
		}
	}
</script>

<style scoped></style>