const dog = { name: 'popy', emoji: '🐶' };
console.log(Object.keys(dog));
console.log(Object.values(dog));
console.log(Object.entries(dog));

//key가 객체에 있는지 확인
console.log('name' in dog);
console.log(dog.hasOwnProperty('name'));

//오브젝트의 각각의 프로퍼티(값, 속성)는 프로퍼티 디스크립터라고하는 객체로 저장되어 있다.
const descriptors = Object.getOwnPropertyDescriptors(dog);
console.log(descriptors);

//오브젝트의 특정의 프로퍼티(값, 속성)를 가져온다
const desc = Object.getOwnPropertyDescriptor(dog, 'emoji');
console.log(desc);

//오브젝트의 특정 프로퍼티(값, 속성) 수정
Object.defineProperty(dog, 'name', {
  value: '멍멍', //프로포티 값
  writable: false, //값을 업데이트 할 수 있는지 설정
  enumerable: false, //열거 가능하게 할 것인지 설정
  configurable: false, //키를 수정할 수 있는지 설정
});
console.log(dog.name);
console.log(Object.keys(dog));

//프로퍼티를 수정하지 못하도록 수정했기 때문에 삭제 불가능
delete dog.name;
console.log(dog.name);

const student = {};

Object.defineProperties(student, {
  firstName: {
    value: '영희',
    writable: true,
    enumerable: true,
    configurable: true,
  },
  lasName: {
    value: '김',
    writable: true,
    enumerable: true,
    configurable: true,
  },
  fullName: {
    get() {
      return `${lasName} ${firstName}`;
    },
    set(name) {
      [this.lasName, this.firstName] = name.split(' ');
    },
    configurable: true,
  },
});
console.log(student);
