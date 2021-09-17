const dammyData=require('./DammyData')
  

const resolvers={
    Query:{
        studentList: () =>  {
             return dammyData
         }
    }
}
module.exports=resolvers