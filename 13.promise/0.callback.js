function taskA(a, b, cb) {
  setTimeout(() => {
    const res = a + b;
    cb(res);
  }, 3000);
}

function taskB(aRes, cb) {
  setTimeout(() => {
    const res = aRes * 2;
    cb(res);
  }, 1000);
}

function taskC(bRes, cb) {
  setTimeout(() => {
    const res = bRes * -1;
    cb(res);
  }, 2000);
}

taskA(4, 5, (aRes) => console.log('A reuslt :', aRes));
taskB(9, (bRes) => console.log('B reuslt :', bRes));
taskC(18, (cRes) => console.log('C reuslt :', cRes));

taskA(4, 5, (aRes) => {
  console.log('A reuslt :', aRes);
  taskB(aRes, (bRes) => {
    console.log('B reuslt :', bRes);
    taskC(bRes, (cRes) => {
      console.log('C reuslt :', cRes);
    });
  });
});
console.log('코드 끝');

//콜백함수 테스트
function funcA(a, b, cb) {
  setTimeout(() => {
    let res = a + b;
    cb(res);
    return res;
  }, 3000);
}

function funcB(cb, aRes) {
  setTimeout(() => {
    const res = aRes * 2;
    cb(res);
  }, 1000);
}

funcA(3, 4, (aRes) => {
  funcB((bRes) => {
    console.log(bRes);
  }, aRes);
});
