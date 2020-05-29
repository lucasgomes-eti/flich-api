// Use this hook to manipulate incoming or outgoing data.
// For more information on hooks see: http://docs.feathersjs.com/api/hooks.html

// eslint-disable-next-line no-unused-vars
module.exports = (options = {}) => {
  return async context => {

    const { data } = context;

    if (!data.description) {
      throw new Error('A task must have a description');
    }

    const { user } = context.params;

    const description = data.description.substring(0, 400);

    context.data = {
      description,
      userId: user._id,
      createdAt: new Date().getTime(),
    }

    return context;
  };
};
