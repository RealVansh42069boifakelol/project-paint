 var mouseEvent = "empty";
 canvas = document.getElementById("myCanvas");
 ctx = canvas.getContext("2d");
 radius = document.getElementById("radius").value

 //variable
 var lastPositionOfMouseX, lastPositionOfMouseY;
 // 2 var
 color = "black";
 widthOfLine = 5;

 canvas.addEventListener("mousedown", mymousedown);
function mymousedown(e)
{
    //addition
    color = document.getElementById("ColorOfLine").value;
    widthOfLine = document.getElementById("widthOfLine").value;
    mouseEvent = "mousedown";
}
canvas.addEventListener("mouseup", mymouseup);
function mymouseup(e)
{
    mouseEvent = "mouseup";
}
canvas.addEventListener("mouseleave", mymouseleave);
function mymouseleave(e)
{
    mouseEvent = "mouseleave";
}
canvas.addEventListener("mousemove", mymousemove);
function mymousemove(e)
{
    currentPositionOfMouseX = e.clientX - canvas.offsetLeft;
    currentPositionOfMouseY = e.clientY - canvas.offsetTop;

    if(mouseEvent == "mousedown")
    {
       ctx.beginPath();
       ctx.stokeStyle = color;
       ctx.lineWidth = widthOfLine;
       ctx.arc(currentPositionOfMouseX,currentPositionOfMouseY,radius,0,2*Math.PI);
       ctx.stroke();
    }
    lastPositionOfMouseX = currentPositionOfMouseX;
    lastPositionOfMouseY = currentPositionOfMouseY;
}