// 1 Переменные
// camelCase (firstName)

// console.log();

// const _ = "private";
// const $ = "some value";

// const if = 'mkef'

// const withNum5 = "5";
// const 5withNum = '5' - error

// 2 Мутирование
//console.log("Имя человека: " + firstName + " , а возраст человека: age");

//const lastName = prompt("Введите Фамилию");
//alert(firstName + " " + lastName);

//3 Операторы

// let currentYear = 2021;
// const birthYear = 2008;

// const age = currentYear - birthYear;

// const a = 10;
// const b = 5;

// let c = 32;
// c = c + a;

// c += a;
// c -= a;
// c *= a;
// c /= a;

// console.log(a + b);
// console.log(a - b);
// console.log(a * b);
// console.log(a / b);

// console.log(currentYear++);
// console.log(currentYear);
// console.log(c);

// 4 Типы Данных
//const isProgrammer = true;
//const name = "Maxam";
//const age = 12;
//let x;

//console.log(typeof isProgrammer);
//console.log(typeof name);
//console.log(typeof age);
//console.log(typeof x);
//console.log(null);

// 5 Приоритет операторов
//const fullAge = 12;
//const birthYear = 2008;
//const currentYear = 2021;

// > < >= <=
//const isFullAge = (currentYear - birthYear) >= fullAge;
//console.log(isFullAge);

// 6 Условные операторы
//const courseStatus = "fail"; // ready, fail, pending

//if (courseStatus === "ready") {
//  console.log("Курс уже готов и его можно проходить");
///} else if (courseStatus === "pending") {
// console.log("Курс пока готовится в процессе разроботки");
//} else {
//  console.log("Курс не получился");
//}

//const isReady = true;

//if (isReady === true) {
//  console.log("все найс");
//} else {
//  console.log("все не готово");
//}

//isReady ? console.log("все найс") : console.log("все не готово");

//const num1 = 42; // number
//const num2 = "42"; // string

//console.log(num1 === num2)

// 7 Булевая логика

//true && true;
//true || flase;

// 8 Функции

//function calculateAge(year) {
//  return 2021 - year;
//}

//const myAge = calculateAge(2008);
//console.log(myAge);
//console.log(calculateAge(2008));

//function logInFoAbout(name, year) {
//  const age = calculateAge(year);

// if (age > 0) {
//    console.log("Человек по имени " + name + " имеет возраст " + age);
//  } else {
//    console.log("Вообще-то это уже будущее");
//  }
//}

//logInFoAbout("Maxam", 2008);
//logInFoAbout("Igor", 2022);

// 9 Массивы

//const cars = ["Mazda", "Mersedes", "Gelik"];
//const cars = new Array("Mazda", "Mersedes", "Gelik");
//console.log(cars.length);
//console.log(cars[1]);
//console.log(cars[0]);
//console.log(cars[2]);
//console.log(cars[3]);

//cars[1] = "Kia";
//cars[cars.length] = "Porsche";
//console.log(cars);

// 10 Циклы
//const cars = ["Mazda", "Mersedes", "Gelik", "Porsche"];

//for (let i = 0; i < cars.length; i++) {
//  const car = cars[i];
//  console.log(car);
//}

//for (let car of cars) {
//  console.log(car);
//}

// 11 Объекты
//const person = {
//  firstName: "Maxam",
//  lastName: "Drago",
//  year: "2008",
// languages: ["Ru", "Engl", "Ua"],
//  hasWife: false,
//  greet: function () {
//    console.log("greet from person");
//  },
//};

//console.log(person.firstName);
//console.log(person["lastName"]);
//const key = "languages";
//console.log(person[key]);
//person.hasWife = true;
//console.log(person);
//person.isProgrammer = true;
//person.greet();

const firstName = "Maxam";
//let lastName = "Drago";
//let age = "12";

console.log("Имя человека: " + firstName + " , а возраст человека: age");
