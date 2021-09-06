const {ApolloServer} =require('apollo-server')
const typeDefs = require('./Schema');



const loginFrom=[

  {
    name: "Abdul Moiz",
    email: "moiza8994@gmail.com",
    password: "khanzada123",
    phoneNumber: 111-111-111
  },
  {
    name: "Abdul Moiz",
    email: "moiza8994@gmail.com",
    password: "khanzada123",
    phoneNumber: 111-111-111
  },
  {
    name: "Abdul Moiz",
    email: "moiza8994@gmail.com",
    password: "khanzada123",
    phoneNumber: 111-111-111
  }
];


const resolvers={
  Query: {
    Login: () =>   {
       return loginFrom
    }
  }
}
const server= new ApolloServer({typeDefs, resolvers})

server.listen().then(({url}) =>{
   console.log(`🚀  Server ready at ${url}`);
})


