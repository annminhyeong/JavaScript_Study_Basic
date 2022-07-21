//0부터 10이하까지 숫자를 2배를 순회하는 이터레이터(반복자) 만들기
function makeIterable(intialValue, maxValue, callback) {
  return {
    [Symbol.iterator]: () => {
      return {
        next() {
          return {
            value: callback(intialValue++),
            done: intialValue > maxValue,
          };
        },
      };
    },
  };
}

const multiple = makeIterable(0, 20, (n) => n * 2);
for (const num of multiple) {
  console.log(num);
}
