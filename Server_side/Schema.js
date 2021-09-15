const {gql}=require('apollo-server');


const typeDefs=gql`
     type Book{
       id:Int
       autherName: String
       bookName: String
       Pages: Int
       email: String
       isAlive: Boolean 
     }
     
    type Query{
      books : [Book]  
    }`
module.exports=typeDefs;