function reverseString(str) {
    return String(str).split("").reverse().map(Number);
}

console.log(reverseString(123123));