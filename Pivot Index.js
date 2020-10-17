// Finding Pivot Index 
/* (LeetCode-724)We define the pivot index as the index where the sum of all the numbers to the left of the index is equal to the sum of all the numbers to the right of the index.

If no such index exists, we should return -1. If there are multiple pivot indexes, you should return the left-most pivot index */


var pivotIndex = function(array) {
  var last_Total = 0;
 for(var i=1;i<array.length;i++){
   last_Total = last_Total+ array[i]
 }
  var first_Total = 0;
  var pivot = 0;
  while(pivot<array.length){
    if(first_Total == last_Total){
      return pivot
    }
    else{
      first_Total = first_Total + array[pivot];
      last_Total = last_Total - array[pivot+1];
      pivot++;
    }
  }
  return -1; 
};