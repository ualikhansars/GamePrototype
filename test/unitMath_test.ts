import { expect, should, assert} from 'chai';
import {getQuater} from '../src/units/unitMath';

describe('Math tests', function() {
  describe('get quater', function() {
    it('should return 2', function() {
      assert.equal(getQuater(20, 20, 10, 10), 2);
    });
  });
});
