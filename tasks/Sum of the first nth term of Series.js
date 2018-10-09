// function SeriesSum(n){
//
//     var actual = 0;
//     var final = 1;
//
//     var mainDividend = 1;
//     var divider = 4;
//
//     if (n === 0) {
//         final = '0.00';
//     } else if ( n === 1) {
//         final = '1.00';
//     }
//
//     for (var i = 2; i <= n; i++) {
//
//         actual = mainDividend / divider;
//         final = final + actual;
//         divider = divider + 3;
//
//         final = Math.round(final * 100) / 100;
//     }
//
//     final = "'" + final + "'";
//
//     return final;
// }
//
// console.log(SeriesSum(5));


function sequence(n) {
    let divider = 1;
    let result = 0;
    for (let i = 0; i < n; i++) {
        result += 1 / divider;
        divider += 3;
    }
    return `'${result.toFixed(2)}'`;
}

console.log(sequence(3));
