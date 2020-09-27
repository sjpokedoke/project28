class Stone {
    constructor(x,y,radius) {
      var options = {
        isStatic: false,
        'restitution':0,
        'friction':1,
        'density':1.2,
    }
      this.body = Bodies.circle(x,y,radius/3, options);
      this.r = radius;
      World.add(world, this.body);
      this.image = loadImage("stone.png");
      imageMode(CENTER);
    }
    display(){
    var pos =this.body.position;
    push();
    translate(pos.x, pos.y);
    fill("red");
    image(this.image, 0, 0, this.r, this.r);
    pop();
    }
  };