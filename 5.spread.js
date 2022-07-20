//Spread 연산자
//모든 이터러블은 Spread 될 수 있다.

function add(a, b, c) {
  return a + b + c;
}

const nums = [1, 2, 3];
console.log(add(...nums));

function sum(first, second, ...nums) {
  console.log(nums);
}
sum(1, 2, 3, 4, 5, 6, 7);

const fruit1 = ['🍏', '🥝'];
const fruit2 = ['🍙', '🥛'];

let arr = fruit1.concat(fruit2);
console.log(arr);
arr = [...fruit1, ...fruit2];
console.log(arr);

//object
const ellie = { name: 'Eille', age: 20, home: { address: 'home' } };
const updated = {
  ...ellie,
  job: 's/w engineer',
};
console.log(updated);
