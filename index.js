const express=require('express')
const app=express()
const port= 8000
const mongoose  = require('mongoose')
app.use(express.json())

const useRoutes=require("./routes/user")
app.use("/user",useRoutes)

const itemRoutes=require("./routes/item")
app.use("/item",itemRoutes)


mongoose.set("strictQuery",false)
mongoose.connect("mongodb+srv://admin:adminilsa@cluster0.qrwncm7.mongodb.net/test",{
    useNewurlParser:true,
    useUnifiedTopology:true
},()=>{
    console.log("DB connected")
}
)


app.listen(port,()=>{
    console.log(`listening to the port ${port}`)
})
