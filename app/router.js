import EmberRouter from '@ember/routing/router';
import config from 'reg-ex-rex/config/environment';
import IndexRoute from './routes/index';
import Route from '@ember/routing/route';
export default class Router extends EmberRouter {
  location = config.locationType;
  rootURL = config.rootURL;
}

Router.map(function () {
  this.route('index', { path: '/' });
  // this.route('about');
  // this.route('regex', function () {
  //   this.route('game');
  // });
  this.route('not-found', { path: '/*path' });
});

