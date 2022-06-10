// console.log([] === []);
// console.log({} === {});
// console.log(function () {} === function () {});

// const fnA = function () {};
// const fnB = fnA;

// console.log(fnA === fnB);

// const user = {
//   tag: "Mango",
//   showTag() {
//     console.log("showTag -> this", this);
//   },
// };

// user.showTag();

// function foo() {
//   console.log(this);
// }
// foo();

//

// const showTag = function () {
//   console.log("showTag -> this", this);
//   console.log("showTag -> this.tag", this.tag);
// };

// // const showThis = function () {
// //   console.log("showThis -> this", this);
// // console.log("showThis -> this.name", this.name);
// // };

// showTag();

// const user = {
//   tag: "Mango",
// };

// // user.showUserThis = showTag;
// user.showContext = showTag;

// console.log(user.showContext);
// user.showUserThis();

///

// const showTag = function () {
//   console.log("showTag -> this", this);
//   console.log("showTag -> this.tag", this.tag);
// };

// // showTag();

// const user = {
//   tag: "Mango",
// };

// user.showUserTag = showTag;
// console.log("user", user);

// user.showUserTag();

//

// const user = {
//   tag: "Mango",
//   showTag: function () {
//     console.log("showTag -> this", this);
//     console.log("showTag -> this.tag", this.tag);
//   },
// };

// user.showTag();

// const outerShowTag = user.showTag;

// outerShowTag();

//

// const user = {
//   tag: "Mango",
//   showTag() {
//     console.log("showTag -> this", this);
//     console.log("showTag -> this.tag", this.tag);
//   },
// };

// const invokeAction = function (action) {
//   console.log(action);

//   action();
// };

// invokeAction(user.showTag);

//

// const fn = function () {
//   console.log("fn -> this", this);
// };

// fn(); // Какой this ???

//

// const book = {
//   title: "React for beginners",
//   showThis() {
//     console.log("showThis -> this", this);
//   },
//   showTitle() {
//     console.log("showTitle -> this.title", this.title);
//   },
// };

// book.showThis(); // Какой this ???

// const outerShowThis = book.showThis;
// outerShowThis(); // Какой this ???

// const outerShowTitle = book.showTitle;
// outerShowTitle(); // Какой this ???

//

// const makeChangeColor = function () {
//   const changeColor = function (color) {
//     console.log("changeColor -> this", this);
//     // this.color = color;
//   };

//   // changeColor(); // Какой this ???

//   const sweater = {
//     color: "teal",
//   };

//   sweater.updateColor = changeColor;

//   // sweater.updateColor("red"); // Какой this ???

//   return sweater.updateColor;
// };

// // makeChangeColor();

// const swapColor = makeChangeColor();

// swapColor("blue"); // Какой this ???

//

// const makeChangeColor = function () {
//   const changeColor = function (color) {
//     console.log("changeColor -> this", this);
//   };

//   return changeColor;
// };

// const updateColor = makeChangeColor();
// updateColor("yellow"); // Какой this ???

// const hat = {
//   color: "blue",
//   updateColor: updateColor,
// };

// hat.updateColor("orange"); // Какой this ???

// console.log(hat.updateColor);

//

// const counter = {
//   value: 0,
//   increment(value) {
//     console.log("increment -> this", this);
//     this.value += value;
//   },
//   decrement(value) {
//     console.log("decrement -> this", this);
//     this.value -= value;
//   },
// };

// const updateCounter = function (value, operation) {
//   operation(value);
// };

// updateCounter(10, counter.increment);
// updateCounter(5, counter.decrement);

// updateCounter(10, counter.increment.bind(counter));
// console.log(counter);

// updateCounter(5, counter.decrement.bind(counter));
// console.log(counter);

// const arr = [1, 2];
// console.log(Array.isArray(arr));

// const str = "Mango";
// console.log(Array.from(str));

// const obj = {
//   a: 1,
//   b: 2,
// };

// console.log(Array.from(obj));

//

// function greetGuest(greeting, quevesion) {
//   console.log(`${greeting}, ${this.userName}${quevesion}`);
// }

// const mango = {
//   userName: "Mango",
// };

// const poly = {
//   userName: "Poly",
// };

// greetGuest.call(mango, "Welcome", "!");
// greetGuest.call(poly, "How are you", "?");

// greetGuest.apply(mango, ["Welcome", "!!!"]);
// greetGuest.apply(poly, ["How are you", "nezia"]);

//

// const customer = {
//   firstName: "Jacob",
//   lastName: "Hendrix",
//   getFullNmae() {
//     // console.log(`${this.firstName} ${this.lastName}`);
//     return `${this.firstName} ${this.lastName}`;
//   },
// };

// function makeMessage(callback) {
//   console.log(callback());
//   console.log(`Обрабатываем заявку от ${callback()}.`);
// }

// makeMessage(customer.getFullNmae.bind(customer));
// makeMessage(customer.getFullNmae);

//

// const animal = {
//   legs: 4,
// };

// const dog = Object.create(animal);
// dog.name = "Mango";

// console.log(dog);
// console.log(animal.isPrototypeOf(dog));

// console.log(dog.hasOwnProperty("name"));
// console.log(dog.hasOwnProperty("legs"));

// console.log(dog.legs);

//

// const animal = {
//   eats: true,
// };
// const dog = Object.create(animal);
// dog.barks = true;

// for (const key in dog) {
//   console.log(key);
// }

// for (const key in dog) {
//   if (dog.hasOwnProperty(key)) {
//     console.log(key);
//   }
// }

// for (const key in dog) {
//   if (!dog.hasOwnProperty(key)) {
//     continue;
//   }
//   console.log(key);
// }

// for (const key in dog) {
//   if (!dog.hasOwnProperty(key)) continue;

//   console.log(key); // barks
// }

// const dogKey = Object.keys(dog);
// console.log(...dogKey);

//

// class User {}

// const mango = new User();
// console.log(mango);

// console.log(User);

// new User();

//

// class User {
//   constructor(name, email, item) {
//     this.name = name;
//     this.email = email;
//     this.item = item;
//   }
// }

// const mango = new User("Mango", "mango@mail.com");
// console.log(mango);

// const poly = new User("Poly", "polymorf@mail.com");
// console.log(poly);

// console.log(mango.email);

// console.log(mango.hasOwnProperty(name));

// const mangoItem = Object.keys(mango);
// console.log(mangoItem);

//

// class User {
//   constructor({ name, email }) {
//     this.name = name;
//     this.email = email;
//   }
// }

// const mango = new User({ name: "Mango", email: "mango@mail.com" });
// console.log(mango);

//

// class User {
//   constructor({ name, email }) {
//     this.name = name;
//     this.email = email;
//   }
// }

// const mango = new User({ name: "Mango", email: "mango@mail.com" });
// console.log(mango);

// const poly = new User({ name: "Поли", email: "poly@mail.com" });
// console.log(poly);

//

// class User {
//   constructor({ name, email }) {
//     this.name = name;
//     this.email = email;
//   }
//   getEmail() {
//     this.email;
//   }
//   changeEmail(newEmail) {
//     this.email = newEmail;
//   }
// }

//

// const employee = {
//   baseSalary: 3000,
//   overTime: 10,
//   rate: 20,
// };

// const getWage = function () {
//   return this.baseSalary + this.overTime + this.rate;
// };

// console.log(getWage.bind(employee));

//

// function greet(clientName) {
//   return `${clientName}, weclome in ${this.service} `;
// }

// const steam = {
//   service: "Steam",
// };

// const steamGreeter = greet.bind(steam);
// console.log(steamGreeter("Mango"));

//

// const showThis = () => {
//   console.log("this", this);
// };

// // console.log(showThis());
// const undFn = showThis();

// console.log(undFn);

// const user = {
//   userName: "Mango",
// };
// user.showContext = showThis;
// user.showContext();

// let user = {
//   name: "Joy",
//   age: 30,
//   sayHi() {
//     console.log(user.name);
//   },
// };

// const admin = user;
// user = null;

// admin.sayHi();

//

// let user = {
//   name: "Джон",
//   go: function () {
//     alert(this.name);
//   },
// };

// user.go();

//

// const customer = {
//   firstName: "Jacob",
//   lastName: "Mercer",
//   getFullName() {
//     return `${this.firstName} ${this.lastName}`;
//   },
// };

// function makeMessage(callback) {
//   // callback(); //это вызов метода getFullName без объекта
//   console.log(`Обрабатываем заявку от ${callback()}.`);
// }

// makeMessage(customer.getFullName.bind(customer)); // Будет ошибка при вызове функции
// makeMessage(customer.getFullName); // Будет ошибка при вызове функции

// makeMessage(customer.getFullName.bind(customer));

//

// const add = function (...args) {
//   console.log(args); // массив всех аргументов
// };

// add(1, 2, 3);
// add(1, 2, 3, 4, 5);

// let [x, ...remaining] = [1, 2, 3, 4, 5];
// console.log(x);

// //

// console.log();
// console.log(null.length);

//

// function greatGuest(greeting) {
//   console.log(`${greeting}, ${this.userName}.`);
// }

// const mango = {
//   userName: "Mango",
// };

// greatGuest.call(mango, "Welcome");

// greatGuest.apply(mango, ["Welcome"]);

// //

// function great(clientName) {
//   return `${clientName}, Welcome in ${this.service}`;
// }

// const steam = {
//   service: "Steam",
// };

// const steamGreater = great.bind(steam);
// console.log(steamGreater("Mango"));

// //

// const customer = {
//   firstName: "Jacob",
//   lastName: "Mercer",
//   getFullName() {
//     return `${this.firstName} ${this.lastName}`;
//   },
// };

// function maleMessage(callback) {
//   // callback();
//   // console.log(`Obrabativvaem zayavku ot ${callback()}`);
//   return callback();
// }

// console.log(maleMessage(customer.getFullName.bind(customer)));

//

// const animal = {
//   leg: 4,
// };

// const dog = Object.create(animal);
// dog.name = "Mango";

// console.log(dog);
// console.log(animal);
// console.log(animal.isPrototypeOf(dog));

// console.log(dog.hasOwnProperty("name"));
// console.log(dog.hasOwnProperty("leg"));
// console.log(dog.leg);
// console.log(dog.__proto__);

// const objA = {
//   name: "Mango",
// };

// const objB = Object.create(objA);
// objB.nameB = "Viki";

// const objC = Object.create(objB);
// objC.nameC = "Ajax";

// console.log(objC);
// console.log(objC.name);
// console.log(objC.nameB);
// console.log(objC.__proto__);

// console.log(objB);

//

// const animal = {
//   eats: true,
// };

// const dog = Object.create(animal);
// dog.name = "Barks";

// console.log(Object.keys(dog));
// console.log(Object.values(dog));

//

// class User {}

// const mango = new User();
// console.log(mango);

//

// class User {
//   constructor(name, email) {
//     this.name = name;
//     this.email = email;
//   }
// }

// const mango = new User("Mango", "email@gmail.com");
// console.log(mango);

// const poly = new User("Poly", "poly@gmail.com");
// console.log(poly);

// console.log(poly.email);
// console.log(mango.name);

//

// class User {
//   constructor(name, email) {
//     this.name = name;
//     this.email = email;
//   }
//   getEmail() {
//     return this.email;
//   }
// }

// const mango = new User("Mango", "email@gmail.com");
// console.log(mango);
// console.log(mango.getEmail());

// const obj = {
//   a: 12,
//   b: "Mabgo",
//   getA() {
//     return this.a + this.b;
//   },
// };

// const keyObj = Object.keys(obj);
// console.log(keyObj);

// console.log(obj.getA());

//
// const objC = {
//   c: 3,
//   // __proto__: objA,
// };
// const objB = {
//   b: 2,
//   __proto__: objC,
// };

// const objA = {
//   a: 1,
//   __proto__: objB,
// };

// console.log(objA);
// console.log(objB);
// console.log(objA.b);
// console.log(objA);

// console.log(objA.c);
// // console.log(objC.a);

// console.log(objC);
// objC.c = 55;

// console.log(objA.c);

// console.log((objA.b = 66));
// console.log(objA);
// console.log(objB);

// console.log(objA.hasOwnProperty(constructor));
// console.log(objA.propertyIsEnumerable);

//class

const Car = function ({ brand, model, price } = {}) {
  this.brand = brand;
  this.model = model;
  this.price = price;
};

const myCar = new Car({
  brand: "Audi",
  model: "Q3",
  price: 3500,
});

const myCar2 = new Car({
  brand: "BMW",
  model: "X6",
  price: 13500,
});

console.log(myCar);
console.log(myCar2);

// class User {
//   constructor(nameUser, emailUser) {
//     this.name = nameUser;
//     this.email = emailUser;
//   }
// }

// const user = new User("Mango", "postuser@gmail.com");
// console.log(user);

// const user2 = new User("Poly", "userpoly@gmail.com");
// console.log(user2);

Car.prototype.discountPrice = function (discount) {
  return (this.price = this.price * discount);
};

myCar2.discountPrice(1.2);
console.log(myCar2);

Car.prototype.newBrand = function (newBrandCar, newModel) {
  this.brand = newBrandCar;
  this.model = newModel;
};

myCar.newBrand("Volvo", "T90");
console.log(myCar);

const myCar3 = {
  __proto__: myCar,
  // __proto__: myCar2,
};

console.log(myCar3);
const objKeys = Object.keys(myCar);
console.log(objKeys);
console.log(Object.values(myCar));
