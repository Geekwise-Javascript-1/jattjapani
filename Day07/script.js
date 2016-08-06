/*function foo () {
  var a = "inside function foo";
  return a;
}
//console.log(a); did not work
//console.log(foo()); did work

var name = 'gorav';

function capitalize() {

  return name[0].toUpperCase() + name.slice(1);
}

var capitazlizedName = capitalize();
//console.log(capitazlizedName); worked

var capitalize = function capitalize(str) {
  return str[0].toUpperCase() + str.slice(1);
}
console.log(capitalize('gorav'));

logName("Gorav");

function logName(name){
  console.log(name);
}
console.log(logAgain);
logAgain("Gorav again");

var logAgain = function(name) {
   console.log(name);
}

var name = "Gorav ";

function alertName() {
  alert(name);
  var name = "Aman";
  alert(name);
}
alertName(name);
alertName();


var h1 = document.getElementById('h1');
var hasClass = h1.hasAttribute('class');
   h1.setAttribute('rel','whatever');

   console.log(h1);
   h1.removeAttribute('rel')

console.log(h1);
*/

var anchors = document.querySelectorAll('ul li a');
//console.log(anchors.item(1));
for (var i = 0; i < anchors.length; i++) {
    var anchor = anchors.item(i);
     console.log(anchor.href);
}
