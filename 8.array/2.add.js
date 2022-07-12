const fruits = ['🍋', '🍎', '🍓', '🍒'];

//배열 아이템 참조하는 방법
console.log(fruits[0]);
console.log(fruits.length);

// fruits.forEach((item) => {
//   console.log(item);
// });

//추가, 삭제 좋지않은 방식
fruits[4] = '🍑';
console.log(fruits);

delete fruits[1];
console.log(fruits);
