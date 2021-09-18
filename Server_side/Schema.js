const {gql}=require('apollo-server')



const typeDefs=gql`
   
type DataUser{
  name: String
  email: String
  phoneNumber: Int
  id: ID
}

input messageInput{
  name: String
  email: String
}

  type Query{
    user: [DataUser]
  }
  
  type Mutation{
    addUser(input: messageInput): DataUser
  }`

module.exports=typeDefs;  