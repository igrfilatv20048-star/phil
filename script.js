
"use strict";
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

// let num = prompt(`Введите число от 1 до 99`, 25);

/* if (num >= 1 && num <= 99) {
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
} */

/* let a = +prompt("Введите число: ");
switch (a) {
    case 1:
        alert("Код 1");
        break;
    case 2:
        alert("Код 2");
        break;
    case 3:
        alert("Код 3");
        break;
    default:
        alert("Я таких значений не знаю");
} */

/* let a = +prompt("Введите результат '2 + 2': ");
switch (a) {
    case 3:
        alert("Не Верно");
        break;
    case 4:
        alert("Верно");
        break;

    case 5:
        alert("Не Верно");
        break;
    default:
        alert("Я таких значений не знаю");
}
 */

/* let day = "Воскресенье";

switch (day) {
    case "Суббота":
    case "Воскресенье":
        alert("Это выходной день");
        break;
    case "Понедельник":
    case "Вторник":
    case "Среда":
    case "Четверг":
    case "Пятница":
        alert("Это рабочий день");
        break;
        default:
            alert("Такого дня недели не существует");
} */


/*  let m = +prompt("Введите номер месяца");
 let n;
 switch(m){
    case 1: n = "Январь"; break;
    case 2: n = "Февраль"; break;
    case 3: n = "Март"; break;
    case 4: n = "Апрель"; break;
    case 5: n = "Май"; break;
    case 6: n = "Июнь"; break;
    case 7: n = "Июль"; break;
    case 8: n = "Август"; break;
    case 9: n = "Сентябрь"; break;
    case 10: n = "Октябрь"; break;
    case 11: n = "Ноябрь"; break;
    case 12: n = "Декабрь"; break;
    default: n = "Не правильный номер месяца";
 }
 alert("Вы ввели: " + n); */

/*  document.writeln("<p>Текст выведен <b>в окно браузера</b></p>");
 document.writeln("<p><img src='1.jpg'></p>"); */

/*  let i = 0;
 do{
    document.writeln("Это номер: " + i + "<br>");
    i++;
 } while(i <= 5); */

/*   let i = 5;
 do{
    document.writeln("Это номер: " + i + "<br>");
    i--;
 } while(i > 0); */

/* let i = 0;
do {
    document.writeln("Это номер: " + i + "<br>");
    i += 5;
} while (i < 25); */

/* let i = -1;
do {
    document.writeln("Квадрат " + ++i + " равен " + i ** 2 + "<br>");
    // i++;
} while (i < 7); */

/* let i = 0;
while(i<5){
    document.writeln("Это номер: " + i + "<br>");
    i++;
} */

/* let i = 1;
while(i <= 30){
    if(i % 3 != 0){
    document.writeln(i + " ");
    }
    i++;
} */

/* let start = 5;
let end = 10;
let i = start;
let sum = 0;
while(i <= end){
    sum += i;
    i++;
}
document.writeln(sum); */

/* let start = 5;
let end = 10;


let sum = 0;
while(start <= end){
    sum += start;
    start++;
}
document.writeln(sum); */

/* let start = +prompt("chislo");
let end = +prompt("chislo2");


let sum = 0;
while(start <= end){
    sum += start;
    start++;
}
document.writeln(sum); */
/* 
let i = 3;
while(i){
    document.writeln(i + "<br>");
    i--;
} */

/* let num, pr = 1;
do {
    num = prompt("choslo", 10);
    if(num == 0){
        break;
    }
    pr *= num;
} while (true);
alert("proizveden: " + pr); */
/* 
let i = 0;
while (i < 10) {
    if(i == 3){
        i++;
        continue;
    }
    if(i == 6){
        break;
    }
    document.writeln("nomer: " + i + "<br>");
    i++
} */

/* for (let i = 0; i < 12; i++) {
    if(i == 3){
        continue;
    }
    if(i == 6){
        break;
    }
    document.writeln("nomer: " + i + "<br>");
} */

/* 
let n = prompt("n =");
let sum = 0;
let count = 0;

for (let i = 0; i < n; i++) {
   let num = +prompt("--> ", 10);
    sum += num;
    if(num != 0){
        count++;
    }
}
document.writeln(sum / count);
 */


/* for(let i = 0; i < 7; i++){
    document.writeln(i + "<br>")
} */


/* for( let i = 0; i < 5; i++){
    document.writeln(i + "<br>")
}
document.writeln("i = " + i); */

/* let a = 5;
if(a == 5){
    let b = 10;
    console.log(b);
    
} */


/* let sum = 0;
for (let i = 5; i <= 30; i++) {
    if (i % 3 == 0) {
        sum += i;
        console.log(i);
    }
}
document.writeln(sum); */

/* let count = prompt("stars");
for(let i = 0; i < count; i++){
    document.writeln("*");
} */

/* let count = prompt("Введите количество символов");
let sim = prompt("Введите тип символа");
let or = prompt("0 - горизонтально, 1 - Вертикально");

for(let i = 0; i < count; i++) {
    if(or == 0) {
        document.writeln(sim);
    }
    else {
        document.writeln(sim + "<br>");
    }
} */

/* for(let i = 0; i < 4; i++){
    document.writeln("+++ " + i + "<br>");
    for(let j = 0; j < 2; j++){
        document.writeln("----------" + j + "<br>");
    }
} */

/* let tr = prompt("stroki");
let td = prompt("stolbec");
let symbol = prompt("simvol");
document.writeln("<table border='1'>");
for(let i = 0; i < tr; i++){
    document.writeln("<tr>");
    for(let j = 0; j < td; j++){
        document.writeln("<td>"+ symbol +"</td>");
    }
    document.writeln("</tr>");
}
document.writeln("</table>"); */

/* document.writeln("<table border='1'>");
for (let i = 1; i < 11; i++) {
    document.writeln("<tr>");
    for (let j = 1; j < 11; j++) {
        if ((i + j) % 2 == 0) {
            document.writeln("<td bgcolor='red'>" + i * j + "</td>");
        } else {
            document.writeln("<td bgcolor='yellow'>" + i * j + "</td>");
        }

    }
    document.writeln("</tr>");
}
document.writeln("</table>"); */

/* x = 5;
y = 2;
z = 8; */

/* let coords = [5, 2, 8];

console.log(coords);
console.log(coords [1]);
console.log(coords [2]);
console.log(coords [0]);
 */

/* let arr1 = new Array(2,6,8);
console.log(arr1);

let arr2 = [2, 6, 8];
console.log(arr2); */

/* let arr1 = new Array(5);
console.log(arr1);

let arr2 = [5];
console.log(arr2); */

/* let arr = [1, 2, 3, 4, 5, 6];
console.log(arr);
console.log(arr.length);
arr.length = 3;
document.writeln(arr); */

// length = последний индекс массива +1

/* let arr = [5, 9, -3, -1, 4, -8, 7, 2, 6];
for( let i = 0; i < arr.length; i++){
    document.writeln(arr[i] ** 2 + "<br>");
} */

/* let arr = [5, 9, -3, -1, 4, -8, 7, 2, 6];
for( let i = 0; i < arr.length; i++){
    if(arr[i] < 0){
        arr[i] = arr[i] * -1;
    }
    document.writeln(arr[i] ** 2 + "<br>");
} */

/* 
let arr = [5, 9, -3, -1, 4, -8, 7, 2, 6];
let sum = 0;


for( let i = 0; i < arr.length; i++){
    document.writeln(arr[i] ** 2 + "<br>");

    if(arr[i] <0){
        sum += arr[i];
    }
}

document.writeln("summa: " + sum); */
/* 
let arr = new Array();
arr[0] = 15;
arr[1] = 6;
arr[2] = 9;
arr[3] = 4;
console.log(arr);

arr[10] = 59;
console.log(arr);

console.log(arr)[20];
 */

/* let mas = new Array(5);
for( let i = 0; i < mas.length; i++) {
    mas[i] = prompt("Massiv " + (i + 1) + " Element")
}
console.log(mas);
for( let i = mas.length - 1; i >= 0; i--){
    document.writeln(mas[i] + " ");

} */

/* let n = prompt("Massiv");
let mas = []

for (let i = 0; i < n; i++) {
    if (n > 5) {
        mas[i] = 0;
    } else {
        mas[i] = +prompt("-> ");
    }
}
for( let i = 0; i < n; i++){
    document.writeln(mas[i] + " ");
}
 */
/* 
let arr = [2, 4, 5, "Igor", 1.5, true];
console.log(arr);
 */

/* let mas = [[2,1,1], [6,3,7], [8,5,6]];
// console.log(mas.length);
// console.log(mas[1][2]);
// console.table(mas);

// document.writeln(mas);

for(let i = 0; i < mas.length; i++){
    for(let j = 0; j < mas[i].length; j++) {
document.writeln(mas[i][j] + "&nbsp;");
    }
    document.writeln("<br>")
}
 */
/* 
let questions = ["На ноль делить можно?", "Волга впадает в Каспийское море?", "Атмосферное давление увеличивается с высотой", "2 x 2 будет 8?", "Дельфин - это рыба?", "Мадонна - это настоящее имя певицы", "Первая мировая война началась 1 сентября 1939 года"];

let correctAnswers = [false, true, false, false, false, false, false];

let res = new Array();
let sum = 0;

for( let i = 0; i < questions.length; i++){
   let answer = confirm(questions[i]);
   if(answer == correctAnswers[i]) {
    res[i] = 10;
    sum += res[i];
   } else{
    res[i] = 0;
   }
}

console.log(res);
console.log(sum);

document.writeln("<table border='1' width='500'>");

document.writeln("<tr>");
document.writeln("<th>ASK</th>");
document.writeln("<th>BALLI</th>");
document.writeln("</tr>");

for(let i = 0; i < questions.length; i++){
    document.writeln("<tr>");
    document.writeln("<td>" + questions[i] + "</td>");
    document.writeln("<td>" + res[i] + "</td>");

    document.writeln("</tr>");
}

document.writeln("<tr>");
document.writeln("<th>ITOG</th>");
document.writeln("<th>" + sum + "</th>");
document.writeln("</tr>");

document.writeln("</table>");

 */

/* let arr = [1, 2, 3, 4, 5];

for (let elem of arr) {
    console.log(elem ** 2);

} */
/* 
let text1 = document.getElementById("text_1");
console.log(text1);
console.log(text1.textContent);

text1.textContent = "New List";

let text2 = document.getElementById("text_2");
text2.innerHTML = "List New с <b> html </b>"; */

/* let res = +prompt("Выбериизображение", "1-dog, 2-cat, 3-ptica, 4-fish");

document.writeln("<div id='image'></div>");
let img = document.getElementById("image");

switch (res) {
    case 1:
        img.innerHTML = "<img src='img/dog.jpg'>";
        break;
    case 2:
        img.innerHTML = "<img src='img/cat.jpg'>";
        break; 
    case 3:
        img.innerHTML = "<img src='img/bird.jpeg'>";
        break;
    case 4:
        img.innerHTML = "<img src='img/4fish.jpeg'>";
        break; 
        default:
            alert("Not6");
} */
/* 
let tag = document.getElementsByTagName("p")[2];
console.log(tag);
tag.innerHTML = "hello <u>tag</u>";
tag.style.color = "blue";
tag.style.fontWeight = "bold"; */

/* document.writeln(Math.floor(7.9) + "<br>");
document.writeln(Math.ceil(7.1) + "<br>");
document.writeln(Math.round(7.4) + "<br>");
 */
/* 
(function (min, max) {
    document.writeln(Math.floor(Math.random() * (max - min) + min) + "<br>");
})(2, 9);

document.writeln(Math.floor(Math.random() * 9) + "<br>"); */

/* 
let randMas = function(arr){
    // return arr[Math.floor(Math.random() * mas.length)];
    return arr[parseInt(Math.random() * mas.length)];
}
let mas = ["circle", "Massiv", "Yslovie", "function"];
document.writeln(randMas(mas)); */

/* document.writeln("<div id='block'></div>");
let id = document.getElementById("block");

id.style.width = "100px";
id.style.height = "100px";



function createColor() {
    let r = Math.floor(Math.random() * 256);
    let g = Math.floor(Math.random() * 256);
    let b = Math.floor(Math.random() * 256);
    id.style.background = "rgb(" + r + "," + g + "," + b + ")";
} */


/* document.writeln("<div id='block'></div>");
        let id = document.getElementById("block");

        id.style.width = "100px";
        id.style.height = "100px";
      
        function createColor() {
            let r = Math.floor(Math.random() * 256);
            let g = Math.floor(Math.random() * 256);
            let b = Math.floor(Math.random() * 256);
            id.style.background = "rgb(" + r + "," + g + "," + b + ")";
        } */

/* let tag = document.getElementsByTagName("p")[2];
console.log(tag);
tag.innerHTML = "hello <u>tag</u>";
tag.style.color = "blue";
tag.style.fontWeight = "bold"; 

tag.style.backgroundColor = "silver";
tag.style.padding = "10px 20px";

tag.id = "test";
tag.className = "x";
 */
/* 
let cl = document.getElementsByClassName("a");
console.log(cl);
cl[0].style.color = "red";
cl[1].style.color = "blue";

 */
// document.querySelector(css);
// document.querySelectorAll(css);
/* 
let el = document.querySelector("h2");
el.style.backgroundColor = "red";
console.log(el);
 */
/* let els = document.querySelectorAll("h2");
console.log(els[1]);
 *//* 
let els = document.querySelector("#purp");
console.log(els);
els.style.backgroundColor = "yellow";
*/
/* 
let lists = document.querySelectorAll("li");
// console.log(lists);
// console.log(lists.length);

for (let i = 0; i < lists.length; i++) {
    lists[i].innerHTML += "!!!";
}

let purple = document.querySelectorAll(".purple li");
console.log(purple);
for (let i = 0; i < purple.length; i++) {
    purple[i].style.color = "purple";
}

let title = document.querySelector("h1 + h2");
title.style.color = "red";

// let m = document.querySelectorAll(".red li")[1];
let m = document.getElementsByClassName("red")[0].getElementsByTagName("li")[1];
m.style.background = "orange";
*//* 

let el = document.querySelector(".elem");

// console.log(el.closest(".content"));
console.log(el.closest(".container"));
  */
/* 
document.writeln("<div id='divSample'></div>");
let div = document.querySelector("#divSample");
console.log(div);

div.textContent = `Дюбель —конструктивный элемент, который используется для укрепления винта или предмета на

стене, на потолке или на полу в помещении или под открытым небом в различных материалах

(бетон, кирпич и прочее). Сам дюбель удерживается в конструкции при помощи сил трения. С

некоторого времени элементы связи и укрепления, дюбели и винт (шуруп) объединяют в одно

целое и используются, прежде всего, для тяжёлых нагрузок. Дюбели предлагаются в различных

величинах, которые руководствуются диаметром дюбеля (и соответственно необходимым

отверстием), измеренным в миллиметрах.
 `;
 div.style.background = "#f0f";
 div.style.color = "#99ffff";
 div.style.width = "50%";
 div.style.outline = "10px dotted #000";
 div.className = "resetFont";

 let cl = document.querySelector(".resetFont");
 cl.style.fontSize = "12pt";
 cl.style.fontWeight = "bold";
 cl.style.textDecoration = "line-through";

 */

// document.writeln("<div id='demonstration'></div>");
// let div = document.querySelector("#demonstration");

// div.textContent = `Термоста́т — прибор для поддержания постоянной температуры. Поддержание температуры
// обеспечивается либо за счёт использования терморегуляторов, либо осуществлением фазового
// перехода (например, таяние льда). Для уменьшения потерь тепла или холода термостаты, как
// правило, теплоизолируют. Но не всегда. Широко известны автомобильные моторы, где летом нет
// никакой теплоизоляции и за счёт действия восковых термостатов поддерживается постоянная
// температура. Другим примером термостата, широко используемого в быту, является холодильник.`;

// div.style.background = "yellow";
// div.style.color = "black";
// div.style.width = "256px";
// div.style.height = "256px";
// div.style.overflow = "scroll";
// div.style.outline = "1px dashed red";

// div.className = "resetFont";

// let cl = document.querySelector(".resetFont");
// cl.style.fontSize = "20pt";
// cl.style.fontWeight = "400";
// cl.style.textDecoration = "underline";

/* let title = document.querySelector("h1");
title.style.color = "red"; */
/* 
let js = [" нужно ", " учить ", " JavaScript "];
document.writeln(js);

console.log(js);
console.log(js.pop());
console.log(js);

js.push("JavaScript", "!");
console.log(js);

console.log(js.shift());
console.log(js);

js.unshift("Почему", "Нужно");

let arr = js.slice(1, 3);
console.log(arr);

console.log(js.slice(1));

// console.log(js.toSpliced(1, 2));

// delete js[1];
// console.log(js);

js.splice(1, 1);
console.log(js);

js.splice(0, 2, "МЫ", "Изучаем");
console.log(js);

js.splice(2, 0, "Сложный", "язык");
console.log(js);

js.splice(-2, 0, "Но", "Очень", "Интересный");
console.log(js);

let index = js.indexOf("Сложный");
console.log(index);
 */
/* 
let people = ["Tom", "Bob", ["Alice", "Kate", ["Sam", "Ann"]]];
console.log(people);
let arr = people.flat(2);
console.log(arr);
 */
/* 
let a = [1, 2];
let b = a.concat(3, 4);
console.log(b);
let c = ['a', 'b', 'c'];
let num = a.concat(b, c);
console.log(num);

 */
/* 
let users = ["Tom", "Bob", "Alice", "Kate", "Sam", "Ann"];
console.log(users.sort()); */
/* 
let n = [1, 5, 15, 2];
n.sort((a, b) => a - b);
console.log(n);
 */

/* function hello(name) {
    document.writeln("Hello, " + name + " <br>")
}

hello();
hello("Igor"); */
/* 
function test(a, b, c) {
    let sum = a + b + c;
   return sum;

}
let n1 = 10, n2 = 20, n3 = 30;
let res = test(n1, n2, n3);
console.log(res);
// let m1 = 1, m2 = 2, m3 = 3;
// test(m1, m2, m3); */

/* function max(n, m) {
    if(n > m) {
        document.writeln("Большее число: " + n + "<br>");
    }
    if(m > n){
        document.writeln("Большее число: " + m + "<br>");
    }
    if (n == m) {
        document.writeln("Числа равны");
    }
}

max(5, 2);
max(2, 5);
max(5, 5); */
/* 
function showArrayContent(arrayToShow) {
    if (arrayToShow.length == 1) {
        return arrayToShow;
    } else {
        let last = arrayToShow.pop();
        let str = arrayToShow.join(", ");
        let res = str + " и " + last;
        return res;
    }
}

let a = new Array('Текст');
let b = new Array('день', 'ночь');
let c = new Array('зима', 'весна', 'лета', 'осень');
alert(showArrayContent(a));
alert(showArrayContent(b));
alert(showArrayContent(c));
 */
/* 
function sum1(a, b){
    return a + b;
}

console.log(sum1(2, 3));

let sum2 = function(a, b){
      return a + b;
}

console.log(sum2(20, 30));
 */

/* let average = function (arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    return (sum / arr.length).toFixed(2);
}

document.writeln(average([3, 8, 9, 4, 1, 2, 5]) + "<br>");
document.writeln(average([8, 2, 4]) + "<br>");
 */

/* let max = function(arr){
    let mx = arr[0];
    for(let i = 1; i < arr.length; i++){
        if(mx < arr[i]){
            mx = arr[i];
        }
    }
    return mx;
}

document.writeln(max([2, 8, 4]) + "<br>");
document.writeln(max([3, 8, 9, 4, 1, 2, 5]) + "<br>");
 */

/* (function () {
    alert("hello");
}());

(function(n){
    alert(n * n);
})(4); */
/* 
function test(a, b, c) {
    let res = a + b + c;
    return res;
}

alert(test(10, 20, 30));

let test2 = (a, b, c) => a + b + c;
alert(test2(1, 2, 3));

let test3 = (a, b, c) => {
    let res = a + b + c;
    return res;
}
alert(test3(100, 200, 300)); */

/* let hello = (name) => alert("Hello, " + name);

hello("Igor"); */

/* let change = lst => {
    let last = lst.pop();
    let first = lst.shift();
    lst.push(first);
    lst.unshift(last);
    return lst;
} */
/* let change = lst => {
    let temp = lst[lst.length - 1];
    lst[lst.length -1] = lst[0];
    lst[0] temp
    return lst;
}
document.writeln(change([1, 2, 3]) + "<br>");
document.writeln(change([9, 12, 33, 54, 105]) + "<br>");
document.writeln(change(["c", "l", "o", "n"]) + "<br>"); */

/* let test = (x, y) => x > y ? true : false;

console.log(test(10, 5));

if (test(10, 5)) {
    console.log("Pervoe");
} else {
    console.log("Vtoroe");
} */

/* let checkPassword = password => {
    let hasUpper = false;
    let hasLower = false;
    let hasNum = false;

    for (let ch of password) {
        if ("A" <= ch && ch <= "Z") {
            hasUpper = true;
        }
        if ("a" <= ch && ch <= "z") {
            hasLower = true;
        }
         if ("1" <= ch && ch <= "9") {
            hasNum = true;
        }
    }

    if (password.length >= 8 && hasUpper && hasLower && hasNum) {
        return true;
    }
    return false;
}
let psw = prompt("password");
if (checkPassword(psw)) {
    document.writeln("✅");
} else {
    document.writeln("❌");
} */

/* function getNames() {
    let firstName = "Igor";
    let lastName = "Philatov";
    return [firstName, lastName];
}

let names = getNames();

console.log(names);
// /* console.log(surname);
// let surname = names[1]; */
// let [name1, surname] = getNames();
// console.log(name1, surname); 


/* function isOdd(number) {
    return number % 2;
}

function isEven(number){
    return number % 2 == 0;
}

function filter(numbers, fn) {
    let results = [];
    for (let number of numbers) {
        if (fn (number)){
            results.push(number);
        }
    }

    return results;
} */

// let num = [1, 2, 4, 7, 3, 5, 6];
// console.log(filter(num, isOdd));
// console.log(filter(num, isEven));

/* function filter(numbers, fn) {
    let results = [];
    for (let number of numbers) {
        if (fn(number)) {
            results.push(number);
        }
    }

    return results;
}
let num = [1, 2, 4, 7, 3, 5, 6];

let isOdd = filter(num, function (number) {
    return number % 2;
});

let isEven = filter(num, number => number % 2 == 0);

console.log(isOdd);
console.log(isEven);
 */

/* let numbers = [1, 2, 3, 4, 5, 6];

numbers.forEach(function(n){
document.writeln("Квадрат числа " + n + " равен: " + n * n + "<br>");
});

numbers.forEach(n => document.writeln("Квадрат числа " + n + " равен: " + n * n + "<br>"));

 */

// ["Hello", "World"].forEach(alert);
/* ["Hello", "World"].forEach((item, index, array) => {
    alert(`${item} Индекс ${index} в ${array}`);
}); */

/* let number = [1, 2, 3, 4, 5, 6];

let squeres = number.map(n => n * n);
console.log(squeres);

console.log(["Hello", "World", "!"].map(item => item.length)); */

/* function line(length, sim1, sim2){
    let res = "";
    for(let i = 0; i < length; i++){
        if(i % 2 == 0) {
            res = res + sim1;
        } else {
            res = res + sim2;
        }
    }
    document.writeln(res + "<br>");
}

line(9, "+", "-");
line(9, "X", "O"); */

/* document.writeln(Math.floor(7.9) + "<br>");
document.writeln(Math.ceil(7.1) + "<br>");
document.writeln(Math.round(7.1) + "<br>"); */

/* (function (min, max) {
    document.writeln(Math.floor(Math.random() * (max - min) + min) + "<br>");
})(2, 9);

document.writeln(Math.floor(Math.random() * 9) + "<br>");

document.writeln(Math.floor(Math.random() * 7 + 2) + "<br>"); */

/* let randMas = function(arr){
    return arr[Math.floor(Math.random() * arr.length)];
    return arr[parseInt(Math.random() * arr.length)];
}

let mas = ["цикл", "массив", "условие", "функция", "Переменная"];
document.writeln(randMas(mas));


console.log(Math.floor(8.9));
console.log(parseInt(8.9)); */

/* document.writeln("<div id='block'></div>");
let id = document.getElementById("block");

id.style.width = "100px";
id.style.height = "100px";
creatColor();


function creatColor(){
    let r = Math.floor(Math.random() * 256);
    let g = Math.floor(Math.random() * 256);
    let b = Math.floor(Math.random() * 256);
    // id.style.background = "rgb("+ r +","+ g +","+ b +")";
    id.style.background = `rgb(${r},${g},${b})`;
} */



/* document.writeln("<div id='block'></div>");
let id = document.getElementById("block");

id.style.width = "100px";
id.style.height = "100px";
// id.style.background = "rgb(" + creatColor() + "," + creatColor() + "," + creatColor() + ")";
id.style.background = `rgb(${creatColor()},${creatColor()},${creatColor()})`;

function creatColor() {
    return Math.floor(Math.random() * 256);
} */

/* function creatColor() {
    return Math.floor(Math.random() * 256);
}

let months = ["Январь", "Февраль", "Март", "Апрель", "Май", "Июнь",
    "Июль", "Август", "Сентябрь", "Октябрь", "Ноябрь", "Декабрь"];

for (let i = 0; i < months.length; i++) {
    document.writeln("<div>" + months[i] + "</div>");
}

let block = document.getElementsByTagName("div");
for (let i = 0; i < block.length; i++) {
    let r = creatColor();
    let b = creatColor();
    let g = creatColor();
    block[i].style.width = "200px";
    block[i].style.height = "20px";
    block[i].style.textAlign = "center";
    block[i].style.background = "rgb(" + r + "," + g + "," + b + ")";
} */

/* function fn(a, b, ...args) {
    console.log("a=" + a + ", b=" + b, "args=", args);

}
fn(1, 2, 3, "A", "B", "C"); */

/* function sum(...args) {
    let total = 0;
    for(let a of args){
        total += a;
    }
    return total;
}
console.log(sum(1, 2, 3));
console.log(sum(5, 7, 9, 8, 2, 3)); */


/* function hello(name) {
    name = name || "XZ";
    document.writeln("Hello, " + name + "!<br>");
}
hello("Igor");
hello(); */

// function hello(name = "XZ") {
//     document.writeln("Hello, " + name + "!<br>");
// }
// hello("Igor");
// hello();

/* function rect(w, h, fon="green"){
document.writeln("<div id ='shape'></div>");
let shape = document.getElementById("shape");

shape.style.width = w + "px";
shape.style.height = h + "px";
shape.style.background = fon;
}
rect(150, 50, "gold"); */

/* let a = 5;
if(a > 0){
    let b = 2;
    console.log(b);
    
} */

/* let j = 2;

function ch() {
    let i = 5;
    console.log(i);
    }
ch();
console.log(j); */

/* function aquer (num){
    return num * num;
}
function func(num1, num2){
    return num1 * num1 + num2 * num2;
}
console.log(func(2, 3)); */

/* function test(city){
    let num = 0;
    return function(){
        num++;
        console.log(city, num);
    }
}

let func1 = test("Moscow");
func1();
func1();
func1();

let func2 = test("Sochi");
func2();
func2();

func1(); */
/* 
let str = "I\'m a JavaScript \"programmer\"";
document.writeln(str + "<br>");
// document.writeln(str[2] + "<br>");

let style = prompt("CSS", "background-color");
alert(def(style));

function def(str) {
    let arr = str.split("-");

    for (let i = 1; i < arr.length; i++) {
        arr[i] = arr[i].at(0).toUpperCase() + arr[i].slice(1);
    }
    return arr.join("");
} */
/* 
let hello =  "    Hello World    ";
console.log(">" + hello + "<");
console.log(hello.length);
let newHello = hello.trim();
console.log(">" + newHello + "<");
console.log(newHello.length); */

/* document.writeln("hello" > "Hello" + "<br>");

document.writeln("hello".codePointAt() + "<br>");
document.writeln("Hello".codePointAt() + "<br>");

document.writeln(String.fromCodePoint(104)); */


/* let shorTest = 7;
let lonGest = 10;
let minASCII = 33;
let maxASCII = 126;


function randomPassword() {
    let randLength = rand(shorTest, lonGest);
    let res = "";
    let randomChar;
    for (let i = 0; i < randLength; i++) {
        randomChar = String.fromCodePoint(rand(minASCII, maxASCII));
        res += randomChar;
    }

    return res;
}

function rand(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

document.writeln("password: " + randomPassword()); */

/* function loadStr() {
    alert("Страница была загружена");
}

let m = document.getElementById("mes");

function over() {
    m.style.color = "red";
}
function out() {
    m.style.color = "yellow";
}

function change(){
    let h2 = document.querySelector("h2");
    h2.style.color = "blue";
} */
/* 
 function randomBg() {
    let r = Math.floor(Math.random() * 256);
    let g = Math.floor(Math.random() * 256);
    let b = Math.floor(Math.random() * 256);
    document.body.style.background = `rgb(${r}, ${g}, ${b})`;
}  */

/* let newImg = document.querySelector("img");
function on() {
    newImg.src = "night.png";
}

function off() {
    newImg.src = "day.png";
} */

// let but = document.getElementById("but");

/* but.onclick = function(){
    alert("Спасибо");
} */ //                         Не нужно!!

/* but.onclick = hello;

function hello(){
    alert("Спасибо");
} */

/* function change(id){
    id.innerHTML = "Новый текст";
} */

/* function setColor(a) {
    document.body.style.background = a.className;
} */


/* let el = document.querySelector("#elem");

el.addEventListener("click", function(){
    el.innerHTML = "Новый текст";
});

el.addEventListener("click", changeText); 
function changeText(){
    el.innerHTML = "Новый текст";
} */

/* let but = document.querySelector("button");

but.addEventListener("click", function (event) {
    console.log(event);
});

let button = document.querySelectorAll("input");

for (let i = 0; i < button.length; i++) {
    button[i].addEventListener("click", handleClick);
}
function handleClick(event) {
    console.log(" Кликнули по:", event.target.value);
} */

/* document.addEventListener("mousemove", function(event){
    let c = document.querySelector("#ev");
    let x = event.clientX;
    let y = event.clientY;
    c.textContent = "X = " + x +", Y = " + y;

    c.addEventListener("dblclick", function(event){
        event.target.style.background = "red";
    })
}); */

/* let section = document.querySelector("section");
let div = document.querySelector("div");
let p = document.querySelector("p");

section.addEventListener("click", function(){
section.style.background = "red";
});

div.addEventListener("click", function(event){
div.style.background = "orange";
event.stopPropagation();
});

p.addEventListener("click", function(){
p.style.background = "yellow";
}); */

/* let link = document.querySelector("a");

link.addEventListener("click", function(event){
    event.preventDefault();
    console.log("Переход по ссылке отменен");
}) */

/* let input = document.querySelector("#but");
input.addEventListener("click", handler);

function handler(){
    alert("спасибо");
    input.addEventListener("click", handler);
} */

// setTimeout("alert('Текст')", 3000);
/* setTimeout(hello, 3000);

function hello() {
    alert('Текст');
} */

/*     setTimeout(hello, 3000, 'hello', 'friend');

    function hello(h, n){
        alert(h + ', ' + n + '!');
    } */

/* document.writeln("<div id='dt'>Создание анимированного текста</div>");

let id = document.querySelector("#dt");
let text = document.querySelector("#dt").innerHTML;
// console.log(text);
let i = 1;

window.addEventListener("load", animText);

function animText() {
    id.innerHTML = text.substring(0, i);
    i++;

    if(i > text.length){
        i = 0;
    }
    console.log(i);

    setTimeout(animText, 100);
} */

/* let d = new Date();
document.writeln(d.toDateString() + "<br>");
document.writeln(d.getFullYear() + "<br>");
document.writeln(d.getMonth() + "<br>");
document.writeln(d.getDate() + "<br>");
document.writeln(d.getDay() + "<br>");

console.log(new Date());
console.log(new Date().getTime);
 */

// Сегодня: 9 Июля 2026 года, Четверг
/* 
let mounts = ["Января", "Февраля", "Марта", "Апреля", "Мая", "Июня", "Июля", "Августа", "Сентября", "Октября", "Ноября", "Декабря"];
let day = ["Воскресенье", "Понедельник", "Вторник", "Среда", "Четверг", "Пятница", "Суббота"];

let d = new Date();
let fullDate = "Сегодня: " + d.getDate() + " " + mounts[d.getMonth()] + " " + d.getFullYear() + " года, " + day[d.getDay()];
document.writeln(fullDate);
 */


/* document.writeln("<input type='button' value='Start/Stop'>");
document.querySelector("input").addEventListener("click", st);

let run = 0;
let act;
function st() {
    if (run == 0) {
        act = setInterval(setColor, 1000);
        run = 1;
    }
    else {
        clearInterval(act);
        act = 0;
    }
}

function setColor() {
    let x = document.body;
    x.style.background = x.style.background == "yellow" ? "orange" : "yellow";
} */

/* let d = document;
d.writeln("hello"); */

