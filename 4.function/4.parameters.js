//매개변수의 기본값은 무조건 undefined이다
//메개변수의 정보는 함수내부에서 접근가능한 ararguments에 저장됨
//매개변수의 기본값 default parameters a = 1, b = 2
function add(a = 1, b = 2) {
  // console.log(a);
  // console.log(b);
  // console.log(arguments);
  // console.log(arguments[0]);
  return a + b;
}
add(1, 2);

//rest 매개변수 rest parameters
function sum(a, b, ...numbers) {
  console.log(a, b, ...numbers);
  return numbers;
}

sum(1, 2, 3);
