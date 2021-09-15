const { gql } = require("apollo-server");

const typeDefs = gql`
  type Book {
    id: Int
    autherName: String
    bookName: String
    pages: Int
    email: String
    isAlive: Boolean
  }

  input addInput {
    id: Int
    autherName: String
    bookName: String
    pages: Int
    email: String
    isAlive: Boolean
  }

  type Query {
    books: [Book]
  }

  type Mutation {
    addInputFields(input: addInput): Book
  }
`;

module.exports = typeDefs;
