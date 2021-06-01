var express=require('express');
var app=express();
var ip=require('ip');


app.get('/',(req,res)=>{
res.send("Hy from Punit");
}

)
app.get('/clientip',(req,res)=>
{
res.json({clientIP: req.ip});
}
)
app.get('/serverIP',(req,res)=>
{
res.json({serverIP: ip.address()});
}

)

app.listen(3000,() =>{
console.log("node server is start");

}


)