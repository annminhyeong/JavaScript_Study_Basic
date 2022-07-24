//호이스팅
//호이스팅은 변수이름, 클래스이름은 호이스팅이 되어 최상단으로 끌어올려지지만,
//변수 선언문을 만나기 전까지는 undefined으로도 선언되지 않은 상태임

//함수의 호이스팅은 함수의 선언문 전에 호출이 가능하게 해줌
//함수의 선언문은 선언이전에도 호출 가능함
print();
function print() {
  console.log('Hello World');
}

//변수(let, const), 클래스는 선언만 호이스팅(변수이름이 있다는 사실만)됨
//초기화는 안됨
//초기화 전 변수에 접근하면 컴파일(빌드)에러가 발생함
console.log(hi); //error
let hi = 'hi';

func1(); //error
//변수이름(func1)만 호이스팅
let func1 = function () {};

const cat = new Cat(); //error
//클래스이름(Cat)만 호이스팅됨
class Cat {}

//
let x = 1;
{
  //이런식으로 맨 위에 호이스팅돼서 초기화가 안되어 있으므로 에러발생
  //let x;
  console.log(x); //error
  //변수이름(x)가 호이스팅 되면서 에러가 발생함
  let x = 2;
}
