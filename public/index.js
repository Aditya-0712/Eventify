var optionA = document.getElementsByClassName("options")[0];
var optionB = document.getElementsByClassName("options")[1];
var optionC = document.getElementsByClassName("options")[2];

function selectA()
{
    optionA.style.backgroundColor = "rgba(156,119,248,0.1)";
    optionA.style.border = "1px solid rgba(27,27,175)";
    optionA.style.animation = "onselect 0.5s ease-out";
    optionB.style.backgroundColor = "white";
    optionB.style.border = "1px solid rgba(0,0,0,0.3)";
    optionB.style.animation = "none";
    optionC.style.backgroundColor = "white";
    optionC.style.border = "1px solid rgba(0,0,0,0.3)";
    optionC.style.animation = "none";
}

function selectB()
{
    optionB.style.backgroundColor = "rgba(156,119,248,0.1)";
    optionB.style.border = "1px solid rgba(27,27,175)";
    optionB.style.animation = "onselect 0.5s ease-out";
    optionA.style.backgroundColor = "white";
    optionA.style.border = "1px solid rgba(0,0,0,0.3)";
    optionA.style.animation = "none";
    optionC.style.backgroundColor = "white";
    optionC.style.border = "1px solid rgba(0,0,0,0.3)";
    optionC.style.animation = "none";
}

function selectC()
{
    optionC.style.backgroundColor = "rgba(156,119,248,0.1)";
    optionC.style.border = "1px solid rgba(27,27,175)";
    optionC.style.animation = "onselect 0.5s ease-out";
    optionA.style.backgroundColor = "white";
    optionA.style.border = "1px solid rgba(0,0,0,0.3)";
    optionA.style.animation = "none";
    optionB.style.backgroundColor = "white";
    optionB.style.border = "1px solid rgba(0,0,0,0.3)";
    optionB.style.animation = "none";
}

function redirect()
{
    if (optionA.style.backgroundColor == "rgba(156, 119, 248, 0.1)")
    {
        window.location.href = "login.html";
    }
    else if (optionB.style.backgroundColor == "rgba(156, 119, 248, 0.1)")
    {
        window.location.href = "/main_page.html";
    }
    else 
    {
        window.location.href = "/admin.html";
    }
}


var pc_optionA = document.querySelectorAll(".pc_options div")[0];
var pc_optionB = document.querySelectorAll(".pc_options div")[1];
var pc_optionC = document.querySelectorAll(".pc_options div")[2];

function pc_selectA()
{
    pc_optionA.style.backgroundColor = "rgba(156,119,248,0.1)";
    pc_optionA.style.border = "1px solid rgba(27,27,175)";
    pc_optionA.style.animation = "onselect 0.5s ease-out";
    pc_optionB.style.backgroundColor = "white";
    pc_optionB.style.border = "1px solid rgba(0,0,0,0.3)";
    pc_optionB.style.animation = "none";
    pc_optionC.style.backgroundColor = "white";
    pc_optionC.style.border = "1px solid rgba(0,0,0,0.3)";
    pc_optionC.style.animation = "none";
}

function pc_selectB()
{
    pc_optionB.style.backgroundColor = "rgba(156,119,248,0.1)";
    pc_optionB.style.border = "1px solid rgba(27,27,175)";
    pc_optionB.style.animation = "onselect 0.5s ease-out";
    pc_optionA.style.backgroundColor = "white";
    pc_optionA.style.border = "1px solid rgba(0,0,0,0.3)";
    pc_optionA.style.animation = "none";
    pc_optionC.style.backgroundColor = "white";
    pc_optionC.style.border = "1px solid rgba(0,0,0,0.3)";
    pc_optionC.style.animation = "none";
}

function pc_selectC()
{
    pc_optionC.style.backgroundColor = "rgba(156,119,248,0.1)";
    pc_optionC.style.border = "1px solid rgba(27,27,175)";
    pc_optionC.style.animation = "onselect 0.5s ease-out";
    pc_optionB.style.backgroundColor = "white";
    pc_optionB.style.border = "1px solid rgba(0,0,0,0.3)";
    pc_optionB.style.animation = "none";
    pc_optionA.style.backgroundColor = "white";
    pc_optionA.style.border = "1px solid rgba(0,0,0,0.3)";
    pc_optionA.style.animation = "none";
}

function pc_redirect()
{
    if (pc_optionA.style.backgroundColor == "rgba(156, 119, 248, 0.1)")
    {
        window.location.href = "/login.html";
    }
    else if (pc_optionB.style.backgroundColor == "rgba(156, 119, 248, 0.1)")
    {
        window.location.href = "/main_page.html";
    }
    else 
    {
        window.location.href = "/admin.html";
    }
}