
var btn = document.createElement("button");
var input = document.createElement("input");


btn.textContent = "click";
document.body.appendChild(btn);
document.body.appendChild(input);



function phoneNumber(){

  var pnumber = prompt("Enter You phone numner");
  console.log(pnumber);
}
//btn.addEventListener('click', phoneNumber);

btn.onclick = phoneNumber;
