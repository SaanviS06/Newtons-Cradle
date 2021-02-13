class Rope{
    contructor(bodyA,bodyB,offsetX,offsetY){
        this.offsetX = offsetX
        this.offsetY = offsetY
        var option = {
            bodyA:bodyA,
            bodyB:bodyB,
            stiffness: 0.4,
            length: 50,
            pointB:{x:this.offsetX, y:this.offsetY}
        }
        console.log(this.body.bodyA)
        console.log(this.body.bodyB)
        this.body = Constraint.create(option);
        World.add(world,this.body);
    }
    display(){

        var pointA = this.body.bodyA.positoin;
        var pointB = this.body.bodyB.position;

        strokeWeight(2)
        fill("white")

        var Anchor1X = pointA.x
        var Anchor1Y = pointA.y

        var Anchor2X = pointB.x+this.offsetX
        var Anchor2y = pointB.y+this.offsetY

        line(Anchor1X,Anchor1Y,Anchor2X,Anchor2y);


        
    }

}