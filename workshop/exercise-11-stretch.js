// Q11
// Write a program that creates a string that represents an 8×8 grid,
// using newline characters to separate lines. At each position of the grid
// there is either an "_" or a "#" character. The characters should form a chessboard.

// #_#_#_#_
// _#_#_#_#
// #_#_#_#_
// _#_#_#_#
// #_#_#_#_
// _#_#_#_#
// #_#_#_#_
// _#_#_#_#
let str = "";
for (number = 1; number < 73; number++) {
    if (number%9===0) {
        str += '\n';
        continue;
    }
    if (number % 2 === 1) {
        str += '#';
    } else {
        str += "_";
    }
}
console.log(str);