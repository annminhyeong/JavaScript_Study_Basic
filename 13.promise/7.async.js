function getBanana() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve('🍌');
    }, 1000);
  });
}

function getApple() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve('🍎');
    }, 3000);
  });
}

function getOrange() {
  return Promise.reject(new Error('no Orange'));
}

//async : 비동기로 처리하겠다는 뜻
async function fetchFruit() {
  //await : 비동기처리함수가 처리를 끝날때까지 대기함 (비동기적 -> 동기적으로 변환)
  const banana = await getBanana();
  const apple = await getApple();

  return [apple, banana];
}
fetchFruit() //
  .then((fruit) => console.log(fruit));
