const {ApolloServer,gql}= require('apollo-server');



const contactData=[
  {
    fullName: "ABdul Moiz",
    fatherName: "zafar Ali",
    age: 20,
    phoneNumber: 11111111,
    email: "moiza8994@gmail.com"
  },
  {
    fullName: "ABdul Moiz",
    fatherName: "zafar Ali",
    age: 20,
    phoneNumber: 11111111,
    email: "moiza8994@gmail.com"
  },
  {
    fullName: "ABdul Moiz",
    fatherName: "zafar Ali",
    age: 20,
    phoneNumber: 11111111,
    email: "moiza8994@gmail.com"
  },
  {
    fullName: "ABdul Moiz",
    fatherName: "zafar Ali",
    age: 20,
    phoneNumber: 11111111,
    email: "moiza8994@gmail.com"
  },
]


const resolvers={
  Query: {
    contacts: () => {
      return contactData
    }
  }
}



// make the schema
const typeDefs=gql`

    type contact{
      fullName: String
      fatherName: String
      age: Int
      phoneNumber: Int
      email: String
    }

  type Query{
    contacts: [contact]
  }`

  const server= new ApolloServer({typeDefs, resolvers})

  server.listen().then(({url}) =>{
       console.log(` 🚀  Server ready at ${url}`);    
  })