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
*/
var age = prompt("What is your age?")
var gender = prompt("What is your gender?")
console.log(age);
console.log(gender);

//age = parseInt(age);


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
