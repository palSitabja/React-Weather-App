express=require('express')
path=require('path')
const app=express()
const port=process.env.PORT || 3030
const publicDirPath=path.join(__dirname,'..','public')
app.use(express.static(publicDirPath))
app.get('*',(req,res)=>{
    res.sendFile(path.join(publicDirPath,'index.html'))
    
})

app.listen(port,()=>{
    console.log("Listening on port"+port);
})
