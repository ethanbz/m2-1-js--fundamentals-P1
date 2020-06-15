# Types

## Question 1: Which of the following strings are valid? Add an 'x' between the ( ) to indicate that it's valid.

1. ( ) "I am a "Horse""
2. ( ) "I 'prefer' ducks'
3. (X) 'Yes, duck is nice'
4. (X) "Ah, but I\'m vegan!"
5. ( ) 'You'll eat salad then'
6. (X) 'Yes I\'ll eat salad'
7. (X) "I'm happy to hear that!"
8. (X) "\"Happy to hear " + 'that" ' + "he says!"
9. (X) “Hello world!”

## Question 2: For the strings in Question 1 that were invalid, rewrite them to be valid:
"I am a Horse"
"I 'prefer' ducks"
"you'll eat salad then"
## Question 3: Which of the following expressions evaluate to true? Add an 'x' between the ( ) to indicate that it's true.

1. ( ) 7 == 2
2. (X) 7 == 7
3. ( ) 7 == '7'
4. (X) 7 != 0
5. (X) 7 !== '7'
6. (X) 7 != '7'
7. ( ) 7 != 7

## Question 4: Which of the following expressions are truthy?

1. (X) !0
2. ( ) !1
3. (X) -1
4. ( ) !"hello!"
5. ( ) null
6. (X) !undefined
7. (X) !NaN

## Question 5: Which of the following are valid objects?

1. ( ) {}
2. ( ) { 'hello' }
3. (X) { name: 'I am fruit' }
4. (X) {'brand-name': 'Dior' }
5. ( ) { brand-name: 'Channel' }
6. (X) { cool_name: 'bob' + ' Dylan', age: 25 }

## Question 6: For each array, specify the number of elements and the type of each element.

1. ['cat', 'dog', 'bird']

- number of elements: 3
- type of _each_ element: all string
  - 'cat':
  - 'dog':
  - 'bird':

(Use the same format for the answers to all prompts in Question 6)

2. [[], 24, 'hello', true]
4
array, number, string, boolean

3. []
0
none
4. [['romeo', 'juliet'], false]
2
array of strings, boolean

5. [{name: 'bob', age: 23}, {name: 'paul', age: 33}]
2
objects

## Question 7: What is the type and value for each of the following variables?

1. let name = 'bob';

- type: String
- value: bob

2. let age = 45;
number, 45

3. let isMarried = false;
boolean, false
4. let person = { name: name, age: age, isMarried: isMarried }
object, variables

5. let kids = [{name: 'Morty', age: 3}, {name: 'Summer', age: 7}]
array, objects

## Question 8: Use string interpolation instead of concatenation

1.

```js
const name = 'Jack';
const greeting = 'Hi';

console.log(greeting + ' ' + name + '!');
```

console.log(`${greeting} ${name}!`);

2.

```js
const person1 = { name: 'Mabel', age: 102 };
const person2 = { name: 'Doug', age: 104 };

console.log(
  person1.name +
    ' and ' +
    person2.name +
    ' are the oldest people I know. Together, they have lived for ' +
    (person1.age + person2.age) +
    ' years!'
);
```
console.log(`${person1.name} and ${person2.name} are the oldest people I know. Together, they have lived for ${person2.age + person1.age} years!`);
3.

```js
let str = 'Hi Kiddo!';
const temperature = 5;

if (temperature < 0) {
  str = str + ' ' + "It's very cold outside, you better wear a coat!";
} else {
  str = str + ' ' + "It's beautiful outside, let's go swimming!";
}
```

if (temperature < 0) {
  str = `${str} It's very cold outside, you better wear a coat!`;
} else {
  str = `${str} It's beautiful outside, let's go swimming!`;
}
