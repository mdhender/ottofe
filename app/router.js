import EmberRouter from '@ember/routing/router';
import config from 'ottofe/config/environment';

export default class Router extends EmberRouter {
  location = config.locationType;
  rootURL = config.rootURL;
}

Router.map(function () {
  this.route('features');
  this.route('map', { path: '/map/:map_id' });
  this.route('maps');
  this.route('report', { path: '/report/:report_id' });
  this.route('reports');
  this.route('turn', { path: '/turn/:turn_id' });
  this.route('turns');
});
