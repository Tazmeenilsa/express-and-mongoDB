const express=require("express")
const router= express.Router()

router.get("/add",(req,res,next)=>{
    res.send('<form action="/item/product" method="POST"><input type="text"/><button>add</button></form>')
})
router.post("/product",(req,res,next)=>{
    console.log(req.body)
    res.send("Items/Products..")
})


module.exports=router