const express = require('express')
const app = express()
port = 5000

app.get('/', (req, res )=>{
     res.send("heyy")
})


app.listen(port, ()=>{
    console.log(`app listening on port ${port}`)
})