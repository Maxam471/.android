/// 1 Функции
// Function declaration
//function greet(name) {
//  console.log("Привет - ", name);
//}

// Function Expression
///const greet2 = function greet2(name) {
//  console.log("Привет2 - ", name);
//};

//greet("Лена");
//greet2("Елена");

//console.log(typeof greet);
//console.dir(greet);{

/// 2 Анонимные функции
//let counter = 0;
//const interval = setInterval(function () { // setTimeout
//  if (counter === 5) c
//    clearInterval(interval);  // clear Timeout
//  } else {
//    console.log(++counter);
//  }
//}, 1000);

/// 3 Стрелочные функции

function greet(name) {
  console.log("Привет - ", name);
}

const arrow = (name) => {
  console.log("Привет - ", name);
};

const arrow2 = (name) => console.log("Привет - ", name);

//arrow2("Max");

const pow2 = (num) => num ** 2;

//console.log(pow2(5));

// 4 Параметры по умолчанию
const sum = (a = 40, b = a * 2) => a + b;

console.log(sum());

function sumAll(...all) {
  let result = 0;
  for (let num of all) {
    result += num;
  }
  return result;
}
const res = sumAll(1, 2, 3, 4);
console.log(res);

// 5 Замыкание
function creatMember(name) {
  return function (lastName) {
    console.log(name + lastName);
  };
}

const logWithLastName = creatMember("Max");
console.log(logWithLastName("Drago"));
console.log(logWithLastName("Kuznecov"));

const displayItems = allItems.filter(
  (item = item.name.indexOf("phone") !== -1)
);
