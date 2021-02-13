class Bob{
    constructor(x,y,r){
        var option = {
            isStatic: true,
            density: 0.3,
            friction: 1.5,
            restitution: 1.2

        }
        this.body = Bodies.circle(x,y,r/2,option)
        this.r = r


        

        //this.body.diamiter - 50
        //this.body = Bodies.circle(x, y, radius)
        
        World.add(world,this.body)
    }
    display(){
        var pos = this.body.position
        push ()
        translate(pos.x,pos.y)
        rotate (this.body.angle)
        ellipseMode(RADIUS)
        fill("pink")
        ellipse (0,0,this.r,this.r)
        pop ()
        
    }
}