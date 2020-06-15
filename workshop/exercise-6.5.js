// Q6.5
// Write a loop that will iterate from 0 to 15.
// For each iteration, it should check whether a number is even or odd
// and display that state along with the number.
// e.g.
// 0 is even
// 1 is odd
// 2 is even
// ...

// many other possibilities here.
for (let number = 0; number < 16; number++) {
    if (number % 2 === 1) {
        console.log(`${number} is odd`);
        continue;
    }
    console.log(`${number} is even`);
}