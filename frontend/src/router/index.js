import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';

Vue.use(VueRouter);

const routes = [
    {
        name: 'home',
        path: '/',
        component: Home,
    }
];

export default new VueRouter({
    routes: routes,
});