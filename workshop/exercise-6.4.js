// Q6.4
// Write a loop that will print to the console all of the EVEN integers from 100 to 0.
for (let number = 100; number >= 0; number--) {
    if (number % 2 === 1) {
        continue;
    }
    console.log(number);
}