//자바스크립트에서 함수는 함수, 생성자 함수(클래스)로 사용가능
//하지만 이것을 위해서 불필요한 무거운 프로토타입객체(많은 데이털를 담고 있는)가 생성됨
const dog = {
  name: 'dog',
  play: function () {
    console.log('멍멍');
  },
};
dog.play();

const obj1 = new dog.play(); //X
console.log(obj1);

//ES6
const cat = {
  name: 'cat',
  play() {
    //객체의 메서드(오브젝트에 속한 함수)
    console.log('냐옹');
  },
};
cat.play();
//const obj2 = new cat.play(); //생성자 함수로 사용 X

/**
 * 화살표함수의 특징
 * 1. 문법이 깔끔함
 * 2. 생성자 함수로 사용이 불가능함 (무거운 프로토타입을 만들지 않음)
 * 3. 함수 자체 arguments를  가지고 있지 않음
 * 4. this에 대한 바인딩이 정적으로 결정됨
 *    -함수에서 제일 근접한 상위 스코프의 this에 정적으로 바인딩됨
 */

const add = (a, b) => {
  console.log(arguments); //화살표 함수 외부의 arguments를 참조만 함
};
add(1, 2);

const printArrow = () => console.log(this);
printArrow(); //node에서 전역 this(모듈)를 가리킴

cat.printArrow = printArrow;
cat.printArrow(); //화살표함수의 전역 this(모듈)를 가리킴
