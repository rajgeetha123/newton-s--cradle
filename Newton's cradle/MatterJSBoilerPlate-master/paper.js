class paper{
    constructor(x,y,radius){
        var options={
            isStatic:false,
            restitution:0.3,
            friction:0.5,
            density:1.2,
        }
this.paper=Bodies.circle(x,y,radius,options);
this.radius=radius;
this.x=x;
this.y=y;
World.add(world,this.paper);
}


display(){
    ellipseMode(CENTER) ;
    ellipse(this.paper.position.x,this.paper.position.y,this.radius);
}
}
   