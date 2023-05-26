var ham = document.getElementById("hamburg");
var sidebar = document.getElementById("mob_sidebar");
ham.onclick = function()
{
    ham.classList.toggle("hamburgopen");
    sidebar.classList.toggle("sideopen");
}