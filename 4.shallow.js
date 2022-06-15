//shallow copy : 객체의 메모리 주소를 전달
//자바스크립트에서 복사할때는 항상 앝은 복사가 이루어진다.
//Array.from , concat, slice, spread, Object.assign
const pizza = { name: '🍕', price: 2 };
const ramen = { name: '🍜', price: 3 };
const sushi = { name: '🍱', price: 1 };

const store1 = [pizza, ramen];
const store2 = Array.from(store1);

console.log(store1);
console.log(store2);

store2.push(sushi);
console.log(store1);
console.log(store2);

console.clear();
pizza.price = 4;
console.log(store1);
console.log(store2);
