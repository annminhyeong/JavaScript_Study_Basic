function getChicken() {
  return Promise.reject(new Error('치킨을 가져올 수 없음'));
  return Promise.resolve(`🪴 => 🐓`);
}

function fetchEgg(chicken) {
  //프로미스(비동기)를 만들고 성공한 코드를 실행
  return Promise.resolve(`${chicken} => 🥚`);
}

function fryEgg(egg) {
  return Promise.resolve(`${egg} => 🍳`);
}

async function quiz() {
  let chicken;
  try {
    chicken = await getChicken();
  } catch (error) {
    console.log(error.name);
    chicken = '🐔';
  }
  const egg = await fetchEgg(chicken);
  const friedEgg = await fryEgg(egg);
  console.log(friedEgg);
  return fetchEgg;
}
let result = quiz();
console.log('result', result);
