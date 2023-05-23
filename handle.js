const exp = require("express");
const app = exp();
const BP = require("body-parser");
const path = require("path");

var username,email,password;

app.use(BP.json());
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

app.post("/main_page.html" , function(req,res)
{
    username = req.body.USERNAME;
    email = req.body.EMAIL;
    password = req.body.PASSWORD;
})

app.get("/main_page.html" , function(req,res)
{
    res.sendFile(__dirname + "/main_page.html");
})

app.listen(3000);