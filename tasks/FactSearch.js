// function fact(x) {
//     if (x == 1) {
//         return 1;
//     } else {
//         return x * fact(x - 1);
//     }
// }
//
// console.log(fact(5));

// recursion


function fact(x) {

    let result = 1;

    for (let i = 0; i < x; i++) {
        result *= (x - i);
    }

    return result;
}

console.log(fact(5));

// loop



