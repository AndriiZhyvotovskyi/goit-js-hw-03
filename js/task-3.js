"use strict";
const findBestEmployee = function (employees) {
  const keys = Object.keys(employees);
  let bestWorker = keys[0];
  for (let i = 1; i < keys.length; i += 1) {
    if (employees[keys[i]] > employees[keys[0]]) {
      bestWorker = keys[i];
    }
  }
  for (const key in employees) {
    console.log(`'${key}': '${employees[key]}'`);
  }
  return bestWorker;
};

/*
 * Вызовы функции для проверки работоспособности твоей реализации.
 */
console.log(
  findBestEmployee({
    ann: 29,
    david: 35,
    helen: 1,
    lorence: 99,
  })
); // lorence

console.log(
  findBestEmployee({
    poly: 12,
    mango: 17,
    ajax: 4,
  })
); // mango

console.log(
  findBestEmployee({
    lux: 147,
    david: 21,
    kiwi: 19,
    chelsy: 38,
  })
); // lux
