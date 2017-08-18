var assert = require('assert');
function getQuater(unitX, unitY, destX, destY){
  let quater;
  if(destX >= unitX && destY < unitY) {
    quater = 1;
  }
  else if(destX < unitX && destY <= unitY) {
    quater = 2;
  }
  else if(destX <= unitX && destY > unitY) {
    quater = 3;
  }
  else if(destX > unitX && destY >= unitY) {
    quater = 4;
  }
  return quater;
}


describe('Math tests', function() {
  describe('get quater', function() {
    it('should return 2', function() {
      assert.equal(2, getQuater(20, 20, 10, 10));
    });
  });
});
