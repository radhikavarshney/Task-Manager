const exp = require('express')
const app = exp()
const tasks = require('./route/tasks')
const connectDB=require('./db/connect')
require('dotenv').config()

const port = 3000

app.use(exp.json())


app.get('/hello',(req,res)=>{
    res.send('Task Manager App')
})

app.use('/api/v1/tasks',tasks)

const start = async ()=> {
    try {
        await connectDB(process.env.MONGO_URI)
        app.listen(port,console.log(`User hit the server ${port}...`))
    } catch (error) {
        console.log(error);
        
    }
}

start()