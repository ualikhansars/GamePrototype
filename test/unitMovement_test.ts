import { expect, should, assert} from 'chai';

import Unit from '../src/units/Unit';
import {
  calcCoefficient,
  calcSpeed,
  calcGreaterSpeed,
  findTurnPoint,
  filterPath
} from '../src/units/unitMovement';
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

  describe('calcGreaterSpeed', function() {
    let greaterSpeed = calcGreaterSpeed(heavyInfantry);
    it('x should be more than y', function() {
      assert.equal('x', greaterSpeed);
    });
  });
  describe('findTurnPoint', function() {
    it('turnPoint should be at position (7, 7)', function() {
      let {turnPointX, turnPointY} = findTurnPoint(testUnit1);
      assert.equal(7, turnPointX);
      assert.equal(7, turnPointY);
    });
    it('turnPoint should be at position (6, 14)', function() {
      let {turnPointX, turnPointY} = findTurnPoint(testUnit2);
      assert.equal(6, turnPointX);
      assert.equal(14, turnPointY);
    });
    it('turnPoint should be at position (10, 10)', function() {
      let {turnPointX, turnPointY} = findTurnPoint(testUnit3);
      assert.equal(10, turnPointX);
      assert.equal(10, turnPointY);
    });
    it('turnPoint should be at position (9, 6)', function() {
      let {turnPointX, turnPointY} = findTurnPoint(testUnit4);
      assert.equal(9, turnPointX);
      assert.equal(6, turnPointY);
    });
  });

  describe('filterPath', function() {
    let path = [
      {x: 10, y: 20},
      {x: 10, y: 21},
      {x: 11, y: 22},
      {x: 11, y: 23}
    ]
    let unit1020 = new Unit('unit', 10, 20, 1, 1, 10, 'img', 10);
    let unit1124 = new Unit('unit', 11, 24, 1, 1, 10, 'img', 10);
    let path1 = filterPath(unit1020, path);
    let path2 = filterPath(unit1124, path);
    it('x[0] should be 10, y[0] is equal to 20', function() {
      assert.equal(10, path1[0].x);
      assert.equal(20, path1[0].y);
    });
    it('x[0] should be 11, y[0] is equal to 23', function() {
      assert.equal(11, path2[0].x);
      assert.equal(23, path2[0].y);
    });
  });
});
