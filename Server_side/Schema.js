const {gql} =require('apollo-server')  //we are using for getting graph Query Language for make the schema from apollo server lib

const typeDefs=gql`
   type contactType{
     id: Int
     fullName: String
     fatherName: String
     email: String
     phoneNumber: Int
     isMarried: Boolean
   }

    input studentinput{
      id: Int
      fullName: String
      fatherName: String
      email: String
      phoneNumber: Int
      isMarried: Boolean
    }


  type Query{
    contactDetails: [contactType]
  }
  
  
  type Mutation{
    addStudent(input: studentinput): contactType
  }`




// export this schema type of an api
module.exports=typeDefs;
