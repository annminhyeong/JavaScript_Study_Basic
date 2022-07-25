// 프로토타입을 베이스로한 객체지향 프로그래밍
function Animal(name, emoji) {
  this.name = name;
  this.emoji = emoji;
}
Animal.prototype.printName = function () {
  console.log(`${this.name} ${this.emoji}`);
};

function Dog(name, emoji, owner) {
  //super(name, emoji)과 비슷
  Animal.call(this, name, emoji);
  this.owner = owner;
}
//Dog의 프로토타입(자식)을 Animal프로토타입(부모)으로 변경
Dog.prototype = Object.create(Animal.prototype);
Dog.prototype.play = () => console.log('같이 놀아옹!');

function Tiger(name, emoji) {
  Animal.call(this, name, emoji);
}
//Tiger의 프로토타입(자식)을 Animal프로토타입(부모)으로 변경
Tiger.prototype = Object.create(Animal.prototype);
Tiger.prototype.hunt = () => console.log('사냥하자! .. 🐇..');

const dog1 = new Dog('멍멍', '🐶', '엘리');
dog1.printName();

const tiger1 = new Tiger('어흥', '🐯');
tiger1.printName();
tiger1.hunt();

//dog1이 Dog객체인지 확인
console.log(dog1 instanceof Dog);

//dog1이 Animal를 상속받았는지 확인
console.log(dog1 instanceof Animal);

//dog1이 tiger객체인지 확인
console.log(dog1 instanceof Tiger);
