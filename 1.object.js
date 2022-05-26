//겍체 생성방법
//key : 문자, 숫자, 문자열, 심볼
//value : 원시값, 객체(함수)
//Object literal {key : value}
// new Object();
// Object.create();

let apple = {
  name: 'apple',
  'hello-bye': 'bye',
  0: 1,
  ['hello-welcome']: 'welcome',
};

//속성(value)에 접근하기
console.log(apple.name); //마침표 표기법 dot notation
console.log(apple['name']); //대괄호 표기법 bracket notation

//속성 추가하기
apple.emoji = 'happy';
apple['color'] = 'red';

//속성 삭제하기
delete apple.emoji;
console.log(apple.emoji);
