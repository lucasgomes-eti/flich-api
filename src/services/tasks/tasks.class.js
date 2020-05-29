const { Service } = require('feathers-mongodb');

exports.Tasks = class Tasks extends Service {
  constructor(options, app) {
    super(options);
    
    app.get('mongoClient').then(db => {
      this.Model = db.collection('tasks');
    });
  }
};
