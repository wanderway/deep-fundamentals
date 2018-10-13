// GCD - greatest common divisor
// LCM - least common multiple


var mathGCD = function (a, b) {
    if (b === 0) {
        return a;
    } else {
        return mathGCD(b, a % b);
    }
};

console.log(mathGCD(594, 7920)); // 198

function mathLCM(a, b) {
    mathLCM = (a * b / mathGCD(a, b));
    return mathLCM;
}

console.log(mathLCM(54, 72)); // 216