// Initializes the `Blocos` service on path `/blocos`
const { Blocos } = require('./blocos.class');
const createModel = require('../../models/blocos.model');
const hooks = require('./blocos.hooks');

module.exports = function (app) {
  const options = {
    Model: createModel(app),
    paginate: app.get('paginate'),
    multi: true
  };

  // Initialize our service with any options it requires
  app.use('/blocos', new Blocos(options, app));

  // Get our initialized service so that we can register hooks
  const service = app.service('blocos');

  service.hooks(hooks);
};
