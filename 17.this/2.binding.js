//this 바인딩
//자바, C#, C++ 대부분의 객체지향 프로그래밍 언어에서는
//this는 항상 자신의 인스턴스 자체를 가리킴
//정적으로 인스턴스가 만들어지는 시점에 this가 결정됨

//하지만 자바스크립트에서는 누가 호출하느냐에 따라서 this가 달라질 수 있음
//즉, this는 호출하는 사람에 의해서 동적으로 결정됨
function Cat(name) {
  this.name = name;
  this.printName = function () {
    console.log(`고양이 이름을 출력 ${this.name}`);
  };
}

function Dog(name) {
  this.name = name;
  this.printName = function () {
    console.log(`강아지 이름을 출력 ${this.name}`);
  };
}

const cat = new Cat('냐옹');
const dog = new Dog('멍멍');

cat.printName();
dog.printName();

//cat의 printName()을 할당했기때문에 this는 Cat을 가리킴
dog.printName = cat.printName;
dog.printName();

//dog.printName()을 호출할지 cat.printName()을 호출할지 알 수 없으므로 undefined가 출력됨
function printOnMoniter(printName) {
  console.log('모니터를 준비하고 전달된 콜백 실행!');
  printName();
}

printOnMoniter(dog.printName);
