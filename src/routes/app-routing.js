import {Router} from '@vaadin/router';
export function init(outlet) {
  // Check the live demos for more examples:
  // https://vaadin.github.io/vaadin-router/vaadin-router/demo
  const router = new Router(outlet);
  router.setRoutes([
    {
      path: '/',
      redirect: '/view1'
    },
    {
      path: '/view1',
      component: 'my-view1',
      action: () => { import('../components/my-view1.js') }
    },
    {
      path: '/view2',
      component: 'my-view2',
      action: () => { import('../components/my-view2.js') }
    },
    {
      path: '/view3',
      component: 'my-view3',
      action: () => { import('../components/my-view3.js') }
    },
    {
      path: '(.*)',
      component: 'my-view404',
      action: () => { import('../components/my-view404.js') }
    },
  ]);
}