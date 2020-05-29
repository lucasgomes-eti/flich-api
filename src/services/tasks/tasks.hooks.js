const { authenticate } = require('@feathersjs/authentication').hooks;

const processTask = require('../../hooks/process-task');

const queryTask = require('../../hooks/query-task');

const uptadeTask = require('../../hooks/uptade-task');

module.exports = {
  before: {
    all: [ authenticate('jwt') ],
    find: [queryTask()],
    get: [],
    create: [processTask()],
    update: [uptadeTask()],
    patch: [uptadeTask()],
    remove: []
  },

  after: {
    all: [],
    find: [],
    get: [],
    create: [],
    update: [],
    patch: [],
    remove: []
  },

  error: {
    all: [],
    find: [],
    get: [],
    create: [],
    update: [],
    patch: [],
    remove: []
  }
};
