//0부터 10이하까지 숫자를 2배를 순회하는 이터레이터(반복자) 만들기
// function makeIterable(intialValue, maxValue, callback) {
//   return {
//     [Symbol.iterator]: () => {
//       return {
//         next() {
//           return {
//             value: callback(intialValue++),
//             done: intialValue > maxValue,
//           };
//         },
//       };
//     },
//   };
// }

function* multipleGenerator() {
  try {
    for (let i = 0; i < 10; i++) {
      console.log(i);
      //yield : next() 호출할때까지 기다렸다가 next()가 호출되면 그 다음 코드 실행
      yield i ** 2;
    }
  } catch (error) {
    console.log(error);
  }
}

const multiple = multipleGenerator();

let next = multiple.next();
console.log(next.value, next.done);

//제너레이터가 끝남
// multiple.return();

//에러를 발생시킴
multiple.throw('Error!');

next = multiple.next();
console.log(next.value, next.done);
