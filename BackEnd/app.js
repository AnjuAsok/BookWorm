const express=require('express');
const app=new express();
app.get('/',function(req,res){
    res.send("hello worls");
});
app.listen(3000);