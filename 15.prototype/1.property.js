const dog = { name: 'popy', emoji: 'πΆ' };
console.log(Object.keys(dog));
console.log(Object.values(dog));
console.log(Object.entries(dog));

//keyκ° κ°μ²΄μ μλμ§ νμΈ
console.log('name' in dog);
console.log(dog.hasOwnProperty('name'));

//μ€λΈμ νΈμ κ°κ°μ νλ‘νΌν°(κ°, μμ±)λ νλ‘νΌν° λμ€ν¬λ¦½ν°λΌκ³ νλ κ°μ²΄λ‘ μ μ₯λμ΄ μλ€.
const descriptors = Object.getOwnPropertyDescriptors(dog);
console.log(descriptors);

//μ€λΈμ νΈμ νΉμ μ νλ‘νΌν°(κ°, μμ±)λ₯Ό κ°μ Έμ¨λ€
const desc = Object.getOwnPropertyDescriptor(dog, 'emoji');
console.log(desc);

//μ€λΈμ νΈμ νΉμ  νλ‘νΌν°(κ°, μμ±) μμ 
Object.defineProperty(dog, 'name', {
  value: 'λ©λ©', //νλ‘ν¬ν° κ°
  writable: false, //κ°μ μλ°μ΄νΈ ν  μ μλμ§ μ€μ 
  enumerable: false, //μ΄κ±° κ°λ₯νκ² ν  κ²μΈμ§ μ€μ 
  configurable: false, //ν€λ₯Ό μμ ν  μ μλμ§ μ€μ 
});
console.log(dog.name);
console.log(Object.keys(dog));

//νλ‘νΌν°λ₯Ό μμ νμ§ λͺ»νλλ‘ μμ νκΈ° λλ¬Έμ μ­μ  λΆκ°λ₯
delete dog.name;
console.log(dog.name);

const student = {};

Object.defineProperties(student, {
  firstName: {
    value: 'μν¬',
    writable: true,
    enumerable: true,
    configurable: true,
  },
  lasName: {
    value: 'κΉ',
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
