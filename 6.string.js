const textObj = new String('Hello World');
const text = 'Hello World';

console.log(textObj);
console.log(text);

//문자열에서 문자추출
console.log(text[0]);
console.log(text.charAt(0));

//문자열 길이
console.log(text.length);

//특정문자를 앞에서 부터 index 확인
console.log(text.indexOf('l'));
//특정문자를 뒤에서 부터 index 확인
console.log(text.lastIndexOf('l'));

//문자열이 있는지 확인
console.log(text.includes('y'));

//문자열 시작문자 확인
console.log(text.startsWith('H'));
//문자열 마지막문자 확인
console.log(text.endsWith('d'));

//문자열을 대문자로 변환
console.log(text.toUpperCase());
//문자열을 소문자 변환
console.log(text.toLowerCase());

//특정문자열 추출
//substring(from, to) :to는 포함 안함
console.log(text.substring(0, 2));
//특정문자열 삭제
console.log(text.slice(2));

//공백제거
const space = '           space         ';
console.log(space.trim());

//특정기준으로 문자열 자르기
//첫번째인자: 특정기준, 두번째인자: 개수
const longText = 'hi my name is lisa';
console.log(longText.split(' '));
console.log(longText.split(' ', 2));
