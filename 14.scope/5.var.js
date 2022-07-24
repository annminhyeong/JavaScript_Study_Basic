//var의 특징
//일반코딩방식과 어긋나서 개발하면서도 맨붕이 옴
//코드의 가독성과 유지보수에 좋지 않음

//1. 변수를 선언하는 키워드 없이 선언, 할당이 가능함
//선언인지 재할당인지 구분이 어려움
something = '😊';
console.log(something);

//2. 중복선언이 가능하다
var poo = 1;
var poo = 2;
console.log(poo);

//3. 블록레벨 변수 안됨
var apple = '사과';
{
  var apple = '🍎';
  {
    var apple = '🍏';
  }
}
console.log(apple);

//4. 함수레벨 변수는 가능
var dog = 'dog';
function func() {
  var dog = '🐶';
}
console.log(dog);
