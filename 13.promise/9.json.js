//JSON : JavaScript Object Notation
//서버와 클라이언트(브라우저, 모바일) 간의 HTTP 통신을 위한
//오브젝트 형태의 텍스트포멧
//stringify(object) : JSON    //object -> JSON로 변환
//parse(JSON)       : object  //JSON -> object로 변환

const ellie = {
  name: 'ellie',
  age: 20,
  eat: () => {
    console.log('eat');
  },
};

//object -> JSON (직렬화 : 객체를 문자열로 반환)
const json = JSON.stringify(ellie);
console.log(ellie);

//데이터만 JSON으로 변환가능
console.log(json);

//JSON -> object (역직렬화 : 문자열데이터를 객체로 변환)
const obj = JSON.parse(json);
console.log(obj);
