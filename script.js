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

/* let number = prompt("Введите 5-значное число:");
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
document.write("Среднее арифметическое: " + Arithmetic); */

/* console.log(5 > 3);
console.log(5 < 3);
console.log(3 == 3);
console.log(3 != 3);
console.log(5 >= 3);
console.log(5 <= 3);
console.log(3 == `3`); */

/* 
let a = 10;
console.log(a);

a += 5;
console.log(a);


a -= 3;
console.log(a);
 */

/* let a = +prompt(`Ведите 1 число:`, 5);
let b = +prompt(`Ведите 2 число:`, 4);
let c = +prompt(`Ведите 3 число:`, 6);

let sum = a + b + c;
alert(`Сумма чисел: ` + sum); */
/* 
let sum = +prompt(`Ведите 1 число:`, 5);
sum += +prompt(`Ведите 2 число:`, 4);
sum += +prompt(`Ведите 3 число:`, 6);

alert(`Сумма чисел: ` + sum); */

// 7 > 3 ? alert(`7`) : alert(`3`);
// 3 > 7 ? alert(`7`) : alert(`3`);

/* let age = prompt(`Введите возраст`);
age >= 18 ? alert(`Совершеннолетний`) : alert(`Несовершеннолетний`); */

/* let ch = prompt(`Угадайте число от 1 до 10`);
let num = 7;
// ch == num ? alert(`Угадали!`) : alert(`Не угадали!`);
ch == num ? alert(`Угадали!`) : ch < num ? alert(`Загададанное число больше`) : alert(`Загаданное число меньше`); */

/* let temp = prompt(`Ведите температура`);
let res = temp > 30 ? `Очень жарко`
: temp > 20 ? `Тепло`
: temp > 10 ? `Прохладно`
: temp > 0 ? `Холодно`
: `Очень холодно`; 


alert(res); */

/* let a = 12;
let b = 0;

if(b != 0) {
let res = a / b;
alert(`Результат: ` + res);
}
else{
    alert(`Делить на \'0\' нельзя`);
} */

/* let value = prompt(`Введите число: `);

if (value % 2 == 1) {
    alert(`Число нечетное`);
}
else {
    alert(`Число четное`);
} */

/* let a = 5;

if(a){
    console.log(`TRUE`);    
}
else{
    console.log(`FALSE`);    
} */

/* let a = 112;
let b = 12;
if (a > b) {
    alert(a + " > " + b);
}
if (a < b) {
    alert(a + " < " + b);
}
if (a == b) {
    alert(a + " == " + b);
} */

/* let day = prompt(`День недели (цифрами): `);
if (day == 1) {
    alert(`День недели - Понедельник`);
} else if (day == 2) {
    alert(`День недели - Вторник`);
} else if (day == 3) {
    alert(`День недели - Среда`);
} else if (day == 4) {
    alert(`День недели - Четверг`);
} else if (day == 5) {
    alert(`День недели - Пятница`);
} else if (day == 6) {
    alert(`День недели - Суббота`);
} else if (day == 7) {
    alert(`День недели - Воскресенье`);
} else {
    alert(`Нету`);
} */


/* let login = prompt(`login: `, `admin`);
if (login) {
    if (login == `admin`) {
        let psw = prompt(`password`, `password`);
        if (psw) {
            if (psw == `password`) {
                alert(`Wellcome`);
            } else {
                alert(`Danger`)
            }
        } else {
            alert(`cansel`)
        }
    }
    else {
        alert(`Я вас не знаю`);
    }
} else {
    alert(`Cansel`);
} */

/* if (5 == 5 && 5 > 2) {
    console.log(`TRUE`);
} else {
    console.log(`FALSE`);
} */

/* if (5 == 2 && 5 > 2) {
    console.log(`TRUE`);
} else {
    console.log(`FALSE`);
} */

/* console.log(!true);
console.log(!false);
console.log(!5);
console.log(!`Hello`);
console.log(!``);
console.log(!0); */


/* let trg1 = prompt('Введите первую сторону: ', 10);
let trg2 = prompt('Введите вторую сторону: ', 20);
let trg3 = prompt('Введите третью сторону: ', 20);
 
if(trg1 === trg2 && trg2 === trg3) {
  console.log('Треугольник равносторонний');
} else if (trg1 === trg2 || trg2 === trg3 ||trg3 === trg1) {
  console.log('Треугольник равнобедренный');
} else {
  console.log('Треугольник разносторонний');
} */
/* 
let ch = prompt(`Введите количество ворон`, 5);

if (ch >= 0 && ch <= 9) {
    if (ch == 1) {
        alert(`На ветке ${ch} ворона`);
    } else if (ch >= 2 && ch <= 4) {
        alert(`На ветке ${ch} вороны`);
    } else {
        alert(`На ветке ${ch} ворон`);
    }
} else {
    alert(`Недопустимое значение`);
} */

let num = prompt(`Введите число от 1 до 99`, 25);

if (num >= 1 && num <= 99) {
    let last = num % 10;
    let lastTwo = num % 100;

    if (lastTwo >= 11 && lastTwo <= 19) {
        alert(num + ` копеек`);
    } else if (last == 1) {
        alert(num + ` копейка`);
    } else if(last >= 2 && last <= 4) {
        alert(num + ` копейки`);
    } else {
        alert(num + ` копеек`);
    }
} else {
    alert(`Недопустимое значение`)
}

