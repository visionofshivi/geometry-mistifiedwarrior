const assert = require('chai').assert;
const {Line} = require('../src/line');

describe('Line', () => {
  describe('line', () => {
    it('Should make line', () => {
      const line = new Line({x: 0, y: 0}, {x: 5, y: 0});
      assert.instanceOf(line, Line);
    });
  });

  describe('To String', () => {
    it('Should convert into string', () => {
      const line = new Line({x: 0, y: 0}, {x: 5, y: 0});
      assert.strictEqual(line.toString(), '[Line(0,0)to(5,0)]');
    });
  });

  describe('equal to', () => {
    it('Should return true if both lines are equal ', () => {
      const line = new Line({x: 0, y: 0}, {x: 5, y: 0});
      const line1 = new Line({x: 0, y: 0}, {x: 5, y: 0});
      assert.isTrue(line.isEqualTo(line1));
    });

    it('Should return false if both lines are not equal ', () => {
      const line = new Line({x: 0, y: 0}, {x: 5, y: 0});
      const line1 = new Line({x: 4, y: 5}, {x: 5, y: 5});
      assert.isFalse(line.isEqualTo(line1));
    });

    it('Should return true if both lines are same and opposite in direction ', () => {
      const line = new Line({x: 0, y: 0}, {x: 5, y: 0});
      const line1 = new Line({x: 5, y: 0}, {x: 0, y: 0});
      assert.isTrue(line.isEqualTo(line1));
    });
  });

  describe('length of Line', () => {
    it('Should gives the length of the line ', () => {
      const line = new Line({x: 0, y: 0}, {x: 5, y: 0});
      assert.strictEqual(line.length, 5);
    });
  });

  describe('slope of Line', () => {
    it('Should gives the slope of the line ', () => {
      const line = new Line({x: 5, y: 5}, {x: 0, y: 0});
      assert.strictEqual(line.slope, 1);
    });

    it('Should gives the slope of the line when parallel to x-axis ', () => {
      const line = new Line({x: 5, y: 0}, {x: 0, y: 0});
      assert.strictEqual(line.slope, 0);
    });

    it('Should gives the slope of the line when parallel to y-axis ', () => {
      const line = new Line({x: 0, y: 5}, {x: 0, y: 0});
      assert.strictEqual(line.slope, Infinity);
    });
  });
  describe('intercept of  Y Line', () => {
    it('Should gives the intercept of the y line ', () => {
      const line = new Line({x: 0, y: 0}, {x: 5, y: 5});
      assert.strictEqual(line.yIntercept, 0);
    });
  });

  describe('mid-point of tje Line', () => {
    it('Should gives the mid-point of the y line ', () => {
      const line = new Line({x: 0, y: 0}, {x: 6, y: 4});
      assert.strictEqual(line.midPoint, (3, 2));
    });
  });
});
