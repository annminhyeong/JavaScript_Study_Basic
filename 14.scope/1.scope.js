//scope : 식별자가 유효한 범위(코드블록)
//코드블럭 : {}, if(){}, for(){}, function(){}

//블럭 외부에서는 블럭내부의 변수를 참조 할 수 없다.
{
  const a = 'a';
}
const b = 'b';
console.log(a); //error

//함수 외부에서는 함수내부의 변수를 참조 X
function print() {
  const message = 'Hello world';
  console.log(message);
}
console.log(message); //error
