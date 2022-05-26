//콜백함수
const add = (a, b) => a + b;
const multiply = (a, b) => a * b;

//전달된 action은 콜백함수이다
//전달될 당시에 함수를 바로 호출해서 호출한 값을 전달하는게 아니라
//함수를 가리키고있는 함수의 래퍼랜스(참조값)가 전달된다.
//그래서 함수는 고차함수안에서 필요한 순간에 호출이 나중에 됨
function calculator(a, b, action) {
  if (a < 0 || b < 0) {
    return;
  }
  let result = action(a, b);
  console.log(result);
  return result;
}
//add() : 함수 호출
//add : add의 함수 주소값을 가져움
calculator(-1, -2, add);
calculator(1, 2, multiply);
