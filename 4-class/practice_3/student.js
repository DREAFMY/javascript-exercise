// TODO 13: 在这里写实现代码
import Person from './person';

export default class student extends Person {
  constructor(name, age, sclass) {
    super(name, age);
    this.class = sclass;
  }

  introduce() {
    return `I am a Student. I am at Class ${this.sclass}.`;
  }
}
