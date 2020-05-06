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
  clone() {
    return new Point(this.x, this.y);
  }
  visit(operation) {
    return operation(this.x, this.y);
  }
}

module.exports = {Point};
