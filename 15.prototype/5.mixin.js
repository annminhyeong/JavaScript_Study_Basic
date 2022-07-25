//오브젝트는 단 하나의  프로토타입을 가리킬 수 있다. (부모는 단 하나)
//Mixin : 여러개의 함수를 상속할때 쓰임 (다중상속)

const play = {
  play: function () {
    console.log(`${this.name} 놀아요!`);
  },
};

const sleep = {
  sleep: function () {
    console.log(`${this.name} 자요!`);
  },
};

function Dog(name) {
  this.name = name;
}
//Dog프로토타입에 play 객체와 sleep 객체를 할당한다
Object.assign(Dog.prototype, play, sleep);

const dog1 = new Dog('멍멍');
console.log(dog1);
dog1.play();
dog1.sleep();

class Animal {}
class Tiger extends Animal {
  constructor(name) {
    super();
    this.name = name;
  }
}
//tiger클래스에 play 객체와 sleep 객체를 할당한다
Object.assign(Tiger.prototype, play, sleep);
const tiger = new Tiger('어흥');
tiger.play();
tiger.sleep();
