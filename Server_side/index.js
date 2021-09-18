const {ApolloServer}=require('apollo-server')
const typeDefs= require('./Schema');
const resolvers=require('./Resolvers')

const server= new ApolloServer({typeDefs, resolvers})
server.listen().then(({url}) =>{
    console.log(url);
})