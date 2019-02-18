function TDD(number) {

    let a = number * (16.67 / 100);
    let b = number * (66.67 / 100);
    let c = number * (16.67 / 100);

    a = Math.round(a);
    b = Math.round(b);
    c = Math.round(c);

    let result = [a,b,c];

    return result;
}

console.log(TDD(120));