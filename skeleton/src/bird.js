export default class Bird {
    constructor(dimensions) {
        this.velocity = 0;
        this.dimensions = dimensions;
        this.width = (dimensions.width)/3;
        this.height = (dimensions.height)/2;

    }

    drawbird(ctx) {
        ctx.fillStyle = "pink";
        ctx.fillRect(this.width, this.height, 40, 30);
        
    }

    animate(ctx){
        this.drawbird(this.ctx);
    }
}