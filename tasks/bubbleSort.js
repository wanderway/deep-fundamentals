
function bubbleSort(arr) {

    let len = arr.length;
    let i, j, temp;

   for ( i = len; i > 0; i--) {
       for (j = 0; j < i; j++) {
           if (arr[i] < arr[j]) {
               temp = arr[i];
               arr[i] = arr[j];
               arr[j] = temp;
           }
       }
   }
    return arr;
}

console.log(bubbleSort([1, 6, 7, 2, 5, 3, 10]));