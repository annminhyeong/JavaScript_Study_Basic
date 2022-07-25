//1. var 특징
for (var i = 0; i < 5; i++) {
  console.log('i=', i); // 0, 1, 2, 3, 4
}
//var는 함수 스코프이다. for문을 돌고나서 i는 전역변수가 된다.
//var i = 5 이런식으로
console.log('for문이 끝나고 나서 i는 전역변수가 됨', i); // 5
console.log();

//2. for 문 안에서 함수를 사용할 때
function loop() {
  const array = [];
  for (var j = 0; j < 5; j++) {
    //1. 반복문에서 에서 함수를 만남
    //2. var의 함수 스코프의 특징으로 인해 함수 내부에서는 외부에 있는 i를 참조하지 못한다.
    //3. for문이 모두 돌고 전역변수가 된 i(i=5)를 참조햐여 익명함수에 i를 넣는다.
    array.push(function () {
      console.log('j=', j);
    });
  }
  return array;
}
const array = loop();
array.forEach((func) => func());
console.log();

//3. for 문 안에서 setTimeout() 함수를 사용할 때
for (var k = 0; k < 5; k++) {
  //1. setTimeout함수를 만남
  //2. 첫번째 인자는 함수이므로 var의 함수스코프 특징으로 인해 함수 내부에서는 외부에 있는 k를 참조하지 못한다.
  //3. 두번째 인자는 함수가 아니므로 바로 k를 참조해서 넣는다. (1초도 안되서 끝남)
  //4. for문이 모두 돌고 전역변수가 된 k(k=5)를 참조햐여 화살표 함수에 i를 넣는다.

  setTimeout(() => {
    console.log('k=', k);
  }, 1000 * (k + 1));
}
