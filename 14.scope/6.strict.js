//엄격모드 strict mode
//리엑트와 같은 프레임워크 사용시 기본적으로 염격모드임
'use strict';
var x = 1;
//delete x; //error

function add(x) {
  var a = 2;
  //b = a + x; //error
}
add(1);

const array = [1, 2, 3];
//let, const로 선언해줘야함
//error
for (num of array) {
  console.log(num);
}
