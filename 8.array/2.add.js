const fruits = ['π', 'π', 'π', 'π'];

//λ°°μ΄ μμ΄ν μ°Έμ‘°νλ λ°©λ²
console.log(fruits[0]);
console.log(fruits.length);

// fruits.forEach((item) => {
//   console.log(item);
// });

//μΆκ°, μ­μ  μ’μ§μμ λ°©μ
fruits[4] = 'π';
console.log(fruits);

delete fruits[1];
console.log(fruits);
