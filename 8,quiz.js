//퀴즈!
//1. 문자열의 모든캐릭터를 하나씩 출력
// const text = 'Hello World!';
// for (let i = 0; i < text.length; i++) {
//   console.log(text.charAt(i));
// }

//2. 사용자들의 id를 잘라내어 각각의 id 배열로 저장
const ids = 'user1, user2, user3, user4';
const idArr = ids.split(', ');
console.log(idArr);

//3. 1초에 한번씩 시계를 (날짜포함) 출력하기
setInterval(() => {
  console.log(new Date().toString());
}, 1000);
