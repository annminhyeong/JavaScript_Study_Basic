//UTC기준 (협정 세계시, 1970년 1월 1일 UTC 자정과의 시간차이를 밀리초단위로 표기)
console.log(new Date()); //현재시간 출력
console.log(new Date('july 5, 2022')); //날짜 포멧설정
console.log(new Date('2022-01-04T15:24:00')); //날짜 포멧설정

console.log(Date.now());
console.log(Date.parse('2022-01-04T15:24:00'));

const now = new Date();
now.setFullYear(2023); //년 설정
now.setMonth(0); //월 설정 0 : 1

console.log(now.getFullYear()); //년 가져오기
console.log(now.getMonth()); //월 가져오기 0 : 1
console.log(now.getDate()); //날짜 가져오기 0 : 1
console.log(now.getDay()); //요일 가져오기 0 : 1
console.log(now);

console.log(now.toString()); //전체적인 날짜와 시간
console.log(now.toDateString()); //날짜만 가져오기
console.log(now.toTimeString()); //시간만 가져오기
console.log(now.toISOString()); //ISO 8601 형식
console.log(now.toLocaleString('en-US')); //미국형식
console.log(now.toLocaleString('ko-KR')); //한국형식
