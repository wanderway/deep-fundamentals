function century(year) {

    return Math.floor((year - 1) / 100) + 1;
}

console.log(century(1235)); // 13