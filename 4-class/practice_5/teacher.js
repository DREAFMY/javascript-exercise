// TODO 20: 在这里写实现代码
import Person from './person';

export default class Worker extends Person {
  constructor(name, age, sclass = 0) {
    super(name, age);
    this.sclass = sclass;
  }

  introduce() {
    if (this.sclass) {
      return `${super.introduce()} I am a Teacher. I teach Class ${this.sclass}.`;
    }
    return `${super.introduce()} I am a Teacher. I teach No Class.`;
  }
}
