//함수내부에서 외부로부터 주어진 인자값을 변경하는 것은 좋지 않음
//상태변경이 필요한 경우에는, 새로운 상태를 (오브젝트, 값)으로 반환해야 한다.
function display(num) {
  num = 5; // X
  console.log(num);
}

const value = 4;
display(value);
console.log(value);

//인자 obj와 객체 ellie는 같은 주소값을 가지고 있기때문에 값을 바꾸면 같이 바뀜
function notChangeName(obj) {
  obj.name = 'not Ellie'; //외부로부터 주어진 인자(오브젝트)를 내부에서 변경 X
  console.log(obj);
}
const ellie = { name: 'Ellie' };
notChangeName(ellie);
console.log(ellie);

function ChangeName(obj) {
  obj = { ...obj, name: 'change Ellie' };
  console.log(obj);
}
ChangeName(ellie);
console.log(ellie);
