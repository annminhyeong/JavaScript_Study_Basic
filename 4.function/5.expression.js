//함수선언문 function name() {  }
//함수표현식 const name = function(){ }
//화살표 함수 const name = () => {  }

//sum으로 함수이름을 선언해도 함수가 만들어지고 나서 add에 할당되기 때문에 sum이라는 이름은 존재하지 않음
let add = function sum(a, b) {
  return a + b;
};
console.log(add(1, 2));

add = (a, b) => a + b;
console.log(add(1, 2));

//IIFE (Immdicately-Invoked Function Expressions)
//함수만들자마자 바로 실행
(function run() {
  console.log('running');
})();
