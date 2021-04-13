const person = {
  name: "Max",
  age: 12,
  isPrograrmmer: true,
  languages: ["ru", "en", "ua"],
  greet() {
    console.log("greet from person");
  },
  info() {
    console.info("Информаия про человека по имени ", this.name);
  },
};

const logger = {
  keys() {
    console.log(Object.keys(this));
  },

  keysAndValues() {
    Object.keys(this).forEach((key) => {
      console.log(`'${key}: '${this[key]}'`);
    });
  },
};
logger.keysAndValues.call({ a: 1, c: 2 });
