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
];

const course=[ 

  {
    courseId: 1,
    courseName: "Cloud Computing",
    courseToken: 000011,
  },

  {
    courseId:2,
    courseName: "Blockchain",
    courseToken: 000022,
  }
];

const resolvers={
  Query: {
    contacts: () => {
      return contactData
    },
    course: () =>{
      return course
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

     type Course{
       courseId: Int
       courseName: String
       courseToken: Int
     }


  type Query{
    contacts: [contact]
    course: [Course]
  }`

  const server= new ApolloServer({typeDefs, resolvers})

  server.listen().then(({url}) =>{
       console.log(` 🚀  Server ready at the ${url}`);    
  })