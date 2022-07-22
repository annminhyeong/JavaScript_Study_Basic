function a() {
  throw new Error('error!');
}

function b() {
  try {
    a();
  } catch (error) {
    console.log('에러 throw');
    throw error;
  }
}

function c() {
  b();
}

try {
  c();
} catch (error) {
  console.log('Catched');
}
console.log('done');
