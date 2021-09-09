const { ApolloServer } = require("apollo-server");
const typeDefs = require("./Schema");

const Login = [
  {
    firstName: "Abdul",
    lastName: "Moiz",
    email: "moiza8994@gmail.com",
    password: "khanzada1234",
    phoneNumber: 222222222,
  },
  {
    firstName: "Abdul",
    lastName: "Moiz",
    email: "moiza8994@gmail.com",
    password: "khanzada1234",
    phoneNumber: 222222222,
  },
  {
    firstName: "Abdul",
    lastName: "Moiz",
    email: "moiza8994@gmail.com",
    password: "khanzada1234",
    phoneNumber: 222222222,
  },
  {
    firstName: "Abdul",
    lastName: "Moiz",
    email: "moiza8994@gmail.com",
    password: "khanzada1234",
    phoneNumber: 222222222,
  },
];

const resolvers = {
  Query: {
    login: () => {
      return Login;
    },
  },
};

const server = new ApolloServer({ typeDefs, resolvers });
server.listen().then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});
