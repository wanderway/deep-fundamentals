function TDD(number) {

    var a = number * (16.67 / 100);
    var b = number * (66.67 / 100);
    var c = number * (16.67 / 100);

    a = Math.round(a);
    b = Math.round(b);
    c = Math.round(c);

    var result = [a,b,c];

    return result;
}

console.log(TDD(120));