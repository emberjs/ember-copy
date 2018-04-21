import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('docs', function() { // docs homepage
    this.route('usage'); // docs subpage
    this.route('api', function() { // API homepage (generated)
      this.route('item', { path: '/*path'}); // API subpages (generated)
    })
  })
  this.route('not-found', { path: '/*path' });
});

export default Router;
