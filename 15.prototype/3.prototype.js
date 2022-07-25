// const dog1 = { name: '뭉치', emoji: '🐶' };
// const dog2 = { name: '코코', emoji: '🐕' };

//객체 생성
function Dog(name, emoji) {
  this.name = name;
  this.emoji = emoji;

  //인스턴스 함수
  this.printName = () => {
    console.log(`${this.name} ${this.emoji}`);
  };
}

//프로토타입(static) 함수 만들기
Dog.prototype.printName = () => console.log(`${this.name} ${this.emoji}`);

const dog1 = new Dog('뭉치', '🐶');
const dog2 = new Dog('코코', '🐕');
console.log(dog1, dog2);
dog1.printName();
dog2.printName();

//오버라이딩
//인스턴스레벨(자식)에서 동일한 이름으로 함수를 재정의하면
//프로토타입레벨(부모 static)의 함수의 프로퍼티는 가려진다.
dog1.printName = () => console.log('안녕');
dog1.printName();

//정적 레벨
Dog.hello = () => console.log('Hello!');
//dog1.hello(); //error
Dog.hello();
Dog.MAX_AGE = 20;
console.log(Dog.MAX_AGE);
