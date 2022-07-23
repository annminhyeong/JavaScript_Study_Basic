function getChicken() {
  return Promise.reject(new Error('치킨을 가져올 수 없음'));
  //return Promise.resolve(`🪴 => 🐓`);
}

function fetchEgg(chicken) {
  //프로미스(비동기)를 만들고 성공한 코드를 실행
  return Promise.resolve(`${chicken} => 🥚`);
}

function fryEgg(egg) {
  return Promise.resolve(`${egg} => 🍳`);
}

fetchEgg('🐔') //
  .then((egg) => console.log(egg));

getChicken() //
  .catch((error) => {
    console.log(error.name);
    return '🐔';
  })

  // .then((chicken) => fetchEgg(chicken))
  // .then((egg) => fryEgg(egg))
  // .then((friedEgg) => console.log(friedEgg));
  //를
  .then(fetchEgg)
  .then(fryEgg)
  .then(console.log);
//로 축약가능
