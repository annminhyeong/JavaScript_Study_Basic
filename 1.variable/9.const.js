//let : 재할당 가능
let a = 1;
a = 2;

//const : 재할당 불가능
//1. 상수
//2. 상수변수 또는 변수
const text = 'text';
// text = 'hi'; 재할당하면 안됨!

//1. 상수
const MAX_FRUITS = 5;

//2. 재할당이 불가능한 상수변수 또는 변수
const apple = { name: '사과', color: 'red' };
// apple = {} 재할당하면 안됨!
console.log(apple);

//객체나 배열의 값은 변경가능
apple.name = '오렌지';
console.log(apple);
