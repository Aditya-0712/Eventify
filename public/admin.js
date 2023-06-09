var loading = document.getElementsByClassName("loading")[0];

window.onload = function()
{
    loading.style.display = "flex";
    setTimeout(() => {loading.style.display = "none";} , 1500);
}