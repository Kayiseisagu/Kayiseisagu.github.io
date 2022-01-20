let capture;
function setup() {
  createCanvas(512, 384);
  capture = createCapture(VIDEO);
  capture.hide();
  capture.size(512, 384)

}

function draw() {
  background(220);
  if(capture.width > 0){

    capture.loadPixels();

    for(let x = 0; x < width; x += 20){
      for(let y = 0; y< height; y +=20){
         let index = x + (y * width)
         let r = capture.pixels[index*4]
         let g = capture.pixels[index*4 + 1]
         let b = capture.pixels[index*4 + 2]

         let avg = r

         let size = map(avg,0,255,20,10)

         noStroke();
         fill(r,g,b)
         circle(x,y,size)
      }
    }
  }
}
