const express=require("express")
const app=express()

app.get("/books",logger,(req,res)=>{
    res.send({ route: "/books" });

})

app.get("/libraries",logger,checkPermission("librarian"),(req,res)=>{
    res.send({ route: req.path, permission: req.permission });
    
})
app.get("/authors",logger,checkPermission("authors"),(req,res)=>{
    res.send({ route: req.path, permission: req.permission });
    
})
app.listen(5000,()=>{
    console.log("listening on port 5000")
})
function logger(req,res,next)
{
    console.log(req.path)
    next()
}
function checkPermission(val)
{
    return function(req,res,next){
       
        if(val=="librarian")
        {
            req.permission=true
        }
        if(val=="authors")
        {
            req.permission=true
        }
        next()
    }

}