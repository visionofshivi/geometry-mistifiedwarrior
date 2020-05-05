const assert = require('assert');
const {Point} = require('../src/point');

describe('Point', () => {
  describe('Point class', () => {
    it('Should give instances of Point', () => {
      const point = new Point(3, 5);
      assert.strictEqual(point instanceof Point, true);
    });

    it('Should give false instances of Point if point is not instance', () => {
      const point = {x: 3, y: 5};
      assert.strictEqual(point instanceof Point, false);
    });
  });

  describe('toString', () => {
    it('Should give string of Point', () => {
      const point = new Point(3, 5);
      assert.strictEqual(point.toString(), `[Point @(3, 5)]`);
    });
  });

  describe('isEqual ', () => {
    it('Should check instances of Point', () => {
      const point = new Point(3, 5);
      const point1 = new Point(3, 5);
      assert.strictEqual(point.isEqualTo(point1), true);
    });

    it('Should give false instances of Point if point is not instance', () => {
      const point = new Point(1, 5);
      const point1 = new Point(4, 5);
      assert.strictEqual(point.isEqualTo(point1), false);
    });
  });

  describe('find Distance', () => {
    it('Should give distances within two points', () => {
      const point = new Point(0, 0);
      const point1 = new Point(0, 5);
      assert.strictEqual(point.findDistance(point1), 5);
    });
  });
});
