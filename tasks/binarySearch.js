function binarySearch(array, value) {

    let high = array.length - 1;
    let low = 0;

    while ( low <= high) {

        let mid = Math.floor((low + high) / 2);

        if ( array[mid] === value) {
            return 'Value ' + value + " is located at index of " + mid;
        }
        else if (value > array[mid]) {
            low = mid + 1;
        }
        else {
            high = mid - 1;
        }
    }
    return -1;
}

console.log(binarySearch([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 10)); // Value 10 is located at index of 9


// let array = [2, 3, 100, 4, 213, 1, 46, 9, 70, 10];
//
// function binarySearch(arr, value) {
//
//     let high = arr.length - 1;
//     let low = 0;
//
//     while ( low <= high) {
//
//         let mid = Math.floor((low + high) / 2);
//
//         if ( arr[mid] === value) {
//             return 'Value ' + value + " is located at index of " + mid;
//         }
//         else if (value > arr[mid]) {
//             low = mid + 1;
//         }
//         else {
//             high = mid - 1;
//         }
//     }
//     return -1;
// }
//
// let sortedArray = array.sort(function (a, b) {return a - b});
//
// console.log(sortedArray); // [ 1, 2, 3, 4, 9, 10, 46, 70, 100, 213 ]
// console.log(binarySearch(sortedArray, 100)); // Value 100 is located at index of 8

// function squareBruteForce(a) {
//
//     let epicilon = 0.01;
//     let numGuesses = 0;
//     let ans = 0.0;
//
//     while (Math.abs(Math.pow(ans, 2) - a) >= epicilon) {
//         ans += 0.00001;
//         numGuesses += 1;
//     }
//     if (Math.abs(Math.pow(ans, 2) - a) >= epicilon) {
//         return "failed... " + numGuesses;
//     }
//     else {
//         return ans.toFixed(5) + " close to square root of " + a + " with " + numGuesses + " number of guesses";
//     }
// }
//
// console.log(squareBruteForce(41.23555454523)); // 6.42072 close to square root of 41.23555454523 with 642072 number of guesses


// function squareBSearch(a) {
//
//     let epicilon = 0.01;
//     let low = 0.0;
//     let high = a;
//     let guesses = 0;
//     let guess = (high + low) / 2.0;
//
//     while (Math.abs((Math.pow(guess, 2)) - a) >= epicilon) {
//
//         if (Math.pow(guess, 2) < a) {
//             low = guess;
//         }
//         else {
//             high = guess;
//         }
//         guess = (high + low) / 2;
//         guesses += 1;
//     }
//
//     return guess.toFixed(5) + " close to square root of " + a + " with " + guesses + " number of guesses";
// }
//
// console.log(squareBSearch(41.23555454523));