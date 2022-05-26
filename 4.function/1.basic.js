//사용예제1
function sum(a, b) {
  console.log('is function');
  return a + b;
}
const result = sum(1, 2);
console.log(result);

//사용예제2
let lastName = '김';
let firstName = '지수';

function fullName(firstName, lastName) {
  return firstName + lastName;
}
console.log(fullName(firstName, lastName));
