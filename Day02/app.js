var fname = prompt("What is your first name?");
var lname = prompt("What is your last name");
var byear =  prompt ("What year were your born e.g 1982");
var fullname = fname + " " + lname;
var age = 2016 - byear;

console.log(fname);
console.log(lname);
console.log(age);
console.log("You are " + fullname + " and your age is " + age);
confirm("You are " + fullname + " and your age is " + age);
var resp = confirm("Everything correct?");
alert(resp);
document.write("You are " + fullname + " and your age is " + age);
