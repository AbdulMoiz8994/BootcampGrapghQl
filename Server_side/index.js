const { ApolloServer, gql } = require("apollo-server");

const Students = [
  {
    id: 1,
    name: "Abdul Moiz",
    email: "moiza8994@gmail.com",
    number: 111111111,
    age: 20,
  },
  {
    id: 2,
    name: "Abdullah",
    email: "abdullah8994@gmail.com",
    number: 222222222,
    age: 22,
  },
  {
    id: 3,
    name: "Rizwan",
    email: "rizwan8994@gmail.com",
    number: 333333333,
    age: 24,
  },
  {
    id: 4,
    name: "Faizan",
    email: "faizan8994@gmail.com",
    number: 444444444,
    age: 18,
  },
];

const resolvers = {
  Query: {
    students: () => Students,
  },
};


// We make the Types first word Capital
const typeDefs = gql`
  type Student {
    id: Int
    name: String
    email: String
    number: Int
    age: Int
  }

  type Query {
    students: [Student]
  }
`;

const server = new ApolloServer({ typeDefs, resolvers });
// the listen method launches a web server
server.listen().then(({ url }) => {
  console.log(` Server is ready ${url}`);
});
