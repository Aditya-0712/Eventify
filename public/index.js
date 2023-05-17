var optionA = document.getElementsByClassName("options")[0];
var optionB = document.getElementsByClassName("options")[1];
var optionC = document.getElementsByClassName("options")[2];

function selectA()
{
    optionA.style.backgroundColor = "rgba(156,119,248,0.1)";
    optionA.style.border = "1px solid rgba(27,27,175)";
    optionB.style.backgroundColor = "white";
    optionB.style.border = "1px solid rgba(0,0,0,0.3)";
    optionC.style.backgroundColor = "white";
    optionC.style.border = "1px solid rgba(0,0,0,0.3)";
}

function selectB()
{
    optionB.style.backgroundColor = "rgba(156,119,248,0.1)";
    optionB.style.border = "1px solid rgba(27,27,175)";
    optionA.style.backgroundColor = "white";
    optionA.style.border = "1px solid rgba(0,0,0,0.3)";
    optionC.style.backgroundColor = "white";
    optionC.style.border = "1px solid rgba(0,0,0,0.3)";
}

function selectC()
{
    optionC.style.backgroundColor = "rgba(156,119,248,0.1)";
    optionC.style.border = "1px solid rgba(27,27,175)";
    optionA.style.backgroundColor = "white";
    optionA.style.border = "1px solid rgba(0,0,0,0.3)";
    optionB.style.backgroundColor = "white";
    optionB.style.border = "1px solid rgba(0,0,0,0.3)";
}

function redirect()
{
    if (optionA.style.backgroundColor == "rgba(156, 119, 248, 0.1)")
    {
        window.location.href = "/login.html";
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