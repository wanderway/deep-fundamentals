function mathSalary(a, b, c) {
    if (a > c && a > b) {
        if (c > b) {
            return (a - b)
        } else {
            return (a - c)
        }
    } else if (b > a && b > c) {
        if (a > c) {
            return (b - c);
        } else {
            return (b - a);
        }
    } else if (c > a && c > b) {
        if (a > b) {
            return (c - b);
        } else {
            return (c - a);
        }
    }
}

mathSalary(200, 1100, 600);