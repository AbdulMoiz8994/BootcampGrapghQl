const {gql}=require('apollo-server')

const typeDefs=gql`
    type StudentList{
      name: String
      fatherName: String
      email: String
      phoneNumber: Int
      isPresent: Boolean
    }
 
    type Query{
      studentList: [StudentList!]
    }`
module.exports=typeDefs    