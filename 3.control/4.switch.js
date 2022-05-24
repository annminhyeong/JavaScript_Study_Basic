//조건문 Conditional Statment
//switch : 정해진 범위안에 값에 대해 특정한 일을 해야하는 경우
let day = 0;
let dayName;
switch (day) {
  case 0:
    dayName = '월요일';
    break;
  case 1:
    dayName = '화요일';
    break;
  case 2:
    dayName = '수요일';
    break;
  case 3:
    dayName = '목요일';
    break;
  case 4:
    dayName = '금요일';
    break;
  case 5:
    dayName = '토요일';
    break;
  case 6:
    dayName = '일요일';
    break;
  default:
    dayName = '요일아님';
    break;
}

//break 안걸어도 되는 경우
let condition = 'okey';
let text;
switch (condition) {
  case 'okey':
  case 'good':
    text = '좋음';
    break;
  case 'bad':
    text = '나쁨';
    break;
}
