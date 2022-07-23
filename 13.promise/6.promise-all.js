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

//바나나와 사과를 같이 가져오기
getBanana() //
  .then((banana) =>
    getApple() //
      .then((apple) => [banana, apple])
  )
  .then(console.log);

//Promise.all : 병렬적으로 한번에 모든 프로미스의 리턴값을 배열에 담아서 저장
Promise.all([getBanana(), getApple()]) //
  .then((result) => console.log('all', result));

//Promise.race : 주어진 Promise중에 제일 빨리 수행되는 것이 리턴
Promise.race([getBanana(), getApple()]) //
  .then((result) => console.log('race' + result));

//reject가 있으면 catch블록을 추가해줘야함
Promise.all([getBanana(), getApple(), getOrange()]) //
  .then((result) => console.log('all-error', result))
  .catch(console.error);

//에러가 발생한 것이랑 성공한거 둘다 받아오고 싶다면
Promise.allSettled([getBanana(), getApple(), getOrange()]) //
  .then((result) => console.log('all-error', result))
  .catch(console.error);
