const exp = require("express");
const session = require("express-session");
const cookieParser = require("cookie-parser");
const app = exp();
const BP = require("body-parser");
const path = require("path");
const cheerio = require("cheerio");
const fs = require("fs");
const mongoose = require("mongoose");
const hostname = 'localhost';
const port = 3000;

mongoose.connect("mongodb+srv://AdityaBatgeri:Kiq2w2Ak7CR9bYgb@cluster0.d42f6ow.mongodb.net/Eventify?retryWrites=true&w=majority", {useNewUrlParser:true});
// mongoose.connect("mongodb://127.0.0.1:27017/Eventify", {useNewUrlParser:true});

var username,email,password;
var $ = cheerio.load(fs.readFileSync(__dirname + "/main_page.html"));
var er = cheerio.load(fs.readFileSync(__dirname + "/login.html"));

app.use(BP.json());
app.use(BP.urlencoded({extended:true}));
app.use(exp.static(path.join("public")));
app.use(session({
    secret: "Aditya",
    saveUninitialized: true,
    resave: true
}));


const struc1 = new mongoose.Schema({
    _username:String,
    _email:String,
    _password:String
})

const Registration = mongoose.model("registrations", struc1);

app.get("/" , function(req,res)
{
    if (req.session.view)
    {
        req.session.view++;
    }
    else
    {
        req.session.view = 1;
    }
    res.sendFile(__dirname + "/index.html");
})

app.get("/index.html" , function(req,res)
{
    if (req.session.view)
    {
        req.session.view++;
    }
    else
    {
        req.session.view = 1;
    }
    res.sendFile(__dirname + "/index.html");
})

app.get("/login.html" , function(req,res)
{
    if (req.session.view)
    {
        req.session.view++;
    }
    else
    {
        req.session.view = 1;
    }
    res.sendFile(__dirname + "/login.html");
})

app.get("/register.html" , function(req,res)
{
    if (req.session.view)
    {
        req.session.view++;
    }
    else
    {
        req.session.view = 1;
    }
    res.sendFile(__dirname + "/register.html");
})

app.post("/main_page.html" , function(req,res)
{
    username = req.body.NAME;
    email = req.body.EMAIL;
    password = req.body.PASSWORD;

    const upload = new Registration({_username:username , _email:email, _password:password});
    upload.save();
})

app.get("/main_page.html" , function(req,res)
{
    if (req.session.view)
    {
        req.session.view++;
    }
    else
    {
        req.session.view = 1;
    }

    $("#uuuu").html("Username :- " + username);
    $("#eeee").html("Email :- " + email);
    $("#pppp").html("Password :- " + password);
    $("#temp").html("Your Account was registered.");

    res.send($.html());
})

var present = 0;
var log_username, log_emailid, log_password
app.post("/check" , async function(req,res)
{   
    const cursor = Registration.find().cursor();

    for (let obj=await cursor.next(); obj != null; obj=await cursor.next())
    {
        if (obj._username == req.body.log_name || obj._email == req.body.log_name)
        {
            if(obj._password == req.body.log_pass)
            {
                present=1;
                log_username=obj._username;
                log_emailid=obj._email;
                log_password=obj._password;
            }
        }
    }
})

app.get("/check" , function(req,res)
{
    if (req.session.view)
    {
        req.session.view++;
    }
    else
    {
        req.session.view = 1;
    }

    if (present==1)
    {
        $("#uuuu").html("Username :- " + log_username);
        $("#eeee").html("Email :- " + log_emailid);
        $("#pppp").html("Password :- " + log_password);
        $("#temp").html("Succesfully Logged in !!");

        res.send($.html());
    }
    else 
    {
        er(".error").html("Incorrect information");
        er(".error").css("display" , "flex");
        er(".pc_form svg").css("bottom" , "40px");
        er(".mob_form svg").css("bottom" , "40px");

        res.send(er.html());
    }
})

app.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
  });