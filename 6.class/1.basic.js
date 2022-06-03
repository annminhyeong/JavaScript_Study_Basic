//객체를 손쉽게 만들수 있는 템플릿
//1. 생성자 함수 (오래된 방법)
//2. 클래스

class Fruit {
  constructor(name, taste) {
    this.name = name;
    this.taste = taste;
  }
  display = () => {
    console.log(`${this.name}의 맛은 ${this.taste}입니다.`);
  };
}
//apple은 fruit클래스의 인스턴스이다
const apple = new Fruit('apple', 'good');
//orange fruit클래스의 인스턴스이다
const orange = new Fruit('orange', 'bad');
console.log(apple);
console.log(orange);
