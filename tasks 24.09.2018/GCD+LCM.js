// GCD - greatest common divisor
// LCM - least common multiple


var mathGCD = function (a, b) {
    if (b === 0) {
        return a;
    } else {
        return mathGCD(b, a % b);
    }
};

mathGCD(594, 7920);

function mathLCM(a, b) {
    mathLCM = (a * b / mathGCD(a, b));
    return mathLCM;
}

mathLCM(54, 72);