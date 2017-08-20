import { expect, should, assert} from 'chai';
import {
  getQuater,
  makeAnglePositive,
  getCanvasAngleQuater,
  chooseRotationDirection,
  calcCanvasAngle
} from '../src/units/unitMath';

describe('Math tests', function() {
  describe('get quater', function() {
    it('should return 2', function() {
      assert.equal(getQuater(20, 20, 10, 10), 2);
    });
  });
  describe('Make angle positive', () => {
    it('negative angle -20 is equal to 340 positive angle', () => {
        assert.equal(makeAnglePositive(-20), 340);
    });
  });
  describe('Get canvas angle quater', () => {
    it('350 degress should be in the Second Quater', () => {
        assert.equal(getCanvasAngleQuater(350), 2);
    });
    it('225 degress should be in the Third Quater', () => {
        assert.equal(getCanvasAngleQuater(225), 3);
    });
    it('10 degress should be in the First Quater', () => {
        assert.equal(getCanvasAngleQuater(10), 1);
    });
    it('120 degress should be in the Fourth Quater', () => {
        assert.equal(getCanvasAngleQuater(120), 4);
    });
  });
});

describe('Choose rotationDirection', () => {
  it('If starts 10 degree and finish is 300 degree, start should be 10, finish = -60, rotationDirection = -1', () => {
      let {startAngle,finishAngle,rotationDirection} = chooseRotationDirection(10, 300);
      assert.equal(startAngle, 10);
      assert.equal(finishAngle, -60);
      assert.equal(rotationDirection, -1);
  });
  it('If starts 80 degree and finish is 225 degree, start should be 80, finish = 225, rotationDirection = 1', () => {
      let {startAngle,finishAngle,rotationDirection} = chooseRotationDirection(80, 225);
      assert.equal(startAngle, 80);
      assert.equal(finishAngle, 225);
      assert.equal(rotationDirection, 1);
  });
  it('If starts 350 degree and finish is 20 degree, start should be -10, finish = 20, rotationDirection = 1', () => {
      let {startAngle,finishAngle,rotationDirection} = chooseRotationDirection(350, 20);
      assert.equal(startAngle, -10);
      assert.equal(finishAngle, 20);
      assert.equal(rotationDirection, 1);
  });
});

describe('calcCanvasAngle', () => {
  it('Angle should be equal to 90 degree', () => {
      assert.equal(calcCanvasAngle(300, 180, 400, 180), 90);
  });
});
