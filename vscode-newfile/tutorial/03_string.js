// 1 Строки
//const name = "Макс";
//const age = 12;

//function getAge() {
//  return Age;
//}

//const output = "Привет, меня зовут " + name + " и мой возраст " + age + " лет.";
//const output = `Привет, меня зовут ${name} и мой возраст ${
//  age < 10 ? "A" : "B"
//} лет`;

//console.log(output);

//const output = `
//  <div>This is DIV</div>
//  <p>this is P</p>
//`;
//console.log(output);

///const name = "Max";
//console.log(name.length);
//console.log(name.toUpperCase());
////console.log(name.toLowerCase());
//console.log(name.charAt(2));
//console.log(name.indexOf("!"));
//console.log(name.toUpperCase().startsWith("m"));
///console.log(name.endsWith("x"));
//console.log(name.repeat(3));

//const string = "    password    ";
////console.log(string.trim());
//console.log(string.trimLeft());
//console.log(string.trimRight());

function logPerson(s, name, age) {
  if (age < 0) {
    age = "Еще не родился";
  }
  return `${s[0]}${name}${s[1]}${age}${s[2]}`;
}

const personName = "Max";
const personName2 = "Maxim";
const personAge = 12;
const personAge2 = -10;

const output = logPerson`Имя: ${personName}, возраст: ${personAge} !`;
const output2 = logPerson`Имя: ${personName2}, возраст: ${personAge2} !`;

console.log(output);
console.log(output2);
