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
    path: '/newarrivals',
    name: 'newarrivals',
    component: () => import('../views/newarrivals'),
  },
  {
    path: '/prod/:id',
    name: 'Prod',
    component: () => import('../views/Prod.vue'),
  },
  {
    path: '/checkout',
    name: 'checkout',
    component: () => import('../views/checkout'),
  },
  {
    path: '/shoppingcart',
    name: 'shoppingCart',
    component: () => import('../views/shoppingcart'),
  },
  {
    path: '/products',
    name: 'products',
    component: () => import('../views/products'),
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
