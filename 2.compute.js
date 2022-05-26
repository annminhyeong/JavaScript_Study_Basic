const obj = {
  name: '엘리',
  age: 20,
};
//코딩하는 시점에 정적으로 접근이 확정됨
obj.name;
obj.age;

//동적으로 속성에 접근하고 싶을때 대괄화 표기법
function getValue(obj, key) {
  return obj[key];
}
console.log(getValue(obj, 'age'));

function addKeys(obj, key, value) {
  obj[key] = value;
}
addKeys(obj, 'objAdd', 1234);
console.log(obj);

function deleteKeys(obj, key) {
  delete obj[key];
}
addKeys(obj, 'objAdd');
console.log(obj);
