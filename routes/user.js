const express=require("express")
const router= express.Router()
const Users=require('../schema/user')


router.get("/add",(req,res,next)=>{
    res.send('<form action="/user/addUser" method="POST"><input type="text"/><button>add</button></form>')
})
// router.post("/product",(req,res,next)=>{
//     console.log(req.body)
//     res.send("Products..")
// })

router.get("/getUser",(req,res)=>{
    Users.findOne({age:22})
    .then(data=>{
    console.log(data)
    res.send(data)
    } 
    )
    .catch(err=>console.log(err))
})


router.post("/addUser",(req,res,next)=>{
  let newUser={
    id:1,
    name:"New User 1",
    age:22,
    gender:"Male"
  } ;
  const user=new Users(newUser)
  user.save(err=>{
    if(err){
        res.send(err)
    }
    else{
        res.send({message:"USer added to DB"})
    }
  })
  console.log(newUser)
})

module.exports=router