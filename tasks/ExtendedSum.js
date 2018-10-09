function extendedSum() {

    let result = 0;

    for (let i = 0; i < arguments.length; i++) {
        result += arguments[i];
    }

    return result;
}

console.log(extendedSum(2, 1, 45)); // 48

