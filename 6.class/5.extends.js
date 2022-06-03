class Animal {
  constructor(color) {
    this.color = color;
  }
  eat() {
    console.log('먹다');
  }
  sleep() {
    console.log('자다');
  }
}

class Tiger extends Animal {}
class Dog extends Animal {
  constructor(color, ownerName) {
    super(color);
    this.ownerName = ownerName;
  }
  play() {
    console.log('논다');
  }

  eat() {
    super.eat();
    console.log('강아지가 먹는다');
  }
}

const tiger = new Tiger('red');
const dog = new Dog('yellow', '엘리');
// console.log(dog);
dog.eat();
