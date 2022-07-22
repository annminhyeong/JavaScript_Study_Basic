//?. : 옵셔널 체이닝 연산자 Optional Chaining Operator
//ES11

//item이 있으면 item.price를 저장해라
let item = { price: 1 };
const price = item?.price;
console.log(price);

let obj = { name: 'dog', owner: { name: '엘리' } };
function printName(obj) {
  //const ownerName = obj && obj.owner && obj.owner.name;
  const ownerName = obj?.owner?.name;
  console.log(ownerName);
}
printName(obj);
