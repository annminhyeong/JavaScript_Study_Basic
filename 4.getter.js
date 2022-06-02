//접근자 프로퍼티(Accesser Property)
class Student {
  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
    // this.fullName = `${lastName} ${firstName}`; // 업데이트가 안됨
  }
  //함수 앞에 get을 속성처럼 쓸 수 있음
  get fullName() {
    return `${this.lastName} ${this.firstName}`;
  }

  set fullName(value) {
    console.log('set' + value);
  }
}

const student = new Student('수지', '김');
student.firstName = '안나';
console.log(student.fullName);
student.fullName = '김철수';
