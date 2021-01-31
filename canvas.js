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

// let drawBee = function(x, y){
//     context.lineWidth = 2;
//     context.strokeStyle = "Black";
//     context.fillStyle = "Gold";

//     circle(x, y, 8, true);
//     circle(x, y, 8, false);
//     circle(x - 5, y - 11, 5, false);
//     circle(x + 5, y -11, 5, false);
//     circle(x - 2, y - 1, 2, false);
//     circle(x + 2, y - 1, 2, false);
// }; 


// //Change coordinate of bee
// let update = function(coordinate){
//     let offset = Math.random() * 4 - 2;
//     coordinate += offset;
//     if(coordinate > 200) {
//         coordinate = 200;
//     } 
//     if (coordinate < 0) {
//         coordinate = 0;
//     }
//     return coordinate;
// }; 

// // Global vatiables
// let x = 100;
// let y = 100;

// setInterval(function(){
//     context.clearRect(0, 0, 200, 200);
//     drawBee(x, y);
//     x = update(x);
//     y = update(y);
//     context.stokeRect(0, 0, 200, 200);
// }, 50);

////---------- Create Ball

let Ball = function(){
    context.fillStyle = "Red";
    this.x = 100;
    this.y = 100;
    this.xSpeed = -2;
    this.ySpeed = 3;
};

Ball.prototype.draw = function(){
    circle(this.x, this.y, 5, true)
};

Ball.prototype.move = function(){//sharjum enq gngakin
    this.x += this.xSpeed;
    this.y += this.ySpeed;
};
Ball.prototype.checkCollision = function(){//stugum enq gndak@ xpum e paterin
    if (this.x < 0  || this.x > 195){
        this.xSpeed = -this.xSpeed;
    }
    if (this.y < 0 || this.y > 195){
        this.ySpeed = -this.ySpeed;
    }
};

let ball = new Ball();

setInterval(function(){
    context.clearRect(0, 0, 210, 210);
    ball.draw();
    ball.move();
    ball.checkCollision();
    context.strokeRect(0, 0, 200, 200);
}, 50);