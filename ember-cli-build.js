'use strict';

const EmberApp = require('ember-cli/lib/broccoli/ember-app');

module.exports = function(defaults) {
  let app = new EmberApp(defaults, {
    fontawesome: {
      icons: {'free-solid-svg-icons': 'all'}
    }
  });

  // Bootstrap v4
  app.import('node_modules/bootstrap/dist/css/bootstrap.css')
  app.import('node_modules/bootstrap/dist/css/bootstrap.css.map')
  app.import('node_modules/bootstrap/dist/js/bootstrap.min.js')
  app.import('node_modules/bootstrap/dist/css/bootstrap.min.js.map')
  return app.toTree();
};
