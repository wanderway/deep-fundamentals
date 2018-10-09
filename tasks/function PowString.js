//
//
// function someFun(num) {
//
//     var r = 0;
//     var f = '';
//
//     var numToString = num.toString();
//
//     var goGo = Array.from(numToString);
//
//     for (var i = 0; i < goGo.length; i++) {
//
//             r = Math.pow(goGo[i], 2);
//             f = f + r;
//     }
//
//     return f;
//
//
//
//
// }
//
// console.log(someFun(921199));



// function someFun(num) {
//
//     let r = 0;
//     let f = '';
//
//     let numToString = num.toString();
//
//     for (let i = 0; i < numToString.length; i++) {
//
//         r = Math.pow(numToString[i], 2);
//         f += r;
//     }
//
//     return f;
// }
//
// console.log(someFun(921199));


function numPowString(num) {

    let result = '';
    let container = 0;

    let string = num.toString();

    for (let i = 0; i < string.length; i++) {

        container = Math.pow(string[i], 2);
        result += container;
    }

    return result;
}

console.log(numPowString(921199));


