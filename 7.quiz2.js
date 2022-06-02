//정직원과 파트타임직원 클래스 만들기
//직원정보 : 이름, 부서이름, 한달 근무 기간
//매달 직원정보를 이용해 한달월급을 계산할수 있음
//정직원은 10000원
//파트타임은 8000원

class Employee {
  constructor(name, department, hoursPerMonth, payRate) {
    this.name = name;
    this.department = department;
    this.hoursPerMonth = hoursPerMonth;
    this.payRate = payRate;
  }

  calculatePay() {
    return this.hoursPerMonth * this.payRate;
  }
}

class FullTimeEmloyee extends Employee {
  static PAY_RATE = 10000;
  constructor(name, department, hoursPerMonth) {
    super(name, department, hoursPerMonth, PAY_RATE);
  }
}

class PartTimeEmloyee extends Employee {
  static PAY_RATE = 8000;
  constructor(name, department, hoursPerMonth) {
    super(name, department, hoursPerMonth, PAY_RATE);
  }
}
