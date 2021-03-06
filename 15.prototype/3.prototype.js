// const dog1 = { name: 'λ­μΉ', emoji: 'πΆ' };
// const dog2 = { name: 'μ½μ½', emoji: 'π' };

//κ°μ²΄ μμ±
function Dog(name, emoji) {
  this.name = name;
  this.emoji = emoji;

  //μΈμ€ν΄μ€ ν¨μ
  this.printName = () => {
    console.log(`${this.name} ${this.emoji}`);
  };
}

//νλ‘ν νμ(static) ν¨μ λ§λ€κΈ°
Dog.prototype.printName = () => console.log(`${this.name} ${this.emoji}`);

const dog1 = new Dog('λ­μΉ', 'πΆ');
const dog2 = new Dog('μ½μ½', 'π');
console.log(dog1, dog2);
dog1.printName();
dog2.printName();

//μ€λ²λΌμ΄λ©
//μΈμ€ν΄μ€λ λ²¨(μμ)μμ λμΌν μ΄λ¦μΌλ‘ ν¨μλ₯Ό μ¬μ μνλ©΄
//νλ‘ν νμλ λ²¨(λΆλͺ¨ static)μ ν¨μμ νλ‘νΌν°λ κ°λ €μ§λ€.
dog1.printName = () => console.log('μλ');
dog1.printName();

//μ μ  λ λ²¨
Dog.hello = () => console.log('Hello!');
//dog1.hello(); //error
Dog.hello();
Dog.MAX_AGE = 20;
console.log(Dog.MAX_AGE);
