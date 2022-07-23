//주어진 seconds(초)가 지나면 callback 함수를 호출함
//단, seconds가 0보다 작으면 에러를 던짐
function runInDelay(seconds) {
  //resolve : then을 호출함
  //reject  : catch을 호출함
  return new Promise((resolve, reject) => {
    //여기서 비동기적인 코드를 작성함

    //seconds가 0보다 작으면 오류던짐
    if (!seconds || seconds < 0) {
      reject(new Error('seconds가 0보다 작음'));
    }

    // setTimeout(() => {
    //   resolve();
    // }, seconds * 1000);
    //를
    setTimeout(resolve, seconds * 1000);
    //로 축약가능
  });
}

runInDelay()
  .then(() => console.log('타이머 완료')) //성공될때 실행
  .catch(console.error) //실패될때 실행
  .finally(() => console.log('끝났다')); //성공하든 실패하든지 실행
