// import { expect, should, assert} from 'chai';
//
// import Unit from '../src/units/Unit';
// import {filterPath} from '../src/units/unitPath';
//
// describe('Unit Path test', function() {
//   describe('filterPath', function() {
//     let path = [
//       {x: 10, y: 20},
//       {x: 10, y: 21},
//       {x: 11, y: 22},
//       {x: 11, y: 23}
//     ]
//     let unit1020 = new Unit('unit', 10, 20, 1, 1, 10, 'img', 10);
//     let unit1124 = new Unit('unit', 11, 24, 1, 1, 10, 'img', 10);
//     let path1 = filterPath(unit1020, path);
//     let path2 = filterPath(unit1124, path);
//     it('x[0] should be 10, y[0] is equal to 20', function() {
//       assert.equal(10, path1[0].x);
//       assert.equal(20, path1[0].y);
//     });
//     it('x[0] should be 11, y[0] is equal to 23', function() {
//       assert.equal(11, path2[0].x);
//       assert.equal(23, path2[0].y);
//     });
//   });
// });
