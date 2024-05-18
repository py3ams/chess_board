//This is a simple template for you to experiment with

//This is a comment  ... the two slashes at the start mean that the computer ignores it

//You can look up more commands here ... https://p5js.org/reference/

var left_speed = 1;
var right_speed = 1;

function setup()
{
    //this function runs once at the start of your program
    
    //this command creates a drawing area in the browser - it should only be called once
    createCanvas(600,600);
    background(200,200,200)

}

function draw()
{
    var x_shift = 35;
    var y_shift = 30;
    
    fill(
        127.5*(1 + sin(left_speed*frameCount/60)), 
        127.5*(1 + sin(left_speed*frameCount/75)), 
        127.5*(1 + sin(left_speed* frameCount/100)));
    for (let i = 0; i < 4; i++) {
        for (let j = 0; j < 4; j++) {
            rect(x_shift+128*i,y_shift+128*j,64,64);
        }
    }
    for (let i = 0; i < 4; i++) {
        for (let j = 0; j < 4; j++) {
            rect(x_shift+128*i+64,y_shift+128*j+64,64,64);
        }
    }
    fill(
        127.5*(1 + sin(right_speed*frameCount/160)), 
        127.5*(1 + sin(right_speed*frameCount/120)), 
        127.5*(1 + sin(right_speed*frameCount/80)));
    for (let i = 0; i < 4; i++) {
        for (let j = 0; j < 4; j++) {
            rect(x_shift+128*i+64,y_shift+128*j,64,64);
        }
    }
    for (let i = 0; i < 4; i++) {
        for (let j = 0; j < 4; j++) {
            rect(x_shift+128*i,y_shift+128*j+64,64,64);
        }
    }
    
}

function keyPressed() {
    if (keyCode == LEFT_ARROW){
        left_speed += 1;
    }
    if (keyCode == RIGHT_ARROW){
        right_speed += 1;
    }
    if (keyCode == UP_ARROW){
        left_speed -= 1;
    }
    if (keyCode == DOWN_ARROW){
        right_speed -= 1;
    }
    
    speed += 1;
}