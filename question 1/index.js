(function () {
  'use strict';
  
  angular.module('pwg.q1.app', [])
  
  .controller('PWGQ1Ctrl', ['$scope', function ($scope) {
    // Call fizzBuzz function with a countTo of 100 and assign to scope
    $scope.fizzBuzz = fizzBuzz(100);
  }]);
  
  // Return an array from 1 to countTo using FizzBuzz principles!
  function fizzBuzz(countTo) {
    var returnArray = [];
    
    for (var i = 1; i <= countTo; i++) {
      // If a multiple of 15 (and therefore 3 and 5) add FizzBuzz to array
      if (i % 15 === 0) returnArray.push('FizzBuzz');
      // If a multiple of 3 add Fizz to array
      else if (i % 3 === 0) returnArray.push('Fizz');
      // If a multiple of 5 add Buzz to array
      else if (i % 5 === 0) returnArray.push('Buzz');
      // Otherwise just add the number to the array
      else returnArray.push(i);
    }
    
    return returnArray;
  }
})();