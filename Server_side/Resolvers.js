const dammyData = require("./DammyData");
// const cryyto =require('crypto')


const resolvers = {
  Query: {
    user: () => {
      return dammyData;
    },
  },
  Mutation: {
    addUser: (_, { input }) => {
      console.log(input);
      dammyData.push({
        name: input.name,
        email: input.email
      })
      return {
        name: input.name,
        email: input.email,
      };
    },
  },
};
module.exports = resolvers;
