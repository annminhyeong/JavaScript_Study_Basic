//구조 분해 할당
//데이터 뭉치 (그룹화)를 쉽게 만들 수 있음

const fruit = ['🍓', '🌶️', '🫐', '🥝'];
const [first, second, ...others] = fruit;
console.log(first);
console.log(second);
console.log(others);

const point = [1, 2];
const [y, x, z = 0] = point;
console.log(x);
console.log(y);
console.log(z);

function createEmoji() {
  return ['apple', '🍎'];
}

const [title, emoji] = createEmoji();
console.log(title);
console.log(emoji);

const ellie = { name: 'Ellie', age: 20, job: 's/w Engineer' };
function display({ name, age, job }) {
  console.log('이름:' + name);
  console.log('나이:' + age);
  console.log('직업:' + job);
}
display(ellie);

console.log();
const { name: 이름, age, job, pet = 'cat' } = ellie;
console.log(이름);
console.log(age);
console.log(job);
console.log(pet);
