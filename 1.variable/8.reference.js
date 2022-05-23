//원시타입은 값이 복사되어 저장됨
let a = 1;
let b = a; //1
b = 2;
console.log(a);
console.log(b);

//겍체타입 참조값은(메모리주소, 레퍼런스)가 복사 되어 저장됨
let apple = { name: '사과' }; // 0x1234
let orange = apple; //0x1234
orange.name = '오렌지';
console.log(apple);
console.log(orange);
