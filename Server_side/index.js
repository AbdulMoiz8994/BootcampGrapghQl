const typeDefs = require("./Schema");
const { ApolloServer } = require("apollo-server");

const realData = [
  {
    id: 1,
    fullName: "Abdul Moiz",
    fatherName: "Zafar Ali",
    email: "moiza8994@gmail.com",
    phoneNumber: 1111111111,
    isMarried: true,
  },
  {
    id: 2,
    fullName: "Abdul Moiz",
    fatherName: "Zafar Ali",
    email: "moiza8994@gmail.com",
    phoneNumber: 1111111111,
    isMarried: true,
  },
  {
    id: 5,
    fullName: "Abdul Moiz",
    fatherName: "Zafar Ali",
    email: "moiza8994@gmail.com",
    phoneNumber: 1111111111,
    isMarried: true,
  },
  {
    id: 4,
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
  Mutation: {
    addStudent: (e, { input }) => {
      realData.push({
        id: input.id,
        fullName: input.fullName,
        fatherName: input.fatherName,
        email: input.email,
        phoneNumber: input.phoneNumber,
        isMarried: input.isMarried,
      })
      return {
        id: input.id,
        fullName: input.fullName,
        fatherName: input.fatherName,
        email: input.email,
        phoneNumber: input.phoneNumber,
        isMarried: input.isMarried,
      };
    },
  },
};

const server = new ApolloServer({ typeDefs, resolvers });

server.listen().then(({ url }) => {
  console.log(`The server is runing port Number ${url}`);
});
