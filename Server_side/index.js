const typeDefs = require("./Schema");
const { ApolloServer } = require("apollo-server");

const realData = [
  {
    fullName: "Abdul Moiz",
    fatherName: "Zafar Ali",
    email: "moiza8994@gmail.com",
    phoneNumber: 1111111111,
    isMarried: true,
  },
  {
    fullName: "Abdul Moiz",
    fatherName: "Zafar Ali",
    email: "moiza8994@gmail.com",
    phoneNumber: 1111111111,
    isMarried: true,
  },
  {
    fullName: "Abdul Moiz",
    fatherName: "Zafar Ali",
    email: "moiza8994@gmail.com",
    phoneNumber: 1111111111,
    isMarried: true,
  },
  {
    fullName: "Abdul Moiz",
    fatherName: "Zafar Ali",
    email: "moiza8994@gmail.com",
    phoneNumber: 1111111111,
    isMarried: true,
  },
];

const resolvers = {
  Query: {
    contactDetails: () => {
      return realData;
    },
  },
};

const server = new ApolloServer({ typeDefs, resolvers });

server.listen().then(({ url }) => {
  console.log(`The server is runing port Number ${url}`);
});
