//단항연산자 (unary operators)
// + (양)
// - (음)
// ! (부정)

let a = 5;
a = -5; // -1 * 5
console.log(a);
console.log(-a); //-1 * -5;

a = +a; // +1 * -5
a = -a; // +1 * -5
a = +a; // +1 * -5
console.log(a);

let boolean = true;
console.log(!boolean); //ture의 부정: false
console.log(!!boolean); //ture의 부정의 부정: true

// + 연산자를 쓰면 숫자가 아닌 타입을 숫자로 변환하면 어떤값이 나오는지 확인 가능
console.clear();
console.log(+false); //0
console.log(+null); //0
console.log(+''); //0
console.log(+true); //1
console.log(+'text'); //NaN
console.log(+undefined); //NaN

// 한번 부정하면 1이가지고 있는 boolean의 반대값 가짐 한번더 부정하면 1의 원래값을 얻을 수 있음
console.log(!!1); // ! : 부정연산자 , !! : boolean 타입으로 변환함
