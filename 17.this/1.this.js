/**
 * 글로벌 컨텍스트의 this
 * 브라우저의 this : window 객체
 * 노드의 globalThis : window 객체
 * 노드의 this : 모듈
 */
const x = 0;
module.exports.x = x;
console.log(this);
console.log(globalThis);

console.clear();

/**
 * 함수 내부에서의 this : globalThis
 * 엄격모드에서는 undefined
 */
function func() {
  console.log(this);
}
func();

/**
 * 생성자 함수, 클래스에서의 this : 앞으로 생성될 인스턴스(클래스)를 가리킴
 */
function Cat(name) {
  this.name = name;
  this.printName = function () {
    console.log(this.name);
  };
}
const cat1 = new Cat('냐옹');
const cat2 = new Cat('미냐옹');

cat1.printName();
cat2.printName();
