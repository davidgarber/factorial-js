var factorial = function(userNum) {
  var total = 1;
  for(var i = userNum; i > 1; i--) {
    total *= i;
  };
  return total;
}

$(document).ready(function(){

$("form#factorial").submit(function(event){
  var userNum = parseInt($("input#factorial-num").val());
  $("#result").show();
  $(".factorial-answer").text(factorial(userNum));
  event.preventDefault();
  });

});
