const {gql} = require('apollo-server')


const  typeDefs=gql`
    type login{
        name: String
        email: String
        password: String
        phoneNumber: Int
    }
     type Query{
         Login : [login]
     }
    `

    module.exports=typeDefs