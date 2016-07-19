alert("Capitalize and Period")

var string = prompt("Enter a String");

if (isNaN(string)) {
    var capitalizeString = capitalize(string);

    var addPeriod = period(capitalizeString);
    alert(addPeriod)
    console.log(addPeriod);
} else {
    console.log("You did not enter anything.");
    alert("You did not enter anything.");
}

function capitalize(string) {

    return string.charAt(0).toUpperCase() + string.slice(1);

}

function period(string) {

    if (string.charAt(string.length - 1) != ".") {
        return string + ".";
    } else {
        return string;
    }
}
