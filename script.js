/* let message = "Третий скрипт";
console.log(message)

let a = 10;
console.log(a + 3);

let b;
b = 5;
console.log(b);
b = "hello";
console.log(b);

let name = "Игорь";
let camelCase = "";
let snake_case = "";
console.log(name); */

// const b = 5;
// console.log(b);
// b = "hello";
// console.log(b);
/* 
let a = "hello";
console.log(a, typeof(a));
let b = 'world';
console.log(b, typeof(b));
let c = `Обратные кавычки`;
console.log(c, typeof(c)); */

/* let firstName = "Sergey"
alert(`hello, ${firstName}`); */


/* let day = 365;
let planeta = "Земля";
let people = "7 млрд";
let star = "Солнца";


alert (message = "Мы живем на планете " + planeta + ", она делает один оборот вокруг " + star + " за " + day + " дней. Население нашей планеты составляет примерно " + people + " человек.");
console.log(message); */
/* let a = true;
console.log(a); */


/* let res = confirm("Знаете HTML?");
console.log(res);
if(res){
    alert("Пора учить Ява скрипт");
}
else{
    alert("Нужно выучить")
} */


/* let name = prompt("Ваше Имя?", "Богдан");
console.log(name); */

/* let a = 12;
let b = 8;

console.log("+:", a + b);
console.log("-:", a - b);
console.log("*:", a * b);
console.log("/:", a / b);
console.log("**:", a ** 2);
console.log("%:", a % b); */

/* let c = 23;
let d = 6;

console.log(c + d);

let a = "Hello";
let b = "World";
console.log(a + b);
 */

/* let c = 23;
let d = "6";

console.log(c + d); */

/* let login = prompt("Login", "Admin");
let password = prompt("Password", "qwerty");
alert("***Данные для ввода**\nВаш логин: "  + login + "\nВаш пароль: "  + password + "  \nДокумент \"Script.js\"); */

/* let a = prompt("Введите первое число", 10);
let b = prompt("Введите второе чило", 5);
console.log(a + b); */

/* console.log(parseInt("21.84"));
console.log(parseFloat("21.84"));
console.log(Number("21.84"));

console.log(parseFloat("21.841223"). toFixed(3));

console.log(+"21.84");
console.log(+true);
console.log(+false); */

/* let num = 4321;
let one, two, three, four;

console.log(num);
one = num % 10;
console.log(one); */

let number = prompt("Введите 5-значное число:");
let num = parseInt(number);

let figure1 = parseInt(num / 10000) % 10;
let figure2 = parseInt(num / 1000) % 10;
let figure3 = parseInt(num / 100) % 10;
let figure4 = parseInt(num / 10) % 10;
let figure5 = num % 10;

let product = figure1 * figure2 * figure3 * figure4 * figure5;
let sum = figure1 + figure2 + figure3 + figure4 + figure5;
let Arithmetic = sum / 5;


document.write("Произведение цифр: " + product + "<br>");
document.write("Среднее арифметическое: " + Arithmetic);
