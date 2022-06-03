//접근제어자 - 캡슐화
//private(#), public, protected
class Fruit {
  type = '과일';
  #color = 'red'; //#을 붙인 필드는 외부에서 접근이 불가능함
  constructor(name, emoji) {
    this.name = name;
    this.emoji = emoji;
  }
  #display = () => {
    console.log(`${this.name} : ${this.emoji}`);
  };
}

const apple = new Fruit('apple', 'happy');
console.log(apple);
