const exp = require("express");
const app = exp();
const BP = require("body-parser");
const path = require("path");
const cheerio = require("cheerio");
const fs = require("fs");
const mongoose = require("mongoose");
const hostname = 'localhost';
const port = 3000;
const sessions = require("express-session");
const cookieParser = require("cookie-parser");

mongoose.connect("mongodb+srv://AdityaBatgeri:Kiq2w2Ak7CR9bYgb@cluster0.d42f6ow.mongodb.net/Eventify?retryWrites=true&w=majority", {useNewUrlParser:true});

var username,email,password,sess;
var $ = cheerio.load(fs.readFileSync(__dirname + "/main_page.html"));
var er = cheerio.load(fs.readFileSync(__dirname + "/login.html"));

app.use(BP.json());
app.use(BP.urlencoded({extended:true}));
app.use(exp.static(path.join("public")));

var oneDay = 1000 * 60 * 60 * 24;
app.use(sessions({
    secret:"aditya",
    saveUninitialized:true,
    resave:false,
    cookie:{maxAge:oneDay}
}));

app.use(cookieParser());


const struc1 = new mongoose.Schema({
    _username:String,
    _email:String,
    _password:String
})

const Registration = mongoose.model("registrations", struc1);

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
    username = req.body.NAME;
    email = req.body.EMAIL;
    password = req.body.PASSWORD;

    const upload = new Registration({_username:username , _email:email, _password:password});
    upload.save();
})

app.get("/main_page.html" , function(req,res)
{
    $("#cred_user").html(username + ".");

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

    res.send("/check");
})

app.get("/check" , function(req,res)
{
    if (present==1)
    {
        sess=req.session;
        sess.userID = log_username;
        sess.email = log_emailid;
        sess.pass = log_password;
        $("#cred_user").html(sess.userID + ".");

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

    console.log(present);
    present=0;
})

app.get("/guest" , function(req,res)
{
    res.sendFile(__dirname + "/main_page.html");
})

app.get("/logout" , function(req,res)
{
    req.session.destroy();
    res.redirect("/")
})

app.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
  });