class roof{
    constructor(x,y,width,height){
       var options={
           isStatic:true,
       }
    this.roof=Bodies.rectangle(x,y,width,height,options);
    this.width=width;
    this.height=height;
    World.add(world,this.roof)
    }

    display(){
        var pos=this.roof.position;
        rectMode(CENTER);
        rect(pos.x,pos.y,this.width,this.height);
    }
}