/* checkResponse();

function checkResponse() {
    var name = prompt("What is your name!");
    while (name == "" || name == null) {
        alert("Please type something!")
        name = prompt("What is your name!");
    }
    alert("Your name is " + name);
}
*/
/*var fruitColor = [];;

var cherry = ['cherry', 'red'];
var apple = ['apple', 'green'];
var banana = ['banana', 'yellow'];

fruitColor.push(cherry[1]);
fruitColor.push(banana[1]);
fruitColor.push(apple[1]);

console.log(fruitColor);
*/
/*
var fruits = ['apple', 'banana', 'cherry', 'mango'];

var lastFruit = fruits.pop();

console.log(lastFruit);
console.log(fruits);
*/

var fruits = ['apple', 'banana', 'cherry', 'mango'];

var getFruit = fruits.splice(1,1, 'grapes');
console.log(getFruit);
console.log(fruits);
