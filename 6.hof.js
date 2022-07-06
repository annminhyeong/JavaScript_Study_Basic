const fruits = ['🍌', '🍓', '🍇', '🍓'];

// for (let i = 0; i < fruit.length; i++) {
//   console.log(fruit[i]);
// }

//배열을 빙글빙글 돌면서 원하는것(콜백함수)를 출력
fruits.forEach((value, index, array) => {
  console.log(value);
  console.log(index);
  console.log(array);
});

//조건에 맞는(콜백함수) 아이템을 찾을때
//find는 제일먼저 조건에 맞는 item을 반환
const item1 = { name: '🥛', price: 2 };
const item2 = { name: '🍪', price: 3 };
const item3 = { name: '🍙', price: 1 };
const products = [item1, item2, item3, item2];
let result = products.find((value) => value.name === '🍪');
console.log(result);

//findIndex는 제일먼저 조건에 맞는 배열의 index반환
result = products.findIndex((value) => value.name === '🍪');
console.log(result);

//배열의 아이템이 하나이상(OR) 조건(콜백함수)에 맞는지 확인
result = products.some((item) => item.name === '🍪');
console.log(result);

//배열의 아이템이 전부(AND) 조건(콜백함수)에 맞는지 확인
result = products.every((item) => item.name === '🍪');
console.log(result);

//조건에 맞는 모든(AND) 아이템을 새로운배열로 만들기
result = products.filter((item) => item.name === '🍪');
console.log(result);
console.clear();

//Map 배열의 아이템을 각각의 아이템으로 매핑할수 있는, 변환해서 새로운배열 생성
const nums = [1, 2, 3, 4, 5];
result = nums.map((item) => {
  if (item % 2 === 0) {
    return item * 2;
  }
  return item;
});
console.log(result);

result = nums.map((item) => [1, 2]);
console.log(result);

//FlatMap: 중첩된 배열을 풀어서 새로운 배열로 만들어줌
result = nums.flatMap((item) => [1, 2]);
console.log(result);

//sort 배열의 아이템을 정렬
//기본값 : 문자열 형태의 오름차순으로 정렬, 기존의 배열을 변경
const texts = ['hi', 'abc'];
texts.sort();
console.log(texts);

const numbers = [0, 5, 4, 2, 1, 10];
numbers.sort();
console.log(numbers);

// <0 a가 앞으로 정렬됨, 오름차순
// >0 a가 뒤로 정렬됨, 내림차순
numbers.sort((a, b) => a - b);
console.log(numbers);

//reduce : 배열의 요소를 접어서 접어서 하나로!!
// 첫번째인자: 콜백함수
// 두번째인자: 콜백함수의 첫번째값의 초기값
result = [1, 2, 3, 4, 5].reduce((sum, value) => {
  sum += value;
  return sum;
}, 0);
console.log(result);
