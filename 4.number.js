const num1 = 123;
const num2 = new Number(123);

console.log(typeof num1);
console.log(typeof num2);

//정수에서 사용할수 있는 가장 큰 정수
console.log(Number.MAX_VALUE);
//정수에서 사용할수 있는 가장 작은 정수
console.log(Number.MIN_VALUE);
//정수에서 안전하게 사용할수 있는 가장큰 정수값
console.log(Number.MAX_SAFE_INTEGER);
//정수에서 안전하게 사용할수 있는 가장 작은 정수값
console.log(Number.MIN_SAFE_INTEGER);
//숫자가 아닌 값
console.log(Number.NaN);
//-무한인 값
console.log(Number.NEGATIVE_INFINITY);
//+무한인 값
console.log(Number.POSITIVE_INFINITY);
//숫자인지 아닌지 확인
console.log(Number.isNaN('a'));

//지수표기법 (매우 크거나 작은값을 표기할때 사용 10의 n승으로 표기)
const num3 = 102;
//지수로 표기
//e+2 : 10의 2승
console.log(num3.toExponential()); //1.02e+2

//반올림하여 문자열로 변환
const num4 = 1234.123;
console.log(num4.toFixed());

//숫자를 문자열로 변환
console.log(num4.toString());
//숫자를 나라의 맞는 문자열로 변환
console.log(num4.toLocaleString('ar-Eg'));

//원하는 자릿수까지 유효하도록 반올림
console.log(num4.toPrecision(5));
console.log(num4.toPrecision(2)); //전체자리표기가 안될때는 지수표기법

//0과 1사이에서 나타낼수 있는 가장 작은 수
console.log(Number.EPSILON);

const num5 = 0.1 + 0.2 - 0.2; //0.10000000000000003
console.log(num5);

function isEqual(original, expected) {
  return Math.abs(original - expected) < Number.EPSILON;
}

console.log(isEqual(1, 1));
console.log(isEqual(0.1, num5));
