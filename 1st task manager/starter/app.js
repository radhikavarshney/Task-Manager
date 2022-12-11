const exp = require('express')
const app = exp()
const tasks = require('./route/tasks')
const connectDB=require('./db/connect')
require('dotenv').config()

const port = 3000
app.use(exp.static("./public"))
app.use(exp.json())

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