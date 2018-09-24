function mathComparison(a, b) {

    if (a > b) {
        return '>';
    } else if (a === b) {
        return '=';
    } else {
        return '<';
    }
}

mathComparison(10, 20);