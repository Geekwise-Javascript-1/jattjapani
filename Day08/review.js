

function num2Arr(num1, num2){
  var arr = [];
  var num1 = prompt("Enter first number");
  var num2 = prompt("Enter second number");

  arr[0] = parseInt(num1) + parseInt(num2);
  arr[1] = num1 * num2;

  console.log(arr[0]);
  console.log(arr[1]);
}

 num2Arr();

function caseCompare(){

  var getChar  = prompt("Please Enter a");

  if (getChar === getChar.toUpperCase()){
    return true;
  }
  else {
    return false;
  }
}

function str2Arr() {

  var arr = [];
  var getStr = prompt('please enter a word');

  for (var i = 0; i < getStr.length; i++) {
     arr.push(getStr[i])
  }
  return arr;
}
//console.log(str2Arr());

function fizzBuzz(){

  for (var i = 1; i <= 100; i++) {
    if(i%15 == 0){
      console.log("fizzBuzz");
    }
    else if (i % 3 == 0) {
      console.log("buzz");
    }
    else if (i % 5 == 0 ) {
      console.log("fizz");
    }
    else {
      console.log(i);
    }
  }
}
//fizzBuzz();
