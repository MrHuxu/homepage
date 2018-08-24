import Home from './components/home';
import NoMatch from './components/404';

export default [
  { exact: true, path: '/', component: Home },

  { path: '/404', component: NoMatch }
];
