
const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '/loginTela', name: 'loginTela', component: () => import('src/pages/loginTela.vue'), meta: {name: 'Tela Login'} }, 
      { path: '', name: '/inicio', component: () => import('src/pages/index.vue')}, 
      { path: '/sobre', name: 'sobre', component: () => import('src/pages/sobre.vue')}
    ]
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '*',
    component: () => import('pages/Error404.vue')
  }
]

export default routes
