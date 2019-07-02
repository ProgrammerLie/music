import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/pages/index'
import Home from '@/pages/home'
import Artists from '@/pages/artists'
import Listcate from '@/pages/listcate'
import Ucenter from '@/pages/ucenter'
import Search from '@/pages/search'
import HotList from '@/pages/musiclist/hot_list'
import KingList from '@/pages/musiclist/king_list'
import NewsList from '@/pages/musiclist/news_list'
import MoreList from '@/pages/moreList'
import MusicPlay from '@/pages/musicPlay'
import ArtistsDatails from '@/pages/artistsDatails/artistsDetails'
import LicateDetails from "@/pages/licateDetails/licateDetails"

Vue.use(Router)

export default new Router({
  routes: [
    {
      path:'/musicPlay',
      name:"MusicPlay",
      component:MusicPlay
    },
    {
      path: '/',
      name: 'Index',
      redirect:"/home",//重定向
      component: Index,
      children:[//二级路由
      	{
      		path:'home',
      		component:Home,
          redirect:"/home/hot",//重定向
          children:[//三级路由
            {
              path:"hot",
              component:HotList
            },
            {
              path:"king",
              component:KingList
            },
            {
              path:"news",
              component:NewsList
            }
          ]
      	},
      	{
      		path:'artists',
      		component:Artists
      	},
      	{
      		path:'listcate',
      		component:Listcate
      	},
      	{
      		path:'ucenter',
      		component:Ucenter
      	},
      	{
      		path:'search',
      		component:Search
      	},
        {
          path:'more',
          name:'MoreList',
          component:MoreList
        },
        {
          path:'artistsdatails',
          name:'ArtistsDatails',
          component:ArtistsDatails
        },
        {
          path:"licatedetails",
          name:"LicateDetails",
          component:LicateDetails
        }
      ]
    }
  ]
})
