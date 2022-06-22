import { v4 as uuid } from "uuid";

export const users = [];

class User {
  constructor(username = '', age = 0, hobbies = []) {
    this.id = uuid();
    this.username = username;
    this.age = age;
    this.hobbies = hobbies;
  }
  get() {
    return {
      id: this.id,
      username: this.username,
      age: this.age,
      hobbies: this.hobbies
    };
  }
}

export function createUser(username, age, hobbies) {
  const user = new User(username, age, hobbies);
  users.push(user);
}