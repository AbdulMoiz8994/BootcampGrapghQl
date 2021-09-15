const { ApolloServer } = require("apollo-server");
const typeDefs = require("./Schema");

const Books = [
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

const resolvers={
  Query:{
    books: () => Books
  }
};


const server= new ApolloServer({typeDefs,resolvers})

server.listen().then(({url}) =>{
  console.log(` The Port is runing on port Nimber ${url}`);
});