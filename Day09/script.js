/*var myCar = {
    make: 'Nissan',
    model: 'Altima',
    year: 2011,
    colr: 'white'
};

var me = {
  name: 'Gorav',
  sayName: function(){
    alert(this.name);
  }
}

function addFruit(newFruit) {

    fruits.push(newFruit);
    displayFruit();
}

*/

var fruitList = {
     fruits: ['apples', 'grapes', 'bananas'],
     displayFruit: function () {
         console.log(this.fruits);
     },
     addFruit: function(fruit) {
         this.fruits.push(fruit);
         this.displayFruit();
     },
     changeFruits: function(pos, value){
       this.fruits[pos] = value;
       this.displayFruit();
     },
     deletFruits: function(pos){
       this.fruits.splice(pos,1);
       this.displayFruit();
     }
};
