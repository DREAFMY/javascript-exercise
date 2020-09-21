// TODO 19: 在这里写实现代码
import Person from './person';

export default class Student extends Person {
  constructor(name, age, sclass) {
    super(name, age);
    this.sclass = sclass;
  }

  introduce() {
    return `${super.introduce()} I am a Student. I am at Class ${this.sclass}.`;
  }
}
