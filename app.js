const express=require('express')

const app=express()

app.get('/',(req, res)=>{
    res.status(200).json({
        messege:"hello world 0"
    })
})

module.exports = app