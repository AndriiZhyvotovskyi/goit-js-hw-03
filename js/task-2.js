"use strict";

const countProps = function (obj) {
  const keys = Object.keys(obj);

  const countpProperty = keys.length;

  return countpProperty;
};

console.log(countProps({})); // 0

console.log(countProps({ name: "Mango", age: 2 })); // 2

console.log(countProps({ mail: "poly@mail.com", isOnline: true, score: 500 })); // 3
