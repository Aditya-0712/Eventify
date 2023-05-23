var mob_eye = document.querySelectorAll(".mob_form svg")[0];
var mob_pass = document.forms["mob_form"]["pass"];

function mob_showpass()
{
    if (mob_pass.type == "password")
    {
        mob_eye.innerHTML = '<path d="M288 32c-80.8 0-145.5 36.8-192.6 80.6C48.6 156 17.3 208 2.5 243.7c-3.3 7.9-3.3 16.7 0 24.6C17.3 304 48.6 356 95.4 399.4C142.5 443.2 207.2 480 288 480s145.5-36.8 192.6-80.6c46.8-43.5 78.1-95.4 93-131.1c3.3-7.9 3.3-16.7 0-24.6c-14.9-35.7-46.2-87.7-93-131.1C433.5 68.8 368.8 32 288 32zM144 256a144 144 0 1 1 288 0 144 144 0 1 1 -288 0zm144-64c0 35.3-28.7 64-64 64c-7.1 0-13.9-1.2-20.3-3.3c-5.5-1.8-11.9 1.6-11.7 7.4c.3 6.9 1.3 13.8 3.2 20.7c13.7 51.2 66.4 81.6 117.6 67.9s81.6-66.4 67.9-117.6c-11.1-41.5-47.8-69.4-88.6-71.1c-5.8-.2-9.2 6.1-7.4 11.7c2.1 6.4 3.3 13.2 3.3 20.3z"></path>';

        mob_pass.type = "text";
    }

    else 
    {
        mob_eye.innerHTML = '<path d="M38.8 5.1C28.4-3.1 13.3-1.2 5.1 9.2S-1.2 34.7 9.2 42.9l592 464c10.4 8.2 25.5 6.3 33.7-4.1s6.3-25.5-4.1-33.7L525.6 386.7c39.6-40.6 66.4-86.1 79.9-118.4c3.3-7.9 3.3-16.7 0-24.6c-14.9-35.7-46.2-87.7-93-131.1C465.5 68.8 400.8 32 320 32c-68.2 0-125 26.3-169.3 60.8L38.8 5.1zM223.1 149.5C248.6 126.2 282.7 112 320 112c79.5 0 144 64.5 144 144c0 24.9-6.3 48.3-17.4 68.7L408 294.5c8.4-19.3 10.6-41.4 4.8-63.3c-11.1-41.5-47.8-69.4-88.6-71.1c-5.8-.2-9.2 6.1-7.4 11.7c2.1 6.4 3.3 13.2 3.3 20.3c0 10.2-2.4 19.8-6.6 28.3l-90.3-70.8zM373 389.9c-16.4 6.5-34.3 10.1-53 10.1c-79.5 0-144-64.5-144-144c0-6.9 .5-13.6 1.4-20.2L83.1 161.5C60.3 191.2 44 220.8 34.5 243.7c-3.3 7.9-3.3 16.7 0 24.6c14.9 35.7 46.2 87.7 93 131.1C174.5 443.2 239.2 480 320 480c47.8 0 89.9-12.9 126.2-32.5L373 389.9z"></path>';

        mob_pass.type = "password";
    }
}

var prev = document.querySelectorAll(".prev_next div")[0];

prev.onclick = function()
{
    window.location.href = "index.html";
}

var pc_eye = document.querySelectorAll(".pc_form svg")[0];
var pc_pass = document.forms["pc_form"]["pass"];

function pc_showpass()
{
    if (pc_pass.type == "password")
    {
        pc_eye.innerHTML = '<path d="M288 32c-80.8 0-145.5 36.8-192.6 80.6C48.6 156 17.3 208 2.5 243.7c-3.3 7.9-3.3 16.7 0 24.6C17.3 304 48.6 356 95.4 399.4C142.5 443.2 207.2 480 288 480s145.5-36.8 192.6-80.6c46.8-43.5 78.1-95.4 93-131.1c3.3-7.9 3.3-16.7 0-24.6c-14.9-35.7-46.2-87.7-93-131.1C433.5 68.8 368.8 32 288 32zM144 256a144 144 0 1 1 288 0 144 144 0 1 1 -288 0zm144-64c0 35.3-28.7 64-64 64c-7.1 0-13.9-1.2-20.3-3.3c-5.5-1.8-11.9 1.6-11.7 7.4c.3 6.9 1.3 13.8 3.2 20.7c13.7 51.2 66.4 81.6 117.6 67.9s81.6-66.4 67.9-117.6c-11.1-41.5-47.8-69.4-88.6-71.1c-5.8-.2-9.2 6.1-7.4 11.7c2.1 6.4 3.3 13.2 3.3 20.3z"></path>';

        pc_pass.type = "text";
    }

    else 
    {
        pc_eye.innerHTML = '<path d="M38.8 5.1C28.4-3.1 13.3-1.2 5.1 9.2S-1.2 34.7 9.2 42.9l592 464c10.4 8.2 25.5 6.3 33.7-4.1s6.3-25.5-4.1-33.7L525.6 386.7c39.6-40.6 66.4-86.1 79.9-118.4c3.3-7.9 3.3-16.7 0-24.6c-14.9-35.7-46.2-87.7-93-131.1C465.5 68.8 400.8 32 320 32c-68.2 0-125 26.3-169.3 60.8L38.8 5.1zM223.1 149.5C248.6 126.2 282.7 112 320 112c79.5 0 144 64.5 144 144c0 24.9-6.3 48.3-17.4 68.7L408 294.5c8.4-19.3 10.6-41.4 4.8-63.3c-11.1-41.5-47.8-69.4-88.6-71.1c-5.8-.2-9.2 6.1-7.4 11.7c2.1 6.4 3.3 13.2 3.3 20.3c0 10.2-2.4 19.8-6.6 28.3l-90.3-70.8zM373 389.9c-16.4 6.5-34.3 10.1-53 10.1c-79.5 0-144-64.5-144-144c0-6.9 .5-13.6 1.4-20.2L83.1 161.5C60.3 191.2 44 220.8 34.5 243.7c-3.3 7.9-3.3 16.7 0 24.6c14.9 35.7 46.2 87.7 93 131.1C174.5 443.2 239.2 480 320 480c47.8 0 89.9-12.9 126.2-32.5L373 389.9z"></path>';

        pc_pass.type = "password";
    }
}

var prev1 = document.querySelectorAll(".prev_next div")[2];

prev1.onclick = function()
{
    window.location.href = "index.html";
}

var mob_username = document.forms["mob_form"]["username"];
var error = document.getElementsByClassName("error");
var mob_email = document.forms["mob_form"]["email"];
var regPattern = new RegExp('@gmail.com');

function mob_submit()
{
    var fleg1,fleg2,fleg3;
    fleg1=0;
    fleg2=0;
    fleg3=0;

    if (mob_username.value == '')
    {
        error[0].style.display = "flex";
        mob_username.style.borderColor = "red";
    }
    else 
    {
        error[0].style.display = "none";
        mob_username.style.borderColor = "rgba(0, 0, 0, 0.15)";
        fleg1=1;
    }

    if (mob_pass.value == '')
    {
        error[2].innerHTML = "This field is required";
        error[2].style.display = "flex";
        mob_pass.style.borderColor = "red";
        mob_eye.style.bottom = "40px";
    }
    else if (mob_pass.value.length<8)
    {
        error[2].innerHTML = "Must be atleast 8 characters";
        error[2].style.display = "flex";
        mob_pass.style.borderColor = "red";
        mob_eye.style.bottom = "40px";
    }
    else 
    {
        error[2].style.display = "none";
        mob_pass.style.borderColor = "rgba(0, 0, 0, 0.15)";
        mob_eye.style.bottom = "25px";
        fleg2=1;
    }

    if (mob_email.value == '')
    {
        error[4].innerHTML = "This field is required"
        error[1].style.display = "flex";
        mob_email.style.borderColor = "red";
    }
    else if (!regPattern.test(mob_email.value))
    {
        error[1].innerHTML = "Invalid Email-Id"
        error[1].style.display = "flex";
        mob_email.style.borderColor = "red";
    }
    else 
    {
        error[1].style.display = "none";
        mob_email.style.borderColor = "rgba(0, 0, 0, 0.15)";
        fleg3=1;
    }


    if (fleg1==1 && fleg2==1 && fleg3==1)
    {
        fetch("/main_page.html" , {
            method:'POST' , 
            headers:{
                'Accept':'Application/json',
                'Content-Type':'Application/json'
            },
            body:JSON.stringify({NAME:mob_username.value , EMAIL:mob_email.value , PASSWORD:mob_pass.value})
        })
        .then(response => response.json());

        window.location.href = "/main_page.html";
    }
}


var pc_username = document.forms["pc_form"]["username"];
var pc_email = document.forms["pc_form"]["email"];

function pc_submit()
{
    var adjust=0;
    var flag1, flag2, flag3;
    flag1 = 0;
    flag2 = 0;
    flag3 = 0;

    if (pc_username.value == '')
    {
        error[3].style.display = "flex";
        pc_username.style.borderColor = "red";
        adjust++;
    }
    else 
    {
        error[3].style.display = "none";
        pc_username.style.borderColor = "rgba(0, 0, 0, 0.15)";
        flag1=1;
    }

    if (pc_pass.value == '')
    {
        error[5].innerHTML = "This field is required";
        error[5].style.display = "flex";
        pc_pass.style.borderColor = "red";
        pc_eye.style.bottom = "40px";
        adjust++;
    }
    else if (pc_pass.value.length<8)
    {
        error[5].innerHTML = "Must be atleast 8 characters";
        error[5].style.display = "flex";
        pc_pass.style.borderColor = "red";
        pc_eye.style.bottom = "40px";
        adjust++;
    }
    else 
    {
        error[5].style.display = "none";
        pc_pass.style.borderColor = "rgba(0, 0, 0, 0.15)";
        pc_eye.style.bottom = "25px";
        flag2=1;
    }

    if (pc_email.value == '')
    {
        error[4].innerHTML = "This field is required"
        error[4].style.display = "flex";
        pc_email.style.borderColor = "red";
        adjust++;
    }
    else if (!regPattern.test(pc_email.value))
    {
        error[4].innerHTML = "Invalid Email-Id"
        error[4].style.display = "flex";
        mob_email.style.borderColor = "red";
        adjust++;
    }
    else 
    {
        error[4].style.display = "none";
        pc_email.style.borderColor = "rgba(0, 0, 0, 0.15)";
        flag3 = 1;
    }

    if (adjust>1)
    {
        document.getElementsByClassName("reg")[1].style.bottom = "10px";
    }
    else 
    {
        document.getElementsByClassName("reg")[1].style.bottom = "0px"; 
    }


    if (flag1 == 1 && flag2 == 1 && flag3 == 1)
    {
        fetch("/main_page.html" , {
            method:"POST",
            headers:{
                'Accept':'Application/json',
                'Content-Type':'Application/json'
            },
            body: JSON.stringify({NAME:pc_username.value , EMAIL:pc_email.value , PASSWORD:pc_pass.value})
        })
        .then(response => response.json());

        window.location.href = "/main_page.html";
    }
}