//?? Nullish 연산자 : null과 undefined일때만 체크
let num = 0;

//0이면 false로 취급하기때문에 -1 출력
console.log(num || '-1');

//0을 true로 간주하므로 0 출력
console.log(num ?? '-1');
