//
// function bubbleSort(arr) {
//
//     let len = arr.length;
//     let i, j, temp;
//
//    for ( i = len; i > 0; i--) {
//        for (j = 0; j < i; j++) {
//            if (arr[i] < arr[j]) {
//                temp = arr[i];
//                arr[i] = arr[j];
//                arr[j] = temp;
//            }
//        }
//    }
//     return arr;
// }
//
// console.log(bubbleSort([1, 6, 7, 2, 5, 3, 10]));

function bubbleSort(arr) {

    let i, j, container;
    let len = arr.length;

    for (j = 0; j < len - 1; j++) {
        for (i = 0; i < len - 1; i++) {
            if (arr[i] > arr[i + 1]) {
                container = arr[i];
                arr[i] = arr[i + 1] ;
                arr[i + 1] = container;
            }
        }
    }
    return arr;
}

console.log(bubbleSort([1, 6, 7, 2, 5, 3, 10]));