function mathAF(quantity) {
    var a = 1;
    var n = a * quantity;
    var summAF = ((a + quantity) / 2) * n;

    return summAF;
}

console.log(mathAF(10)); // 55