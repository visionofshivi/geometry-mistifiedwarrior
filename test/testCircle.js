const assert = require('chai').assert;
const {Circle} = require('../src/circle');
describe('Circle', () => {
  describe('circle', () => {
    it('Should make a circle', () => {
      const circle = new Circle({x: 0, y: 0}, 5);
      assert.instanceOf(circle, Circle);
    });
  });

  describe('to String', () => {
    it('Should convert it into string', () => {
      const circle = new Circle({x: 0, y: 0}, 5);
      assert.strictEqual(circle.toString(), '[Circle @(0,0) radius 5]');
    });
  });

  describe('Is Equal To', () => {
    it('Should return true if both circles are equal', () => {
      const circle = new Circle({x: 0, y: 0}, 5);
      const circle1 = new Circle({x: 0, y: 0}, 5);
      assert.isTrue(circle.isEqualTo(circle1));
    });

    it('Should return false if both circles are unequal', () => {
      const circle = new Circle({x: 0, y: 0}, 5);
      const circle1 = new Circle({x: 0, y: 4}, 6);
      assert.isFalse(circle.isEqualTo(circle1));
    });
  });

  describe('Area', () => {
    it('Should calculate the area of the circle', () => {
      const circle = new Circle({x: 0, y: 0}, 5);
      assert.strictEqual(circle.area, 78.5);
    });
  });
});
