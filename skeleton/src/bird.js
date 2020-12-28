const CONSTANTS = {
  GRAVITY: 0.8,
  FLAP_SPEED: -8,
  TERMINAL_VEL: 12,
  BIRD_WIDTH: 40,
  BIRD_HEIGHT: 30,
};

export default class Bird {
  constructor(dimensions) {
    this.velocity = 0;
    this.dimensions = dimensions;
    this.x = dimensions.width / 3;
    this.y = dimensions.height / 2;
  }

  move() {
    this.y += this.velocity;
    this.velocity += CONSTANTS.GRAVITY;
    // this.animate;
  }

  flap() {
    this.velocity = CONSTANTS.FLAP_SPEED;
  }

  drawbird(ctx) {
    ctx.fillStyle = "pink";
    ctx.fillRect(this.x, this.y, CONSTANTS.BIRD_HEIGHT, CONSTANTS.BIRD_WIDTH);
  }

  animate(ctx) {
    this.move();
    this.drawbird(ctx);
  }
}
