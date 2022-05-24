//논리연산자 Logical operator
// && : and (전부 true)
// || : or (하나이상 ture)
// ! : not (boolean을 반대로 바꿈)

let num = 21;
if (num >= 0 && num < 9) {
  console.log('and');
}

if (num >= 0 || num < 9) {
  console.log('or');
}

if (num != 9) {
  console.log('not');
}
