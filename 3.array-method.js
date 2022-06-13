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
