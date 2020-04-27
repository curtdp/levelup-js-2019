import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/page/:pageNumber',
    name: 'HomePaginated',
    component: Home,
    props: true,
  },
  {
    path: '/search',
    name: 'SearchResults',
    props: route => ({ query: route.query.q }),
    component: () =>
      import(
        /* webpackChunkName: "searchresults" */ '../views/SearchResults.vue'
      ),
  },
  {
    path: '/about-page',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ '../views/About.vue'),
  },
  {
    path: '/movie/:id',
    name: 'MoviePage',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "moviepage" */ '../views/MoviePage.vue'),
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
