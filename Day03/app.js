/*
var fName = prompt("What is your First Name?:");
var lName = prompt("What is your Last Name?: ")

console.log(fName);
alert(lName);
var userResp= confirm("Everything correct?");
alert(userResp);


var isItANumber = parseInt("35");
console.log(typeof isItANumber);


console.log(parseInt("10"));

console.log(parseInt("10.33"));
console.log(parseInt("10 years"));
console.log(parseInt("years 10"));
console.log(parseInt("10 ere"));


var a = parseInt(prompt("Enter a number"));
var b = parseInt(prompt("Enter a second number"));
var c = a + b;
console.log(c);
console.log(typeof c);

console.log(isNaN(''));

var age = prompt("What is your age?")
var gender = prompt("What is your gender?")
console.log(age);
console.log(gender);

age = parseInt(age);


if (gender == "Male" || gender == "M" || gender == "male" || gender == "m") {

    if (age < 18) {
        alert("You are " + age + " year old Male and below 18")
    }
    if (age >= 18 && age <= 50) {
        alert(" You are " + age + "year old Male and between 18-50")

    } else {
        alert(" You are " + age + " year old Male and over 50! ")
    }
} else if (gender == "Female" || gender == "F" || gender == "female" || gender == "f") {

    if (age < 18) {
        alert("You are " + age + " year old Female and below 18")
    }
    if (age >= 18 && age <= 50) {
        alert(" You are " + age + "year old Female and between 18-50")

    } else {
        alert(" You are " + age + " year old Female and over 50! ")
    }
}
 else  {
    alert("You are " + age + " years old but we don't know your gender?")
}
*/
/*
var age = prompt('What is your age?');
var gender = prompt('What is your gender')

 switch (age) {
   case age < 18 && gender == "male":
     alert("You are " + age + " year old Male and below 18")
     break;
  case age >= 18 && age <=50 && gender == "male":
    alert(" You are " + age + "year old Male and between 18-50")
    break;
   default:
    console.log('nothing left');
 }
 */
/*
  var age = prompt ('Type youe age');
  age = parseInt(age);

  var result = age < 18 ? alert('young') : alert ('old');

  console.log(result);
*/
// ******************Day 03 Assignment **********************

var option; //variable for user option entry
var number; // varaible for storing number entry
// Ask user to Enter  option 1 or 2
option = prompt("Please Select an Opton\n" + "1 - Enter a number.\n" +
    " 2 - End Program");

// Check if user Entry is valid either 1 or 2
if (!isNaN(option) && option != "" && option != "2") {
      alert("You Entered option 1.")
      console.log("Option " + typeof(option));


    number = prompt("Enter a number."); //Ask user to enter a number
    console.log("Number " + typeof(number));
    //Check if user entry was a number then store result as true or false
    var isNumber = isNaN(number);
    console.log("isNumber " + typeof(isNumber) + " " + isNumber);
    // Use switch statements to alert user of their entry
    switch (isNumber) {
        // If not a number or true then alert user
        case true && number != "":
            alert("This is not a number!")
            break;
        // If user enrty is a number or false then alert user
        case false:
            alert(number + " Is  a number. Good Job!")
            break;
        default:
            alert("The End")
    }

// Alert user of invalid option entry
} else  if (option == "2"){
       alert("The End!")
}
  else {
    alert("Invalid Entry! \n Try Again")
  }
