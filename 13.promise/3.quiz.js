//주어진 seconds(초)가 지나면 callback 함수를 호출함
//단, seconds가 0보다 작으면 에러를 던짐
function runInDelay(callback, seconds) {
  if (!callback) throw new Error('콜백함수가 없음');
  if (!seconds || seconds < 0) throw new Error('0보다 큰값을 집어넣으세요');
  setTimeout(callback, seconds * 1000);
}
try {
  runInDelay(() => console.log('테스트'), 3);
} catch (error) {}
