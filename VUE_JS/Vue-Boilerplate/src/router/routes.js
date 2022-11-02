const routes = [{
    path: '/home',
    name: 'home',
    component: () => import('../pages/home'),
    meta: { authRequired: true },
}, {
    path: '/register',
    name: 'register',
    component: () => import('../pages/user-register'),
}, {
    path: '/login',
    name: 'login',
    component: () => import('../pages/user-login'),
}, {
    path: '/',
    redirect: '/register',
}, {
    path: '/*',
    redirect: '/register',
}];

export default routes;