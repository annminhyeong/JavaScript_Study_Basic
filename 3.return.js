//return을 명시하지 않으면 자동으로 undefined이 반환됨
function add(a, b) {
  return a + b;
}

const result = add();
// console.log(result);

//return을 함수중간에서 사용하면 함수가 종료됨
//ex) 조건이 맞지 않는 경우 함수 도입부분에서 함수를 일찍이 종료함
function print(num) {
  if (num < 0) {
    return;
  }
  console.log(num);
}
const outcome = print(1);
// console.log(outcome);
