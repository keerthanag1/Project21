class Ball{

    constructor(x,y,r){

        let options = {
            restitution: 0.01
        }
        this.body = Bodies.circle(x,y,r,options)
        this.x = x
        this.y = y
        this.r = r
        World.add(world, this.body)
    }

    show(){
        fill("red")
        ellipse(this.body.position.x, this.body.position.y, this.r)
    }
}