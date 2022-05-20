//문자열타입
let string = '안녕하세요';
string = `안녕하세요`;

//특수문자 출력하는법
string = "'안녕하세요'";
string = '"안녕하세요"';
string = '안녕\n하세요\t\t코딩\\ \u091c';
console.log(string);

//템플릿 리터널
let id = '엘리';
let greetings = '안녕!,' + id + '\n반가워!';
greetings = `안녕!, ${id}
반가워!`;
console.log(greetings);
