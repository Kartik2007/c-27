class Chain {

constructor(bodyA,bodyB){
  var options = {
      bodyA:bodyA,
      bodyB:bodyB,
      stiffnes:0.04,
      length:13,
  }  
  this.chain =Constraint.create(options);

  World.add(world,this.chain)
}
display(){

push();


var pointA = this.chain.bodyA.position;
var pointB = this.chain.bodyB.position;
strokeWeight(6);
line(pointA.x,pointA.y,pointB.x,pointB.y);
pop();


}
}