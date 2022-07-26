//자바 정적 바인딩 방법
function Cat(name) {
  this.name = name;
  //2. 화살표 함수 사용 : 화살표함수는 렉시컬 환경에서의 this를 기억함
  //화살표 함수에서 제일 가까운 스코프의 this를 가리킴
  this.printName = () => {
    console.log(`고양이 이름을 출력 ${this.name}`);
  };
  //1. bind 함수를 이용해서 수동적으로 바인딩하기
  //지금의 printName에 앞으로 만들어질 인스턴스 this를 결합
  //this.printName = this.printName.bind(this);
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
cat.printName();

//dog.printName()을 호출할지 cat.printName()을 호출할지 알 수 없으므로 undefined가 출력됨
function printOnMoniter(printName) {
  console.log('모니터를 준비하고 전달된 콜백 실행!');
  printName();
}
printOnMoniter(cat.printName);
