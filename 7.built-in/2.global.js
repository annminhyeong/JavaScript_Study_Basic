console.log(globalThis);
console.log(this);
console.log(Infinity);
console.log(NaN);
console.log(undefined);

//자바스크립트 코드 평가
eval('const num = 2; console.log(num);');

//유한한지 아닌지 체크
console.log(isFinite(1));

//실수로 변환
console.log(parseFloat('12.23'));

//정수로 변환
console.log(parseInt('12.23'));

//URL (URI의 하위 개념)
//아스키 문자로만 구성되어야 함
//한글이나 특수문자는 이스케이프 처리해야함
const URL = 'https://드림코딩.com';

//인코딩
const encoded = encodeURI(URL);
console.log(encoded);

//디코딩
const decoded = decodeURI(encoded);
console.log(decoded);

//전체 URI가 아니라 부분적인 것을 Component로 이용
const part = '드림코딩.com';
console.log(encodeURIComponent(part));
