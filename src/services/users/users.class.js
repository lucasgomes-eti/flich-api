const { Service } = require('feathers-mongodb');
const crypto = require('crypto');
const { Conflict } = require('@feathersjs/errors');

const gravatarUrl = 'https://s.gravatar.com/avatar';
const query = 's=60';
const getGravatar = email => {
  const hash = crypto.createHash('md5').update(email.toLowerCase()).digest('hex');
  return `${gravatarUrl}/${hash}?${query}`;
};

exports.Users = class Users extends Service {
  async create(data, params) {
    const { email, password, googleId, name } = data;

    const { total } = await this.find({ query: { email } })

    if (total > 0) {
      throw new Conflict('Invalid Parameters', {
        errors: { email: `Email ${email} already taken` }
      });
    }

    const avatar = data.avatar || getGravatar(email);

    const userData = {
      email,
      name,
      password,
      googleId,
      avatar
    };
    return super.create(userData, params)
  }
  constructor(options, app) {

    super(options);

    app.get('mongoClient').then(db => {
      this.Model = db.collection('users');
    });
  }
};
