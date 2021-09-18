const {gql}=require('apollo-server')



const typeDefs=gql`
   
type DataUser{
  name: String
  email: String
  phoneNumber: Int
  id: ID
}

  type Query{
    user: [DataUser]
  }`

module.exports=typeDefs;  