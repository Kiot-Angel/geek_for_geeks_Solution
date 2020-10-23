// Leaders in Array

function leadersinArray(array){
   var max = array[array.length-1];
   var answer = [];
   answer.push(max);
  for(var i=array.length;i>=0;i--){
    if(max<array[i]){
      answer.push(array[i]);
      max = array[i];
    }
  }
return answer;
}

function main(){

  var array = [16,17,4,3,5,2];
  console.log(leadersinArray(array))
}


main();