// 퀴즈1: 주어진 배열 안의 딸기 아이템을 키위로 교체하는 함수를 만들기
// 단, 주어진 배열을 수정하지 않도록!
// input: ['🍌', '🍓', '🍇', '🍓']
// output: [ '🍌', '🥝', '🍇', '🥝' ]
const input1 = ['🍌', '🍓', '🍇', '🍓'];
function fruitChange(array, from, to) {
  return array.map((item) => (item === from ? to : item));
}

// 퀴즈2:
// 배열과 특정한 요소를 전달받아,
// 배열안에 그 요소가 몇개나 있는지 카운트 하는 함수 만들기
// input: [ '🍌', '🥝', '🍇', '🥝' ], '🥝'
// output: 2
const input2 = ['🍌', '🥝', '🍇', '🥝'];
function fruitCount(array, findItem) {
  return array.filter((value) => value === findItem).length;
}
console.log(fruitCount(input2, '🥝'));

// 퀴즈3: 배열1, 배열2 두개의 배열을 전달받아,
// 배열1 아이템중 배열2에 존재하는 아이템만 담고 있는 배열 반환
// input: ['🍌', '🥝', '🍇'],  ['🍌', '🍓', '🍇', '🍓']
// output: [ '🍌', '🍇' ]
const arr1 = ['🍌', '🥝', '🍇'];
const arr2 = ['🍌', '🍓', '🍇', '🍓'];
function fruitCompare(input, search) {
  return input.filter((item) => search.includes(item));
}
console.log(fruitCompare(arr1, arr2));

// 퀴즈 4
// 5이상(보다 큰)의 숫자들의 평균

const nums = [3, 16, 5, 25, 4, 34, 21];

//사용하지 않는 매개변수는 _로 표시가능
const result = nums
  .filter((item) => item > 5)
  .reduce((avg, num, _, array) => (avg += num / array.length), 0);
console.log(result);
