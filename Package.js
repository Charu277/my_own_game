class Package {
     constructor(x,y){
         var options={
         restitution:0.8,
         friction:0.2,
         density:0.4

         }
         this.x=x
         this.y=y
         this.width=50;
         this.height=50;
         this.image=loadImage("images/package.png");
         this.body=Bodies.rectangle(this.x,this.y,this.width,this.height,options);
         World.add(world,this.body);
     }
     display(){
         var pos=this.body.position
         var angle=this.body.angle
         push();
         //var rand=Math.round(random)
         translate(pos.x,pos.y);
      rotate(angle);
      imageMode(CENTER);
     image(this.image,0,0,this.width,this.height);
     pop();

     }
}