import { v4 as uuid } from "uuid";

export const users = [
  {
    id: uuid(),
    username: "Arya Stark",
    age: 9,
    hobbies: ["fighting", "exploration"],
  },
  {
    id: uuid(),
    username: "Sansa Stark",
    age: 11,
    hobbies: ["music", "poetry", "singing", "dansing"],
  },
  {
    id: uuid(),
    username: "Bran Stark",
    age: 7,
    hobbies: ["climbing", "exploration"],
  },
  {
    id: uuid(),
    username: "Jon Snow",
    age: 14,
    hobbies: ["fighting", "horseriding"],
  },
  {
    id: uuid(),
    username: "Daenerys Targaryen",
    age: 14,
    hobbies: ["languages learning", ""],
  },
];