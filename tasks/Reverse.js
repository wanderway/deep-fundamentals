 // function reverseString(str) {
//     if (str === "")
//         return "";
//     else
//         return reverseString(str.substr(1)) + str.charAt(0);
// }
//
//
// console.log(reverseString("hello"));

function reverseString(str) {
    let newString = '';

    for (let i = str.length - 1; i >= 0; i--) {
        newString +=  str[i];
    }

    return newString;
}

console.log(reverseString('Hello world im jj')); // 17 iterations


// Step 1. Create an empty string that will host the new created string

// Step 2. Create the FOR loop
/* The starting point of the loop will be (str.length - 1) which corresponds to the
   last character of the string, "o"
   As long as i is greater than or equals 0, the loop will go on
   We decrement i after each iteration */

/* Here hello's length equals 5
       For each iteration: i = str.length - 1 and newString = newString + str[i]
       First iteration:    i = 5 - 1 = 4,         newString = "" + "o" = "o"
       Second iteration:   i = 4 - 1 = 3,         newString = "o" + "l" = "ol"
       Third iteration:    i = 3 - 1 = 2,         newString = "ol" + "l" = "oll"
       Fourth iteration:   i = 2 - 1 = 1,         newString = "oll" + "e" = "olle"
       Fifth iteration:    i = 1 - 1 = 0,         newString = "olle" + "h" = "olleh"
   End of the FOR Loop*/

// Step 3. Return the reversed string

// function reverseString(str) {
//     return str.split("").reverse().join("");
// }
//
// console.log(reverseString("hello world im jj"));
