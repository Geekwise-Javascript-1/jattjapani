alert("Square of a number");

var number = prompt("Enter a number");

var square = square(number);
alert(square);
console.log(square);

function square(number) {

    if (!isNaN(number)) {
        return (number * number);
    } else {
        return null;
    }
}
