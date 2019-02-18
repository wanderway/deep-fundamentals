// function removeChar(srt) {
//     let i;
//     let result = '';
//
//     for (i = 1; i < (srt.length - 1); i++) {
//         result += srt[i];
//     }
//     return result;
// }
//
// console.log(removeChar('salam'));

function removeChar(str) {
    return str.slice(1, -1);
}

console.log(removeChar('salam'));