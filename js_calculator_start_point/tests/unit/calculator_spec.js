var Calculator = require('../../public/js/calculator.js')
var assert = require('assert')

describe('calculator', function () {
  beforeEach(function () {
    calculator = new Calculator()
  });

  // write unit tests here in the form of "it should do something..."
  it('it has a sample test', function(){
    assert.equal(true, true)
  })

  it('can add to previous total', function(){
    calculator.previousTotal = 0;
    calculator.add(4)
    assert.equal(4, calculator.runningTotal)
  })

  it('can subtract values from previous total', function(){
    calculator.previousTotal = 20;
    calculator.subtract(5);
    assert.equal(15, calculator.runningTotal);
  })

  it('can multiply values from previous total', function(){
    calculator.previousTotal = 10;
    calculator.multiply(10);
    assert.equal(100, calculator.runningTotal)
  })

  it('can divide values from previous total', function(){
    calculator.previousTotal = 100;
    calculator.divide(10);
    assert.equal(10, calculator.runningTotal)
  })

   it('can correctly concatenate number clicks', function(){
     calculator.numberClick(4);
     calculator.numberClick(4);
     assert.equal(44, calculator.runningTotal);
  })

   it('can clear the runningTotal if a previous operation was just completed', function(){
     calculator.add(6);
     calculator.numberClick(9);
     assert.equal(9, calculator.runningTotal);
   })

   it('can correctly calculate the total result of multiple different operations', function(){
     calculator.numberClick(5);
     calculator.operatorClick("-");
     calculator.numberClick(2);
     calculator.operatorClick("+");
     calculator.numberClick(17); 
     calculator.operatorClick("=");
     assert.equal(20, calculator.runningTotal);
   })

   it('can clear the runningTotal without affecting the calculation', function(){
     calculator.numberClick(6);
     calculator.operatorClick("-");
     calculator.numberClick(4);
     calculator.clearClick();
     calculator.numberClick(3);
     calculator.operatorClick("=");
     assert.equal(3, calculator.runningTotal);
   })

   it('can reset the newTotal flag to false if 0 is in the runningTotal', function(){
     calculator.numberClick(0);
     assert.equal(false, calculator.newTotal);
   })

   it('can clear the runningTotal if a previous operation was just completed', function(){
     calculator.add(6);
     calculator.numberClick(9);
     assert.equal(9, calculator.runningTotal);
   })

   it('can clear the runningTotal if 0 is in it', function(){
     calculator.add(0);
     calculator.numberClick(6);
     assert.equal(6, calculator.runningTotal);
   })

});
