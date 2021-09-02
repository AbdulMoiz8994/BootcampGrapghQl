

const {ApolloServer, gql} =require("apollo-server")

const Contact=[
  {
    id: 1,
    firstName: "Abdul",
     lastName: "Moiz",
     email: "moiza8994@gmail.com",
     PhoneNumber: 11111111,
     age: 20
  },
  {
    id: 2,
    firstName: "Abdul",
    lastName: "Rafay",
    email: "rafaya8994@gmail.com",
    PhoneNumber: 22222222,
    age: 22
  },
  {
    id: 3,
    firstName: "Abdul",
    lastName: "Malik",
    email: "malik8994@gmail.com",
    PhoneNumber: 33333333,
    age: 22
  },
  {
    id: 4,
    firstName: "Abdul",
     lastName: "Moid",
     email: "moida8994@gmail.com",
     PhoneNumber: 444444444,
     age: 20
  },
  {
    id: 5,
    firstName: "Abdullah",
     lastName: "khan",
     email: "abdullaha8994@gmail.com",
     PhoneNumber: 555555555,
     age: 22
  }
]


const resolvers={
    Query:{
      contactLiwsts: () => Contact
    }
}




const  typeDefs = gql`
   type List{
     id: Int
     firstName: String
     lastName: String
     email: String
     PhoneNumber: Int
     age: Int
   }
  type Query{
     contactLists: [List]
  }`

const server= new ApolloServer({typeDefs ,resolvers});
server.listen().then(({url}) =>{
     console.log(`🚀  Server ready at ${url}`);
})

