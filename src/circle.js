const {Point} = require('./point');

class Circle {
  constructor(center, radius) {
    this.center = new Point(center.x, center.y);
    this.radius = radius;
  }
  toString() {
    return `[Circle @(${this.center.x},${this.center.y}) radius ${this.radius}]`;
  }
  isEqualTo(circle) {
    if (!circle instanceof Circle) return false;
    const areCenterEquals = this.center.isEqualTo(circle.center);
    const areRadiusEquals = this.radius == circle.radius;
    return areCenterEquals && areRadiusEquals;
  }
}

module.exports = {Circle};
