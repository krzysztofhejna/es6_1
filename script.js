// 1

const x = 'Hello';
const y = 'World';

console.log(`${x} ${y}`)

//2

const multiply = (x, y='1') => x * y;

console.log(multiply(5))

//3

const average = (...numbers) => {
  let sum = numbers.reduce(function(a, b) {
    return a + b;
  });
  return sum / numbers.length;
};

console.log(average (2, 3, 4));


//4

const grades = [1, 5, 5, 5, 4, 3, 3, 2, 1];

console.log(average(...grades));


//5

const weirdArray = [1, 4, 'Iwona', false, 'Nowak'];
const [, , firstName, , lastName] = weirdArray;

console.log(firstName, lastName);
