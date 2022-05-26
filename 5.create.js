//생성자 함수
function Fruit(name, emoji) {
  this.name = name;
  this.emoji = emoji;
  this.display = function () {
    log(`${this.name} is ${this.emoji}`);
  };
}

const apple = new Fruit('apple', 'sad');
const orange = new Fruit('orange', 'happy');
console.log(apple);
console.log(orange);
