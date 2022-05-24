//퀴즈!
let num = 2;

//문제1 : num이 짝수면 good, 홀수면 not good 출력하기
//if
if (num % 2 === 0) {
  console.log('good');
} else {
  console.log('not good');
}
// ternary
let emotion = num % 2 === 0 ? 'good' : 'not good';
console.log(emotion);
