//주어진 숫자만큼 0부터 순회하는 함수
//순회하면서 주어진 특정한일을 수행해야 함
//5, 순회하는 숫자를 다 출력하고 싶음
//5, 순회하는 숫자의 두배값을 다 출력하고 싶음
function log(sum) {
  console.log(sum);
}

function iterate(max, action) {
  for (let i = 0; i < max; i++) {
    action(i);
  }
}

//매개변수에 함수를 집어넣으면 인자 action이 호출되는 action(i)에서 실행되므로
//action(i)는 console.log(num)가 됨
iterate(5, (num) => console.log(num));

//매개변수에 함수를 집어넣으면 인자 action이 호출되는 action(i)에서 실행되므로
//action(i)는 console.log(num * 2)가 됨
iterate(5, (num) => console.log(num * 2));

setTimeout(() => console.log('1초뒤에 실행'), 1000);
