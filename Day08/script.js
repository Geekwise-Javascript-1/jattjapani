/*var a = document.createElement('a');

a.textContent = "I am a link to google";

a.href = "http://www.google.com";

a.setAttribute('style', 'background-color: red');

document.body.appendChild(a);

setTimeout(function() {
  document.body.removeChild(a);
}, 2000);

*/


function e(elementType, text, attributes, styles) {
  var a1 = document.createElement(elementType);
  a1.textContent = text;

  for (var i = 0; i < attributes.length; i++) {
      var attr = attributes[i];
      a1.setAttribute(attr[0], attr[1]);
  }
  for (var j= 0; j < styles.length; j++) {
      var stl = styles[j];
      a1.style[style[0]] = style[1];
  }
  return a1;
}


var a = e("a", "link to google", [['href', "http://www.google.com"]], [['color', "red"]]);

document.body.appendChild(a);
