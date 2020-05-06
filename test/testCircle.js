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
});
