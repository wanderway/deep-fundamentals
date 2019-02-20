function numberOfFridaythe13thsIn(year) {
    let count = 0;

    for (let month = 0; month < 12; month++) {
        let d = new Date(year, month, 13);
        if(d.getDay() === 5) {
            count++;
        }
    }
    return count;
}

console.log(numberOfFridaythe13thsIn(1995)); // 1