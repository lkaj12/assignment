


//1
//converts kilometerToMeter
function kilometerToMeter(num){
    var result = num *1000;  // formula to covert kilometerToMeter
    return result;
}
var convert = kilometerToMeter(5); //function call
console.log(convert);







//2
//helps to fix budget
function budgetCalculator(watch,mobile,laptop){
    var watch =watch*50;  //quantity * fixed price
    var mobile =mobile*100;
    var laptop = laptop*500;
    var result=watch+mobile+laptop;
    return result;
  }
  console.log(budgetCalculator(2,3,4));







//3
// helps to calculate total cost according to days
  function hotelCost(day){
    var cost = 0;
    if(day<=10){
        Cost= day*100;
    }
     else if(day<=20){
    var firstpart=10*100; //first 10 days
    var remaining = day-10;
    var secondpart = remaining*80; //second 10 days
    Cost= firstpart + secondpart;
    
    
     }
     else{
         var firstpart = 10*100;
         var secondpart= 10*80;
         var remaining = day-20;
         var thirdpart= remaining*50; //third 10 days
         Cost=firstpart +secondpart + thirdpart;
    
     }
     return Cost;
    }
     var count = hotelCost(15); //funaction call
     console.log(count);
  
  





//4
//finds the largest word
     var friendList = ["abbas", "hasanul karim", "zim sarkar", "sajedul karim jony ", "mukti", "shovan", "zaman", "kamal", "akhi"];

     function megaFriend(arr) {
       var max = arr[0];
       for (i = 0; i < arr.length; i++) {  //length property of an objet
         if (arr[i].length > max.length) {
           max = arr[i];
         }
       }
       return max;
     }
     
     var largeName=megaFriend(friendList);
     console.log(largeName);
     



