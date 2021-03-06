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
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ '../views/About.vue'),
  },
  {
    path: '/custom-transition-classes',
    name: 'CustomTransitionClasses',
    // route level code-splitting
    // this generates a separate chunk (custom-transition-classes.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(
        /* webpackChunkName: "custom-transition-classes" */ '../views/CustomTransitionClasses.vue'
      ),
  },
  {
    path: '/list-transitions',
    name: 'ListTransitions',
    // route level code-splitting
    // this generates a separate chunk (list-transitions.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(
        /* webpackChunkName: "custom-transition-classes" */ '../views/ListTransitions.vue'
      ),
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
