var temp = document.getElementsByClassName("temp");

function select(id)
{
    id.style.backgroundColor = "rgb(221, 234, 255)";
    id.style.border = "1px solid black";
    for (var i=0 ; i<3 ; i++)
    {
        if (temp[i] != id)
        {
            temp[i].style.border = "1px solid rgba(0,0,0,0.5)"
            temp[i].style.backgroundColor = "white";
        }
    }
}