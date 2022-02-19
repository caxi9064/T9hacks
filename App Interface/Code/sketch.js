let button;
let img;

function preload() {
  // loads all the images together
  wake_up = loadImage('SunSalutations3.jpg');
  stimulated = loadImage('happy-brain2.jpg');
  focus = loadImage('microscope-colored2.jpg');
  meditate = loadImage('21ah-meditation-superJumbo2.jpg');
}

function setup() {
  // set backgound color and size
  createCanvas(400, 450);
  background(230, 230, 250);
  
  // set app title
  textFont('Georgia', 50);
  text('Navillera', 100, 50);

  // images set up
  // (img, x-axis, y-axis, length, width)
  image(wake_up, 65, 100, 100, 100);
  image(stimulated, 230, 100, 100, 100);
  image(focus, 65, 260, 100, 100);
  image(meditate, 230, 260, 100, 100);
  
  // set up all buttons (color, size, positions)
  let col = color(255, 255, 255, 255);
  
  button1 = createButton('Wake Up');
  button1.style('background-color', col);
  button1.position(80, 210);
  button1.mousePressed(setMood);
  
  button2 = createButton('Stimulate');
  button2.style('background-color', col);
  button2.position(244, 210);
  button2.mousePressed(setMood);
  
  button3 = createButton('Focus');
  button3.style('background-color', col);
  button3.position(87, 370);
  button3.mousePressed(setMood);
  
  button4 = createButton('Meditate');
  button4.style('background-color', col);
  button4.position(246, 370);
  button4.mousePressed(setMood);
}

function setMood() {
  
}