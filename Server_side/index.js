const { ApolloServer } = require("apollo-server");
const typeDefs = require("./Schema");

let Books = [
  {
    id: 1,
    autherName: "Hasham",
    bookName: "Old History",
    pages: 200,
    email: "hashama8994@gmail.com",
    isAlive: true,
  },
  {
    id: 2,
    autherName: "Hasham",
    bookName: "Old History",
    pages: 200,
    email: "hashama8994@gmail.com",
    isAlive: true,
  },
  {
    id: 3,
    autherName: "Hasham",
    bookName: "Old History",
    pages: 200,
    email: "hashama8994@gmail.com",
    isAlive: true,
  },
  {
    id: 4,
    autherName: "Hasham",
    bookName: "Old History",
    pages: 200,
    email: "hashama8994@gmail.com",
    isAlive: true,
  },
];

const resolvers = {
  Query: {
    books: () => Books,
  },
  Mutation: {
    addInputFields: (e, {input}) => {
      console.log(input);
      Books.push({
        id: input.id,
        autherName: input.autherName,
        bookName: input.bookName,
        pages: input.pages,
        email: input.email,
        isAlive: input.isAlive,        
      })
      return {
        id: input.id,
        autherName: input.autherName,
        bookName: input.bookName,
        pages: input.pages,
        email: input.email,
        isAlive: input.isAlive,
      };
    },
  },
};

const server = new ApolloServer({ typeDefs, resolvers });

server.listen().then(({ url }) => {
  console.log(` The Port is runing on port Nimber ${url}`);
});
