//Math
//static properties, method

console.log(Math.E); //오일러상수, 자연로그의 밑
console.log(Math.PI); //원주율

//static method
console.log(Math.abs(-4)); //절대값
console.log(Math.ceil(1.45)); //소수점 이하 올림
console.log(Math.floor(1.45)); //소수점이하 내림
console.log(Math.round(1.45)); //소수점이하 반올림
console.log(Math.trunc(4.421345)); //정수만 반환
console.clear();

console.log(Math.max(1, 3, 4)); //최대값
console.log(Math.min(1, 3, 4)); //최소값

console.log(Math.pow(2, 3)); //거듭제곱
console.log(Math.sqrt(9)); //제곱근

console.log(Math.random()); //0 <= random < 1
//1~10사이 랜던값 구하기
console.log(Math.round(Math.random() * 10 + 1));
