class Tree {
    constructor(x,y) {
      var options = {
          isStatic: true
      }
      this.body = Bodies.rectangle(x,y,options);
      World.add(world, this.body);
      this.image = loadImage("tree.png");
      imageMode(CENTER);
    } 
    display(){
      var pos=this.body.position;
      push();
      translate(pos.x,pos.y)
      image(this.image, 750, 210, this.Treewidth, this.Treeheight);
      this.Treewidth = 400;
      this.Treeheight = 400;
      pop();
    }
  };