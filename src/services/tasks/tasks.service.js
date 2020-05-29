// Initializes the `tasks` service on path `/tasks`
const { Tasks } = require('./tasks.class');
const hooks = require('./tasks.hooks');

module.exports = function (app) {
  const options = {
    paginate: app.get('paginate')
  };

  // Initialize our service with any options it requires
  app.use('/tasks', new Tasks(options, app));

  // Get our initialized service so that we can register hooks
  const service = app.service('tasks');

  service.hooks(hooks);
};
