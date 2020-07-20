const assert = require('assert');
const app = require('../../src/app');

describe('\'Blocos\' service', () => {
  it('registered the service', () => {
    const service = app.service('blocos');

    assert.ok(service, 'Registered the service');
  });
});
