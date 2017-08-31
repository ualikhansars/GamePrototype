import { expect, should, assert} from 'chai';
import {
  calcCoefficient,
  calcSpeed,
  calcGreaterSpeed
} from '../src/units/unitUtils';

import Unit from '../src/units/Unit';
import {assignMoveToPosition} from '../src/units/unitActions';

let heavyInfantry = new Unit('HeavyInfantry', 300, 180, 160, 120, 2, 'img', 30);
let testUnit1 = new Unit('testUnit1', 3, 3, 1, 1, 2, 'img', 40);
let testUnit2 = new Unit('testUnit1', 3, 17, 1, 1, 2, 'img', 40);
let testUnit3 = new Unit('testUnit1', 12, 12, 1, 1, 2, 'img', 40);
let testUnit4 = new Unit('testUnit1', 9, 6, 1, 1, 2, 'img', 40);

assignMoveToPosition(heavyInfantry, 845, 324);
assignMoveToPosition(testUnit1, 7, 14);
assignMoveToPosition(testUnit2, 7, 14);
assignMoveToPosition(testUnit3, 9, 10);
assignMoveToPosition(testUnit4, 9, 10);

describe('Unit Utils test', function() {
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

  describe('calcGreaterSpeed', function() {
    let greaterSpeed = calcGreaterSpeed(heavyInfantry);
    it('x should be more than y', function() {
      assert.equal('x', greaterSpeed);
    });
  });
});
