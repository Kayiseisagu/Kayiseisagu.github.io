void setup() {
  size(1280, 720, P3D);
  smooth();
}

void draw() {
  background(0);
  //pushMatrix();
  //translate(width/2, height/2);
  //fill(22, 122, 21, 90);
  //rotateX(frameCount*0.02);
  //rotateY(frameCount*0.01);
  //stroke(21, 122, 22);
  //line(0, 60, random(-60, 60), random(-400));
  //fill(22, 122, 21, 90);
  //box(120);
  //line(0, 60, random(-400), random(-60, 60));
  //popMatrix();

  //pushMatrix();
  //translate(width/2, height/2, 20);
  //sphereDetail(12);
  //rotateX(frameCount*0.01);
  //rotateY(frameCount*0.02);
  //sphere(50);
  //popMatrix();

  translate(width/2, height/2);
  for (int i=0; i<=width; i+=50) {
    rectMode(CENTER);
    //noFill();
    noStroke();
    fill(22, 122, 21, 255-i*0.02-i*frameCount*0.002 % 255);
    rotateZ(frameCount*0.001);
    rotateY(frameCount*0.002);
    //rotateX(frameCount*0.001);
    rect(width/2, height/2, i, i);
  }
}
