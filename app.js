const express=require('express')
const app=express()

// //cors in middleware
// //מיד לכל req הוא מוסיף ל res  את ההרשאות
// app.use((req, res, next)=>{
//     //מאפשר בקשות מכל מקור
//     res.header('Access-Control-Allow-Origin', '*');
//     //רשימה של כותרות אפשריות
//     res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization')
//     //other method
//     if (req.method === 'OPTIONS') {
//                 res.header('Access-Control-Allow-Methods', 'PUT, POST, PATCH, DELETE, GET')
//                 res.status(200).json({})
//      }
//      next()
// });


app.get('/',(req, res)=>{
    res.status(200).json({
        messege:"hello chaya rivka "
    })
}) 

// //לנתיב לא קיים
// app.use((req, res, next) => {
//     const error = new Error('Not Found')
//     error.status = 404
//     next(error)
// })

// app.use((error, req,res,next)=>{
//     res.status(error.status || 500);
//     res.json({
//         error:{
//             messege:error.messege
//         }
//     })
// })
module.exports = app