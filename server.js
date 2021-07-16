const express = require('express')
const app = express()

app.get('/',(req,res)=>{
    res.send('삼천세계 도착')
})

app.listen(3000,()=>{
    console.log('삼천세계')
})