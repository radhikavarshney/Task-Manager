const connectionString ="mongodb+srv://radhika:radhika01@nodeexpressproject.vje54vo.mongodb.net/03=task-manager?retryWrites=true&w=majority"


const mongoose = require('mongoose')

const connectDB = (url)=>{
    return mongoose
    .connect(connectionString,{
        useNewUrlParser:true,
        useCreateIndex:true,
        useFindAndModify:false,
        useUnifiedTopology:true
    })
}


module.exports = connectDB