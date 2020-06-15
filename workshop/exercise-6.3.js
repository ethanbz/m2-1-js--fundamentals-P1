// Q6.3
// Write a loop that will print to the console all of the EVEN integers from 1 to 100.
for (let number = 1; number < 101; number++) {
    if (number % 2 === 1) {
        continue;
    }
    console.log(number);
}