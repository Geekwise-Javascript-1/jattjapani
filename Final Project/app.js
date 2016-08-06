var addButton = document.getElementById('addButton');
var inputField = document.getElementById('textInput');
var toDoField = document.getElementById('toDoField');

addButton.addEventListener('click', addToList);
//listButton.addEventListener('click',addDoneList);
//toDoField.addEventListener('click',refresh );


function addToList() {
    if (inputField.value[0] != null) {
        var list = document.getElementById('toDoList');
        var newListItem = document.createElement('li');
        var newButton = document.createElement('button');

        newListItem.setAttribute('id', "listItem")
        newButton.setAttribute('class', "button");
        newButton.setAttribute('id', "toDoListButton");

        newButton.innerHTML = inputField.value;

        list.appendChild(newListItem);
        newListItem.appendChild(newButton);
        inputField.value = "";

    } else {
        alert('Enter Something!')
    }
    refreshToDoList();
}

// function addDoneList() {
//
//     var doneList = document.getElementById('doneList');
//     //var toDoList = document.getElementById('toDoListButton');
//     var newListItem = document.createElement('li');
//     var newButton = document.createElement('button');
//     //toDoList.addEventListener('click', add);
//
//     newButton.setAttribute('class', "button");
//     newButton.setAttribute('id', "doneListButton");
//     newButton.innerHTML = this.innerHTML;
//
//     doneList.appendChild(newListItem);
//     newListItem.appendChild(newButton);
//     refreshDoneList();
// }
// function reAddToDoList() {
//
//         var list = document.getElementById('toDoList');
//         var newListItem = document.createElement('li');
//         var newButton = document.createElement('button');
//
//         newListItem.setAttribute('id', "listItem")
//         newButton.setAttribute('class', "button");
//         newButton.setAttribute('id', "toDoListButton");
//
//         newButton.innerHTML = inputField.value;
//
//         list.appendChild(newListItem);
//         newListItem.appendChild(newButton);
//         inputField.value = "";
//         //refreshToDoList();
//   }
function refreshToDoList(){
  var button = document.querySelectorAll("ul li button");
  var list = document.querySelectorAll("ul");
  // for (var i = 0; i < button.length; i++) {
  //       button[i].addEventListener('click',addDoneList);
  //       //list[i].addEventListener('click',remove);
  // }
  for (var i = 0; i < list.length; i++) {
      //  list[i].addEventListener('click',addDoneList);
        list[i].addEventListener('click',remove);
  }
}
// function refreshDoneList(){
//   var button = document.querySelectorAll("ul li button");
//   var list = document.querySelectorAll("ul");
//   for (var i = 0; i < button.length; i++) {
//         button[i].addEventListener('click',reAddToDoList);
//         //list[i].addEventListener('click',remove);
//   }
//   for (var i = 0; i < list.length; i++) {
//       //  list[i].addEventListener('click',addDoneList);
//         list[i].addEventListener('click',remove);
//   }
// }

function remove(e){
   e.target.remove();
}
