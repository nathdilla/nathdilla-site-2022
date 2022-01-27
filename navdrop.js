var i = 0;
var button=1;
var isFading=true;
var speed=500;
function fade()
{ 
    if(button<11)
    {
        var x=document.getElementsByName(button+"");
        var e=x[0];
        e.style.animation="spin2 4s linear forwards";
        button++;
        setTimeout(fade, speed);
    }
}
function fadeOut()
{ 
    if(button<11)
    {
        var x=document.getElementsByName(button+"");
        var e=x[0];
        e.
        button++;
        setTimeout(fade, speed);
    }
}
document.getElementById('header').onclick = function changeContent() {
if(isFading)
{
    fade();
    button=1;
    isFading=false;
}
else if(isFading==false)
{
    fadeOut();
    button=1;
    isFading=true;
}
}