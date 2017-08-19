var assert = require('assert');

var unit = {
  x: 300,
  y: 180,
  destX: 845,
  destY: 324
}

function calcCoefficient(unit) {
  var pathX = Math.abs(unit.destX - unit.x);
  var pathY = Math.abs(unit.destY - unit.y);
  if(pathX >= pathY) return Math.round(pathX / pathY);
  if(pathY > pathX) return Math.round(pathY / pathX);
}

describe('Unit Movement Test', function() {
  describe('calcCoefficient', function() {
    it('should return 4', function() {
      assert.equal(4, calcCoefficient(unit));
    });
  });
});
