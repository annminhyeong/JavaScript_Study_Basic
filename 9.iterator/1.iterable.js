//iterable 하다는 것은 순회가 가능하는 뜻
//[Symbol.iterator]() : iterator;
//심볼정의를 가진 객체나 특정한 함수가 iterator 리턴한다는 것은
//순회가능한 객체이다라는 것을 알 수 있다.
//순회가 가능하면 for ..of, spread 등등 사용가능
const array = [1, 2, 3];
for (const item of array.entries()) {
  console.log(item);
}

const obj = { 0: 1, 1: 2 };
for (const item in obj) {
  console.log(item);
}

const iterator = array.values();
while (true) {
  const item = iterator.next();
  if (item.done === true) break;
  console.log(item.value);
}
