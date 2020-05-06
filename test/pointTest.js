const assert = require('chai').assert;
const {Point} = require('../src/point');

describe('Point', () => {
  describe('Point class', () => {
    it('Should give instances of Point', () => {
      const point = new Point(3, 5);
      assert.instanceOf(point, Point);
    });

    it('Should give false instances of Point if point is not instance', () => {
      const point = {x: 3, y: 5};
      assert.notInstanceOf(point, Point);
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
      assert.isTrue(point.isEqualTo(point1));
    });

    it('Should give false instances of Point if point is not instance', () => {
      const point = new Point(1, 5);
      const point1 = new Point(4, 5);
      // assert.strictEqual(point.isEqualTo(point1), false);
      assert.isFalse(point.isEqualTo(point1));
    });
  });

  describe('find Distance', () => {
    it('Should give distances within two points', () => {
      const point = new Point(0, 0);
      const point1 = new Point(0, 5);
      assert.strictEqual(point.findDistance(point1), 5);
    });
  });

  describe('clone', () => {
    it('Should clone the point ', () => {
      const point = new Point(0, 0);
      assert.deepStrictEqual(point.clone(), point);
    });
  });

  describe('visit', () => {
    it('Should give sum of  the point ', () => {
      const point = new Point(4, 5);
      const actual = point.visit((x, y) => x + y);
      assert.deepStrictEqual(actual, 9);
    });

    it('Should give subtract of  the point ', () => {
      const point = new Point(4, 5);
      const actual = point.visit((x, y) => x - y);
      assert.deepStrictEqual(actual, -1);
    });

    it('Should give product of  the point ', () => {
      const point = new Point(4, 5);
      const actual = point.visit((x, y) => x * y);
      assert.deepStrictEqual(actual, 20);
    });

    it('Should give remainder of  the point ', () => {
      const point = new Point(20, 4);
      const actual = point.visit((x, y) => x % y);
      assert.deepStrictEqual(actual, 0);
    });
  });
});
