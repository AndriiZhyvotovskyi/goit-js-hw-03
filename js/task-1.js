"use strict";

const info = [];

const user = {
  name: "Mango",
  age: 20,
  hobby: "html",
  premium: true,
};

console.log("before: ", user);

user.mood = "happy";
user.hobby = "skydiving";
user.premium = false;
console.log("after: ", user);

for (const key in user) {
  console.log(`${key}: ${user[key]}`);
}
