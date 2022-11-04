import { createWebHistory, createRouter} from 'vue-router'
import ShowsByGenre from '@/views/ShowsByGenre'
import ShowDetailsView from '@/views/ShowDetails'
import ShowSearch from '@/views/ShowSearch'
import ErrorView from '@/views/ErrorView'

const routes = [
   {
    path: '/',
	name: 'Shows',
    component: ShowsByGenre,
  },
  {
    path: '/shows/search',
	name: 'ShowSearch',
    component: ShowSearch,
	props:true
  },
  {
    path: '/show',
	name: 'ShowDetails',
    component: ShowDetailsView,
	props:true
  },
  {
    path: '/404',
    name: 'PageNotFound',
    component: ErrorView,
	props:true
  },
  {
    path: '/error',
	name: 'ErrorInPage',
	component: ErrorView,
	props:true
  },
  {
    path: '/:pathMatch(.*)',
	name: 'PathNotFound',
	component: ErrorView,
	props:true
  }
  
]

const router = createRouter({
  history: createWebHistory(),
  routes
})
export default router
