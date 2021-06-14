class paper
{
	constructor(x,y,w,h)
	{
		var options={
			isStatic:true,
            friction:0,
            density:1.2,
            restitution:0.3
        }
		this.x=x;
		this.y=y;
		this.w=w
		this.h=h
		this.body=Bodies.circle(x,y,40);
        this.loadImage("paper.png")
 		World.add(world, this.body);

	}
	display()
	{
			
			var paperPos=this.body.position;		

			push()
			translate(paperPos.x, paperPos.y);
			rectMode(CENTER)
			//strokeWeight(4);
			fill(128,128,128)
			rect(0,0,this.w, this.h);
			pop()
			
	}
keypressed(){
    if (keyCode === UP_ARROW){
        Matter.body.applyForce(paperObject.body,paperObject.body.position,{x:130,y:-145})
    }
}

}