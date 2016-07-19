alert("Flip string in half!")

var string = prompt("Enter a string")

if ((string.length % 2) == 0 && (string.length > 2)) {
    alert("Even String!\nOriginal - " + string + "\nFlipped - " +
    flipEvenString(string))
    console.log("You Entered - " + string);
    console.log("Flipped   - " + flipEvenString(string));

} else if (string.length % 2 != 0) {
    alert("Odd String!\nOriginal - " + string + "\nFlipped - " +
    flipOddString(string))
    console.log("You Entered - " + string);
    console.log("Flipped   - " + flipOddString(string));

} else if (string.length <= 0) {
    alert("Blank String.")
    console.log("You didn't enter anyting.");
}

function flipEvenString(string) {

    return string.slice(string.length / 2, string.length) +
        string.slice(0, string.length / 2);
}

function flipOddString(string) {

    return string.slice(parseInt((string.length / 2) + 1), string.length) +
           string.slice(parseInt(string.length / 2), parseInt(string.length / 2) + 1) +
           string.slice(0, string.length / 2);


}
