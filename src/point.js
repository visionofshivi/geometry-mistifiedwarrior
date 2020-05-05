class Point {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }
  toString() {
    return `[Point @(${this.x}, ${this.y})]`;
  }
  isEqualTo(point) {
    return this.x == point.x && this.y == point.y && point instanceof Point;
  }
  findDistance(point) {
    return Math.hypot(this.x - point.x, this.y - point.y);
  }
}

module.exports = {Point};
