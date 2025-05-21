// let userName = "data";
// `data ` | `hello $(userName)`;
// console.log(typeof userName);

// let age = 30;

// console.log(typeof age);

// let isStudent = false;

// console.log(typeof isStudent);
// გამონაკლისია (null,undefined)

// ობიექტი-ს სახელი
// key/value
// let user1 = {
//   id: 1234,
//   userName: "data",
//   isStudent: false,
//   Email: "kvarelashvilid@gmail.com",
//   recoverEmail: null,
//   address: {
//     country: "georgia",
//     city: "tbilisi",
//     homeid: 18,
//     street: "rustaveli",
//   },
// };
// console.log(user1.address.country);
// let userArray = ["data", 10, false, "kvarelashvilid@gmail.com"];

// userArray.pop();
// userArray.shift();
// userArray.push;

// console.log(userArray);

// console.log(userArray);
// let keyword = "userName";

// console.log(user1["address"].city);
// let user2 = {
//   id: 1234567,
//   userName: "soso",
//   isStudent: true,
//   Email: "kvarelashvilid1999@gmail.com",
//   recoverEmail: "kvarelashvili18@gmail.com",
//   address: {
//     country: "georgia",
//     city: "tbilisi",
//   },
// };
// console.log(obj.userName);
// console.log(obj.id);
// console.log(obj.isStudent);
// console.log(obj.Email);
// console.log(obj.recoverEmail);

// ამოცანა| შევქმნათ ცვლადი და მივანიჭოთ გრადუსის რცხვი
// თუ გრადუსი აღემატება 30-ს:"ცხელა მზიანი ამინდია"
// თუ გრადუსი ნაკლებია 0ზე:"ცივა ცუდი ამინდია"
// თუ გრადუსი ნაკლებია 1 დან-30მდე:"ნორმალური ამინდია"

let themp = 33;

let hotWeather = 30;
let coldWeather = 0;

if (themp > 30) {
  console.log("ცხელა მზიანი ამინდია");
} else if (themp < 0) {
  console.log("ცივა ცუდი ამინდია");
} else if (themp >= 1 && themp < 30) {
  console.log("ნორმალური ტემპერატურაა");
} else {
  console.log("დაფიქსირდა შეცდომა");
}
