const exp = require("express");
const app = exp();
const BP = require("body-parser");
const path = require("path");

app.use(BP.urlencoded({extended:true}));
app.use(exp.static(path.join("public")));


app.get("/" , function(req,res)
{
    res.sendFile(__dirname + "/index.html");
})

app.get("/index.html" , function(req,res)
{
    res.sendFile(__dirname + "/index.html");
})

app.get("/login.html" , function(req,res)
{
    res.sendFile(__dirname + "/login.html");
})

app.get("/register.html" , function(req,res)
{
    res.sendFile(__dirname + "/register.html");
})

app.listen(3000);