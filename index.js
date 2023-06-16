const express=require("express");
const path=require("path")
var bodyParser = require("body-parser")
var mongoose = require("mongoose")
const app=express();
const staticPath=path.join(__dirname,"/");
app.use(express.static(staticPath));
app.post("/",(req,res)=>{
    res.redirect("index.html")
    
}
)


app.listen(10000,()=>{
    console.log("Running on 10000");

})