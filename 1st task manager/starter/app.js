const exp = require('express')
const app = exp()
const tasks = require('./oute/tasks')

const port = 3000

app.get('/hello',(req,res)=>{
    res.send('Task Manager App')
})


app.listen(port,console.log(`User hit the server ${port}...`)
)