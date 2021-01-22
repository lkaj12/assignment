


//1
function kilometerToMeter(num){
    var result = num *1000;
    return result;
}
var convert = kilometerToMeter(5);
console.log(convert);







//2
function budgetCalculator(watch,mobile,laptop){
    var watch =watch*50;
    var mobile =mobile*100;
    var laptop = laptop*500;
    var result=watch+mobile+laptop;
    return result;
  }
  console.log(budgetCalculator(2,3,4));







//3
  function hotelCost(day){
    var cost = 0;
    if(day<=10){
        Cost= day*100;
    }
     else if(day<=20){
    var firstpart=10*100;
    var remaining = day-10;
    var secondpart = remaining*80;
    Cost= firstpart + secondpart;
    
    
     }
     else{
         var firstpart = 10*100;
         var secondpart= 10*80;
         var remaining = day-20;
         var thirdpart= remaining*50;
         Cost=firstpart +secondpart + thirdpart;
    
     }
     return Cost;
    }
     var count = hotelCost(15);
     console.log(count);
  
  





//4
     var friendList = ["abbas", "hasanul karim", "zim sarkar", "sajedul karim jony ", "mukti", "shovan", "zaman", "kamal", "akhi"];

     function megaFriend(arr) {
       var max = arr[0];
       for (i = 0; i < arr.length; i++) {
         if (arr[i].length > max.length) {
           max = arr[i];
         }
       }
       return max;
     }
     
     var largeName=megaFriend(friendList);
     console.log(largeName);
     



