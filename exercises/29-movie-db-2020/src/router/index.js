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
    props: (route) => ({ query: route.query.q }),
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
    path: '/approved',
    name: 'Approved',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "approved" */ '../views/Approved.vue'),
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
  // scrollBehavior(to, from, savedPosition) {
  //   console.log('to:', to);
  //   console.log('from', from);
  //   console.log('savedPosition', savedPosition);

  //   if (to.name === 'HomePaginated' && from.name === 'HomePaginated') {
  //     return { x: 0, y: 0 };
  //   }
  // },
});

router.beforeEach(async (to, from, next) => {
  console.log(to);
  if (to.query.approved) {
    console.log(to.query.request_token);
    await createSession(to);
    next({ path: to.path });
  }
  next();
});

async function createSession(to) {
  console.log('CreateSession');
  const data = await fetch(
    `${process.env.VUE_APP_API_BASE}/authentication/session/new?api_key=${process.env.VUE_APP_API_KEY}`,
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        request_token: to.query.request_token,
      }),
    },
  );
  const json = await data.json();
  console.log(json);
  localStorage.setItem('session_id', json.session_id);
}

export default router;
