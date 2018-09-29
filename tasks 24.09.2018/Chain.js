function chain(str) {

    var final = 0;
    var actual = 0;
    var arr = str.split('');


    for (var i = 0; i < arr.length; i++) {
        if (arr[i] === '0') {
            actual = actual + 1;

            if (actual > final) {
                final = actual;
            }

        } else {
            actual = 0;
        }
    }

    return final;
}

console.log(chain('10001110110000001'));


