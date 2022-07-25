//동결! Object.freeze : 추가 X, 삭제 X, 쓰기 X, 속성 재정의 X
//단, 앝은 꽁꽁 얼림!(얼린 객체 안의 또다른 객체는 수정가능)
const ellie = { name: '엘리' };
const dog = { name: '와우', emoji: '🐶', owner: ellie };
Object.freeze(dog);
dog.name = '멍멍';
console.log(dog);

dog.age = 4;
console.log(dog);

delete dog.name;
console.log(dog);

ellie.name = '엘리얌';
console.log(dog);
console.clear();

const cat = {};
//cat 프로퍼티에 dog에 있는 모든 프로퍼티를 복사
Object.assign(cat, dog);

//밀봉! Object.seal : 값의 수정 O, 추가 X, 삭제 X, 속성 재정의 X
Object.seal(cat);
console.log(cat);

cat.name = '냐옹';
console.log(cat);

delete cat.name;
console.log(cat);

//동결되었는지 확인
console.log(Object.isFrozen(dog));

//밀봉되었는지 확인
console.log(Object.isSealed(cat));

//확장금지 preventExtensions : 추가 X
const tiger = { name: '어흥' };
Object.preventExtensions(tiger);

//확장이 가능한지 확인
console.log(Object.isExtensible(tiger));

tiger.name = '어흐흥';
console.log(tiger);

delete tiger.name;
console.log(tiger);
