//
//
// function minInteger(arr) {
//     Math.min.apply(null, arr);
// }
//
//
// console.log(minInteger([123, 23, 123, 66, 45, -1, 0]));

let arr = [123, 23, 123, 66, 45, -1, 0];

let res = Math.min(...arr);



console.log(res);