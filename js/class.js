// class is blueprint of an object

// example 1
class Person {
  constructor(firstName, lastName, nationalId) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.nationalId = nationalId;
  }

  getFullName() {
    return `${this.firstName} ${this.lastName}`;
  }
}

// example 2
class Employee extends Person {
  constructor(
    firstName,
    lastName,
    nationalId,
    position,
    baseSalary,
    overtTime,
    payPerHour
  ) {
    super(firstName, lastName, nationalId);
    this.position = position;
    this.baseSalary = baseSalary;
    this.overTime = overtTime;
    this.payPerHour = payPerHour;
  }

  getDetails() {
    const salary = this.getSalary();

    return {
      fullName: this.getFullName(),
      position: this.position,
      salary: this.#threeDigitSeperator(salary),
    };
  }

  getSalary() {
    return this.baseSalary + this.overTime * this.payPerHour;
  }

  #threeDigitSeperator(number) {
    return number.toLocaleString("en-US");
  }
}

// example 3
class Stack {
  #array;
  constructor() {
    this.#array = [];
    this.length = 0;
  }

  push(item) {
    if (this.#isEmpty()) this.#array[0] = item;
    else this.#array[this.length] = item;

    this.length++;
  }

  pop() {
    if (this.#isEmpty()) throw new Error("stack is empty.");

    delete this.#array[this.length - 1];
    this.length--;
  }

  peek() {
    if (this.#isEmpty()) throw new Error("stack is empty.");

    return this.#array[this.length - 1];
  }

  contains(item) {
    for (let i = 0; i < this.length; i++)
      if (this.#array[i] === item) return true;

    return false;
  }

  print() {
    if (this.length >= 0) this.#array.length = this.length;

    return { items: this.#array, count: this.length };
  }

  #isEmpty() {
    return this.length === 0;
  }
}

const stack = new Stack();

stack.push(10);
stack.push(100);
stack.push(1000);
stack.push(10000);

// stack.pop();
// stack.pop();
// stack.pop();
// stack.pop();

console.log(stack.contains(1000000));
