var btn = document.querySelectorAll('button');
var a = document.querySelector('a');

//var att = btn.getAttribute('data-response');

//console.log(att);
for (var i = 0; i < btn.length; i++) {
  btn[i].addEventListener('click',changecolor)
  /*btn[i].addEventListener('mouseover',function(){
    this.style.color = 'red';
  })
  btn[i].addEventListener('mouseout',function(){
    this.style.color = 'black';
  })
*/
}

 a.addEventListener('click',removeColor);
function changecolor(){
//  alert(this.dataset.response);
  document.body.style.backgroundColor = this.id;
  }

function removeColor () {
  var ranNum = Math.floor(Math.random() * 3);
  console.log(ranNum);
  btn[ranNum].removeEventListener('click',changecolor);
}
