const dammyData = require("./DammyData");

const resolvers = {
  Query: {
    user: () => {
      return dammyData;
    },
  },
};
module.exports = resolvers;
