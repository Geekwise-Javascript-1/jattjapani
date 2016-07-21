var btn = document.getElementById('btn'),
input1 = document.getElementById('Input1'),
input2 = document.getElementById('Input2'),
span = document.getElementById('span');
btn.onclick = runFunc;

function runFunc(){
//  var userInput = input1.value;
  span.innerHTML = input1.value;
  alert(input2.value);

  var val1 = input1.value;
  var val2 = input2.value;

  if(val1 == "" || val2 == ""){
    return '';
  }
  input1.value = "hello javascript";
  alert(val1);
  span.innerHTML = input2.value;

}
