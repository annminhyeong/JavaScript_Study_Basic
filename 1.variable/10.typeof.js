//typeof : 데이터 타입 확인 가능
// 특정한 데이터의 값을 문자열로 변환
//할당된 값에 따라 타입이 결정됨
let variable;
console.log(typeof variable);

variable = '';
console.log(typeof variable);

variable = 123;
console.log(typeof variable);

variable = {};
console.log(typeof variable);

variable = function () {};
console.log(typeof variable);

variable = Symbol();
console.log(typeof variable);
