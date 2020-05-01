express=require('express')
path=require('path')
geocode=require('./geocode')
forecast=require('./forecast')
const app=express()
const port=process.env.PORT || 3030
const publicDirPath=path.join(__dirname,'..','public')
app.use(express.static(publicDirPath))
let data={}
app.get('*',(req,res)=>{
    res.sendFile(path.join(publicDirPath,'index.html'))
    
})

// app.get('*',(req,res)=>{
//     //return res.sendFile(path.join(publicDirPath,'index.html'))
//     //console.log(req.query);
    
//     if(!req.query.address){
//         return res.send({error:'You must provide an address'})
//     }
//     geocode(req.query.address,(error,{lat,long,location}={})=>{
//         //console.log(lat,long);
//         console.log(req.query);
//         if(error){
//             return res.send({error})
//         }
//         forecast(lat,long,(error,forecastData)=>{
//             console.log(forecastData.current);
            
//             if(error){
//                 return res.send({error})
//             }
//         })
//     })
// })

app.listen(port,()=>{
    console.log("Listening on port 3030");
})
