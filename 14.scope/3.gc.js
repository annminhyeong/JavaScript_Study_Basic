//전역변수는 앱이 종료될때까지 계속 메모리에 존재함
const global = 1;
{
  //블록이 끝나면 자동으로 가비지컬렉터가 원할때  메모리에서 제거함
  const local = 1;
}
