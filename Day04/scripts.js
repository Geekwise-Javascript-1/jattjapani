/*var doSomething = prompt("What would you like to do")
var newString;
console.log(doSomething);
console.log(doSomething.length);
console.log(doSomething.indexOf("d"));
console.log(doSomething.charAt(0));

for (i = 0, i < doSomething.length, i++){
  if { (doSomething.charAt(i) == " "){

  }
  else
    newString.charAt(i) = doSomething.charAt(i);

}
}
*/
/*
var number1 = parseInt(prompt("Please enter a number"));

if (isNaN(number1)) {
  alert("This is not a number!")
  }
  else {
    var number2 = parseInt(prompt("Please enter a 2nd number"));
    if (isNaN(number2)){
      alert("This is not a number!")
    }
  }
   if ( !isNaN(number1) && !isNaN(number2)) {

     var multiply = parseInt(number1) * parseInt(number2);
     var divide   = parseInt(number1) / parseInt(number2);
     console.log(multiply);
     console.log(divide);
   }
   else {
       alert("Your Entries were incorrect!")
   }
   */
/*
   var myString = "red , green , yellow, blue";
   var string3 = "";

   var string1 = myString.indexOf("y");
   console.log(string1);

   var string2 = myString.indexOf("w");
   console.log(string2);

   for (i = string1; i <= string2; i++){
     string3 = string3 + myString.charAt(i);
   }

   console.log(string3);
  */

/*  var randNum = Math.random();
  var multiply = randNum * 11;
  var round = Math.floor(multiply);

  console.log(randNum);
  console.log(multiply);
  console.log(round);
  console.log(Math.ceil(multiply));
  console.log(Math.round(multiply));

  var date = new Date();
  var daysOfWeek = ['sun','mon', 'tue', 'wed', 'thur', 'fri', 'sat'];

  console.log(daysOfWeek[date.getDay()]);
*/

function capitalize(string) {
  var firstLetter = string.charAt(0);
  var firstLetterCapitalize = firstLetter.toUpperCase()
  var sliceString = string.slice(1);

  var capitalizeName = firstLetterCapitalize + sliceString;

  console.log(capitalizeName);
}

var name = prompt("Enter your name");

capitalize(name);
