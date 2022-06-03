//static 정적 프로퍼티, 메서드
class Fruit {
  static MAX_FRUITS = 10;
  constructor(name, taste) {
    this.name = name;
    this.taste = taste;
  }
  //인스턴스 레벨의 메서드
  display = () => {
    console.log(`${this.name}의 맛은 ${this.taste}입니다.`);
  };
  //클래스 레벨의 메서드
  static makeRandomFruit() {
    //클래스 레벨의 메서드에서는 this를 참조할 수 없음
    return new Fruit('banana', 'salt');
  }
}
const banana = Fruit.makeRandomFruit();
const maxFruit = Fruit.MAX_FRUITS;
console.log(banana);
console.log(maxFruit);
