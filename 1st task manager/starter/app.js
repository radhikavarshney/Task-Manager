const exp = require('express')
const app = exp()
const tasks = require('./route/tasks')
const connectDB=require('./db/connect')

const port = 3000

app.use(exp.json())


app.get('/hello',(req,res)=>{
    res.send('Task Manager App')
})

app.use('/api/v1/tasks',tasks)





app.listen(port,console.log(`User hit the server ${port}...`)
)