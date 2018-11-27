var canvas, context, startX, endX, startY, endY;
var mouseIsDown = 0;

function init() {
    canvas = document.getElementById("canvas");
    context = canvas.getContext("2d");

    canvas.addEventListener("mousedown", mouseDown, false);
    canvas.addEventListener("mousemove", mouseXY, false);

    canvas.addEventListener("mouseup", mouseUp, false);
}

function mouseUp() {
    if (mouseIsDown !== 0) {
        mouseIsDown = 0;
        drawSquare(); //update on mouse-up
    }
}

function mouseDown() {
    mouseIsDown = 1;
    startX = endX = event.clientX - canvas.offsetLeft; //remember to subtract
    startY = endY = event.clientY - canvas.offsetTop; //canvas offset
    drawSquare(); //update
}

function mouseXY(eve) {

    if (mouseIsDown !== 0) {
        if (!eve) {
            var eve = event;
        }
        endX = event.pageX - canvas.offsetLeft;
        endY = event.pageY - canvas.offsetTop;

        drawSquare();
    }
}

function drawSquare() {
    // creating a square
    var width = Math.abs(startX - endX);
    var height = Math.abs(startY - endY);

    context.clearRect(0, 0, context.width, context.height);
    //or use fillRect if you use a bg color

    context.beginPath();
    context.rect(startX, startY, width, height);
    context.fillStyle = "yellow";
    context.fill();
    context.lineWidth = 7;
    context.strokeStyle = 'black';
    context.stroke();
}