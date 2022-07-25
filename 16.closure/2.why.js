//내부 정보를 은닉하고, 공개 함수를 통한 데이터 조작에 쓰임
//캡슐화와 정보은닉 쓰임
//클래스 private필드 또는 메서드를 사용하는 효과와 동일

function makeCounter() {
  let count = 0;
  function increase() {
    count++;
    console.log(count);
  }
  return increase;
}

const increase = makeCounter();
increase();
increase();
increase();

class Counter {
  //private
  #count = 0;

  increase() {
    this.#count++;
    console.log(this.#count);
  }
}

const counter = new Counter();
counter.increase();
counter.increase();
counter.increase();
