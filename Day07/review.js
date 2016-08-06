var btn = document.getElementById('goBtn'),
     fn = document.getElementById('firstName'),
     form = document.getElementById('form');
     dupOut = document.getElementById('dupes')

goBtn.onclick = test;


function test() {
  var formArr = [],
      formLen = form.elements.length;

  for (var i = 0; i < formLen; i++) {
       formArr.push(form.elements[i].value);

  }
   console.log(formArr);
  checkForDups(formArr);

}
 function checkForDups(arr){
   var sortArr = arr.slice().sort(),
        dupesArr = [];

   for (var i = 0; i < sortArr.length; i++) {
        if (sortArr[i+1] == sortArr[i]){
            dupesArr.push(sortArr[i]);
        }
   }

   console.log(dupesArr);
   outPutDups(dupesArr);
 }

 function outPutDups(arr){
   dupOut.innerHTML = arr.join(', ')
 }
