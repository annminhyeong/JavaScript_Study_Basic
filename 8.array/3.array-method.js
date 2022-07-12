//배열의 함수들
//배열자체를 변경하는지, 새로운 배열을 반환하는지 확인
const fruits = ['🍑', '🍒', '🍏'];

//특정 오브젝트가 배열인지 아닌지 확인
console.log(Array.isArray(fruits));

//특정 아이템 위치 찾기
console.log(fruits.indexOf('🍏'));

//배열안에 특정한 아이템이 있는지 확인
console.log(fruits.includes('🍏'));

//배열자체를 변경

//추가 - 제일 뒤
//아이템을 추가하고 배열의 길이를 반환한다.
let length = fruits.push('🫐');
console.log(fruits, length);

//추가 - 제일 앞
//아이템을 추가하고 배열의 길이를 반환한다.
length = fruits.unshift('🌶️');
console.log(fruits, length);

//제거 - 제일 뒤
//아이템을 제거하고 제거한 아이템을 반환한다.
let lastItem = fruits.pop();
console.log(fruits, lastItem);

//제거 - 제일 앞
//아이템을 제거하고 제거한 아이템을 반환한다.
lastItem = fruits.shift();
console.log(fruits, lastItem);

//중간 제거
//배열형태로 반환
let deleteItem = fruits.splice(1, 1);
console.log(fruits, deleteItem);

//중간 추가
fruits.splice(1, 0, '🍓', '🥝');
console.log(fruits);

//새로운 배열을 만듦

//slice(form,to) :from부터 to까지 짜름, to는 포함안됨
let newArr = fruits.slice(0, 2);
console.log(newArr);
newArr = fruits.slice();
console.log(newArr);

//concat() : 여러개의 배열을 이어줌
const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];
const arr3 = arr1.concat(arr2);
console.log(arr3);

//reverse() : 기존의 배열을 거꾸로
const arr4 = arr3.reverse();
console.log(arr4);

console.clear();
//flat() : 중첩된 배열을 하나의 배열로 쫙 펴기
let arr = [
  [1, 2, 3],
  [4, [5, 6]],
];
console.log(arr);
console.log(arr.flat());
console.log(arr.flat(2));
arr = arr.flat(2);

//fill(채울값, from, to, ): 특정한값으로 배열 채우기 (배열자체를 바꿈)
arr.fill(0);
console.log(arr);

arr.fill('a', 1, 3);
console.log(arr);

arr.fill('a', 5);
console.log(arr);

//join('구분자') : 배열를 문자열로 합치기
let text = arr.join();
console.log(text);

text = arr.join(' ');
console.log(text);
