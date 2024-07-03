import express from "express"
import cors from "cors"

//config
const app=express()
const port=4000
//middlewares
app.use(express.json())
app.use(cors())


app.get("/",(req,res)=>{
 res.send("API working.....")

})

app.listen(port,()=>{

    console.log(`server started at http://localhost:${port}`)
})