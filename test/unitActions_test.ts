import { expect, should, assert} from 'chai';
import Unit from '../src/units/Unit';
import {assignMoveToPosition} from '../src/units/unitActions';

let heavyInfantry = new Unit('HeavyInfantry', 300, 180, 160, 120, 2, 'img', 30);

describe('unitActions tests', function() {
  describe('assignMoveToPosition', function() {
    assignMoveToPosition(heavyInfantry, 845, 324);
    let moveToX = heavyInfantry.moveToX;
    let moveToY = heavyInfantry.moveToY;
    it('moveToX should be equal to 845', function() {
      assert.equal(moveToX, 845);
    });
    it('moveToY should be equal to 324', function() {
      assert.equal(moveToY, 324);
    });
  });
});
