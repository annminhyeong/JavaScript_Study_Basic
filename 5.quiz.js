// 퀴즈1: 주어진 배열 안의 딸기 아이템을 키위로 교체하는 함수를 만들기
// 단, 주어진 배열을 수정하지 않도록!
// input: ['🍌', '🍓', '🍇', '🍓']
// output: [ '🍌', '🥝', '🍇', '🥝' ]
const input1 = ['🍌', '🍓', '🍇', '🍓'];
function fruitChange(array, from, to) {
  changeArr = Array.from(array);
  changeArr.forEach((item, i) => {
    if (item === from) changeArr[i] = to;
  });
  console.log(input1);
  console.log(changeArr);
  return changeArr;
}

// 퀴즈2:
// 배열과 특정한 요소를 전달받아,
// 배열안에 그 요소가 몇개나 있는지 카운트 하는 함수 만들기
// input: [ '🍌', '🥝', '🍇', '🥝' ], '🥝'
// output: 2
function fruitCount(findItem) {
  const input2 = ['🍌', '🥝', '🍇', '🥝'];
  let count = 0;
  input2.forEach((item) => {
    if (item === findItem) count++;
  });
  console.log(count);
}

// 퀴즈3: 배열1, 배열2 두개의 배열을 전달받아,
// 배열1 아이템중 배열2에 존재하는 아이템만 담고 있는 배열 반환
// input: ['🍌', '🥝', '🍇'],  ['🍌', '🍓', '🍇', '🍓']
// output: [ '🍌', '🍇' ]
const arr1 = ['🍌', '🥝', '🍇'];
const arr2 = ['🍌', '🍓', '🍇', '🍓'];
function fruitCompare(input, search) {
  const sumArr = [];
  input.forEach((item) => {
    if (search.includes(item)) sumArr.push(item);
  });
  console.log(sumArr);
  return sumArr;
}
fruitCompare(arr1, arr2);
