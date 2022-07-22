//Set : 중복X
const set = new Set([1, 2, 2, 3, 3, 3]);

//사이즈 확인
console.log(set.size);

//아이템이 존재하는지 확인
console.log(set.has(2));

//순회
set.forEach((item) => console.log(item));
for (const value of set.values()) {
  console.log(value);
}

//아이템 추가
set.add(4);
console.log(set);

//아이템 삭제
set.delete(4);
console.log(set);

//아이템 전부 삭제
set.clear();
console.log(set);

const obj1 = { name: '🍎', price: 5 };
const obj2 = { name: '🫐', price: 10 };
const objs = new Set([obj1, obj2]);
console.log(objs);

//Set에는 오브젝트 참조변수가 저장되어 있으므로
//obj1의 값을 변경하면 값이 바뀜
obj1.price = 0;
objs.add(obj1);
console.log(objs);

//오브젝트의 값이 같더라도 참조변수의 주소값이 다르므로 둘다 출력됨
const obj3 = { name: '🫐', price: 10 };
objs.add(obj3);
console.log(objs);

obj3.price = 3;
console.log(objs);
