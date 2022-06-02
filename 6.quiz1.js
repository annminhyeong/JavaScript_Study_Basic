//카운터만들기
// 0이상의 값으로 초기화 한뒤 하나씩 숫자를 증가할수 있는 카운터를 만들기

class Counter {
  #value;
  constructor(startValue) {
    if (isNaN(startValue) || startValue < 0) {
      this.#value = 0;
    } else {
      this.#value = startValue;
    }
  }
  increment() {
    this.conter++;
  }

  get value() {
    return this.#value;
  }
}
