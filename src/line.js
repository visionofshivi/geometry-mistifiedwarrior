const {Point} = require('./point');

class Line {
  constructor(endA, endB) {
    this.endA = new Point(endA.x, endA.y);
    this.endB = new Point(endB.x, endB.y);
  }
  toString() {
    return `[Line(${this.endA.x},${this.endA.y})to(${this.endB.x},${this.endB.y})]`;
  }
  isEqualTo(line) {
    if (!line instanceof Line) return false;
    const areEndAEquals = this.endA.isEqualTo(line.endA);
    const areEndBEquals = this.endB.isEqualTo(line.endB);
    const oppositeEndA = this.endA.isEqualTo(line.endB);
    const oppositeEndB = this.endB.isEqualTo(line.endA);
    return (areEndAEquals && areEndBEquals) || (oppositeEndA && oppositeEndB);
  }
  get length() {
    return this.endA.findDistance(this.endB);
  }
  get slope() {
    const slope = (this.endB.y - this.endA.y) / (this.endB.x - this.endA.x);
    return slope == -Infinity ? Infinity : slope;
  }
  get yIntercept() {
    return this.endA.y - this.slope * this.endA.x;
  }
  get midPoint() {
    const result =
      ((this.endA.x + this.endB.x) / 2, (this.endA.y + this.endB.y) / 2);
    return result;
  }
}

module.exports = {Line};
