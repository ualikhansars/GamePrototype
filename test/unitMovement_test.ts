import { expect, should, assert} from 'chai';

import Unit from '../src/units/Unit';
import {
  calcCoefficient,
  calcSpeed
} from '../src/units/unitMovement';
import {assignMoveToPosition} from '../src/units/unitActions';

let heavyInfantry = new Unit('HeavyInfantry', 300, 180, 160, 120, 2, 'img', 30);
assignMoveToPosition(heavyInfantry, 845, 324);

describe('Unit Movement Test', function() {
  describe('calcCoefficient', function() {
    it('should return 3', function() {
      assert.equal(3, calcCoefficient(heavyInfantry));
    });
  });
  describe('calcSpeed', function() {
    let {speedX, speedY} = calcSpeed(heavyInfantry);
    it('speedX and speedY should be both equal to 1', function() {
      assert.equal(1, speedX);
      assert.equal(1, speedY);
    });
  });
});
