import App from './App.vue';
import { ViteSSG } from 'vite-ssg';
import routes from '~pages'

// 3. Create the router instance and pass the `routes` option
// You can pass in additional options here, but let's
// keep it simple for now.
// const router = VueRouter.createRouter({
//   // 4. Provide the history implementation to use. We are using the hash history for simplicity here.
//   history: VueRouter.createWebHashHistory(),
//   routes, // short for `routes: routes`
// });

export const createApp = ViteSSG(App, { routes });
// createApp(App).mount('#app')
