//논리연산자 (AND OR NOT)
//단축평가

const obj1 = { name: '강아지' };
const obj2 = { name: '고양이', owner: 'Ellie' };

//조건문에서 쓸때
//obj1과 obj2는 둘다 값이 있으므로 true
//obj1과 obj2 둘다 boolean타입으로 변환됨
if (obj1 || obj2) {
  console.log('둘다 true!');
}

//조건문 밖에서 쓸때
//and : 앞의 값이 true면 뒤에값 boolean타입으로 변환하지 않아도 됨
//제일 뒤에서 ture가 나온값을 저장, 아니면 바로 앞의 값을 대입함
let result = obj1 && obj2;
console.log(result);

//or 연산자는 앞에 것이 true로 판별되면 뒤에값은 true이므로
//제일 앞의 true가 나온 값을 저장
result = obj1 || obj2;
console.log(result);

//활용예
//&& 조건이 ture일때 무언가를 해야하는 경우
//|| 조건이 false일때 무언가를 해야하는 경우

function changeOwner(animal) {
  if (!animal.owner) {
    throw new Error('주인이 없음');
  }
  animal.owner = '바뀐주인';
}

function makeNewOwner(animal) {
  if (animal.owner) {
    throw new Error('이미 주인이 존재함');
  }
  animal.owner = '새로운주인';
}

//obj1의 owner가 존재하면 changeOwner 호출
obj1.owner && changeOwner(obj1);
obj2.owner && changeOwner(obj2);
console.log(obj1);
console.log(obj2);
console.log();

obj1.owner || makeNewOwner(obj1);
obj2.owner || makeNewOwner(obj2);
console.log(obj1);
console.log(obj2);

//Null 또는 undefined 체크
let item = { price: 1 };

//item이 있으면 item.price를 저장해라
const price = item && item.price;
console.log(price);

//기본값을 설정
// defualt parameter는 값이 전달하지 않거나, undefined때 만 설정됨
// ||은 falshy한 값인 경우 설정됨 0, -0, null, undefined
function print(message) {
  //message가 없다면 뒤에값 호출
  const text = message || '기본값';
  console.log(text);
}
print();
print(null);
print(0);
