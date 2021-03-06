function getBanana() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve('๐');
    }, 1000);
  });
}

function getApple() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve('๐');
    }, 3000);
  });
}

function getOrange() {
  return Promise.reject(new Error('no Orange'));
}

//๋ฐ๋๋์ ์ฌ๊ณผ๋ฅผ ๊ฐ์ด ๊ฐ์ ธ์ค๊ธฐ
getBanana() //
  .then((banana) =>
    getApple() //
      .then((apple) => [banana, apple])
  )
  .then(console.log);

//Promise.all : ๋ณ๋ ฌ์ ์ผ๋ก ํ๋ฒ์ ๋ชจ๋  ํ๋ก๋ฏธ์ค์ ๋ฆฌํด๊ฐ์ ๋ฐฐ์ด์ ๋ด์์ ์ ์ฅ
Promise.all([getBanana(), getApple()]) //
  .then((result) => console.log('all', result));

//Promise.race : ์ฃผ์ด์ง Promise์ค์ ์ ์ผ ๋นจ๋ฆฌ ์ํ๋๋ ๊ฒ์ด ๋ฆฌํด
Promise.race([getBanana(), getApple()]) //
  .then((result) => console.log('race' + result));

//reject๊ฐ ์์ผ๋ฉด catch๋ธ๋ก์ ์ถ๊ฐํด์ค์ผํจ
Promise.all([getBanana(), getApple(), getOrange()]) //
  .then((result) => console.log('all-error', result))
  .catch(console.error);

//์๋ฌ๊ฐ ๋ฐ์ํ ๊ฒ์ด๋ ์ฑ๊ณตํ๊ฑฐ ๋๋ค ๋ฐ์์ค๊ณ  ์ถ๋ค๋ฉด
Promise.allSettled([getBanana(), getApple(), getOrange()]) //
  .then((result) => console.log('all-error', result))
  .catch(console.error);
