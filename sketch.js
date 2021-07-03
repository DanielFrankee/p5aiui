let vertex_list = [];
let drawing_array = [];
let drawing = [];

function setup(){
  createCanvas(400,400);
  background(255);
}


// insted of pressing "shift" why not just pressing "c" for closing the current shape
// makes it alot easier
function keyPressed() {
  if (key == "c") {
    drawing_array.push(drawing);
    drawing = [];
    console.log(drawing_array.length);
  }
}

function draw(){

  noFill();
  if (mouseIsPressed){
    drawing.push([mouseX,mouseY]);
    beginShape();
    for (let i = 0; i < drawing.length; i++){
      let x = drawing[i][0];
      let y = drawing[i][1];
      vertex(x,y);
    }
  }
  endShape();
}
