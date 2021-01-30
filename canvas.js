let canvas = document.getElementById("canvas");
let context = canvas.getContext("2d");

// Create circle
let circle = function(x, y, radius, fillCircle){
    context.beginPath();
    context.arc(x, y, radius, 0, Math.PI * 2, false);
        if(fillCircle){
            context.fill();
        } else {
            context.stroke();
        }
};

let drawBee = function(x, y){
    context.lineWidth = 2;
    context.strokeStyle = "Black";
    context.fillStyle = "Gold";

    circle(x, y, 8, true);
    circle(x, y, 8, false);
    circle(x - 5, y - 11, 5, false);
    circle(x + 5, y -11, 5, false);
    circle(x - 2, y - 1, 2, false);
    circle(x + 2, y - 1, 2, false);
}; 


//Change coordinate of bee
let update = function(coordinate){
    let offset = Math.random() * 4 - 2;
    coordinate += offset;
    if(coordinate > 200) {
        coordinate = 200;
    } 
    if (coordinate < 0) {
        coordinate = 0;
    }
    return coordinate;
}; 

// Global vatiables
let x = 100;
let y = 100;

setInterval(function(){
    context.clearRect(0, 0, 200, 200);
    drawBee(x, y);
    x = update(x);
    y = update(y);
    context.stokeRect(0, 0, 200, 200);
}, 50);

