// Q12 - PRIME NUMBER GENERATOR

// Write a program that generates a list of all prime numbers between 1 and 200.

// A prime number is a number that is ONLY divisible by 1 and itself.

// 6 -> NOT prime (2 * 3)
// 7 -> PRIME (can only be divided by 1 and 7, no other numbers)
// 12 -> NOT prime (3 * 4, 2 * 6)
// 37 -> PRIME ()

// NOTE: 1 and 2 are both prime numbers.

// EXPECTED OUTPUT: [1, 2, 3, 5, 7, 11, 13, ...]
let count = 0;
for (number = 1; number < 201; number++) {
    if (number % 2 == 0 || number % 3 == 0 || number % 5 == 0 || number % 7 == 0) {
        if (number / 2 == 1 || number / 3 == 1 || number / 5 == 1 || number / 7 == 1) {
            console.log(number);
        }
    } else {console.log(number);}
}