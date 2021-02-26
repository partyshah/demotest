
var song;

function setup() {
  song = loadSound('taylor.mp3');
  createCanvas(displayWidth, displayHeight);
  amp = new p5.Amplitude();
}

function draw() {
  background(2);
  var vol = amp.getLevel();
  var diam = map(vol, 0, 1, 10, 400);
  fill(255,0,0);
  ellipse(width/2, height/2, diam, diam);
}


function mousePressed() {
  if ( song.isPlaying() ) { // .isPlaying() returns a boolean
    song.stop();

  } else {
    song.play();
    background(0,255,0);
  }
}
