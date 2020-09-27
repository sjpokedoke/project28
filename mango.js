class Mango {
    constructor(x,y,radius) {
      var options = {
        isStatic: true,
        'restitution':0,
        'friction':1,
    }
      this.body = Bodies.circle(x,y,radius/3, options);
      this.r = radius;
      World.add(world, this.body);
      this.image = loadImage("mango.png");
      imageMode(CENTER);
    }
    display(){
    var pos =this.body.position;
    push();
    translate(pos.x, pos.y);
    image(this.image, 0, 0, this.r, this.r);
    pop();
    }
  };