var factorial = function(userNum) {
  var total = 1;
  for(var i = userNum; i > 1; i--) {
    total *= i;
  };
  return total;
}
