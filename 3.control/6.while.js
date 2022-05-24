// while(조건){  }
// 조건이 false가 될때까지 계속 실행
let num = 5;
while (num >= 0) {
  console.log(num);
  num--;
}

let isActive = false;
let i = 0;
while (isActive) {
  console.log('whlie 살아있다');
  if (i === 1000) {
    break;
  }
  i++;
}

do {
  console.log('do while 살아있다');
} while (isActive);
