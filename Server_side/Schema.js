const { gql } = require('apollo-server');

const typeDefs = gql`
  type loginForm {
    firstName: String
    lastName: String
    email: String
    password: String
    phoneNumber: Int
  }
  
  type Query{
      login: [loginForm]!
  }`;

module.exports= typeDefs;