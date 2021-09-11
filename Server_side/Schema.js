const {gql} =require('apollo-server')  //we are using for getting graph Query Language for make the schema from apollo server lib

const typeDefs=gql`
   type contactType{
     fullName: String
     fatherName: String
     email: String
     phoneNumber: Int
     isMarried: Boolean
   }

  type Query{
    contactDetails: [contactType!]
  }`
// export this schema type of an api
module.exports=typeDefs;
