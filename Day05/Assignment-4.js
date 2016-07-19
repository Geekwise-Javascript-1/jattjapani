alert("Average of 4 numbers in an Array")
var array = [];
array[0] = prompt("Enter first number");
array[1] = prompt("Enter second number");
array[2] = prompt("Enter third number");
array[3] = prompt("Enter fourth number");

if (checkArray(array) == false) {
    alert("You did not enter a number in the array.")
    alert(" You Entered \n" + array)
    console.log(array);
}
else {
  alert(" You Entered \n" + array)
  console.log(array);
  console.log(average(array));
  alert("Average - " + average(array))
}
alert("The End")
function checkArray(array) {

        for (i = 0; i < array.length; i++) {
        if (isNaN(parseInt(array[i]))) {
            return false;
        }
    }
  }

  function average(array){
    var sum = 0;
    for (i = 0; i < array.length; i++) {
      sum = sum + parseInt(array[i]);
    }
    return sum/array.length;

  }
