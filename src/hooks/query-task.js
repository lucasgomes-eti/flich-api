// Use this hook to manipulate incoming or outgoing data.
// For more information on hooks see: http://docs.feathersjs.com/api/hooks.html

// eslint-disable-next-line no-unused-vars

const { ObjectID } = require('mongodb');

module.exports = (options = {}) => {
  return async context => {

    const { query = {} } = context.params;

    if (query.userId) {
      query.userId = new ObjectID(query.userId);
    }

    return context;
  };
};
