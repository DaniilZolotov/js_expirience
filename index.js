/* 
    Задание 1:

    Вывести в консоль с помощью цикла FOR все четные числа от 10 до 50
*/

for(i=10; i<=50; i++)     {
    if (i%2==0) {
        console.log("Чётное число - ", i)
    }
}
/* 
    Задание 2:

    Необходимо создать объект в котором вы опишите самого себя в формате : "свойство: значение"

    Список свойств:

    - Имя(string)
    - Фамилия(string)
    - Возраст(number)
    - Есть ли домашние животные(boolean)
*/

const me = {
    name : 'Daniil',
    surname : 'Zolotov',
    age : 18,
    pets : true,
}

console.log(me)
/* 
    Задание 3:

    Отрывок из текста А.С Пушкин, Капитанская дочка был разбит на небольшие кусочки и помещен в массив. 
    Необходимо собрать этот текст из массива и придать ему первоначальный вид.

    Текст до разбивки на части:

    "В ту же ночь приехал я в Симбирск, где должен был пробыть сутки для закупки нужных вещей,
    что и было поручено Савельичу. Я остановился в трактире. Савельич с утра отправился по лавкам"

    Массив: 
const array = [
    'я в Симбирск,',
    'в трактире.',
    'с утра',
    'В ту же ночь',
    'Я остановился',
    'для закупки', 
    'что и было поручено Савельичу.',
    'приехал,',
    'где должен был',
    'нужных вещей',
    'отправился по лавкам',
    'пробыть сутки',
    'Савельич'
]
    let result = array(3)+ array(7)+array(0)+array(8)+array(11)+array(5)+array(9)+array(6)+array(4)+array(1)+array(12)+array(2)+array(10)

   итоговый текст должен быть собран из массива array и результат записать в переменную result
*/

const array = [
    'я в Симбирск,',
    'в трактире.',
    'с утра',
    'В ту же ночь',
    'Я остановился',
    'для закупки', 
    'что и было поручено Савельичу.',
    'приехал,',
    'где должен был',
    'нужных вещей',
    'отправился по лавкам',
    'пробыть сутки',
    'Савельич'
]

let result = array[3]+ array[7]+array[0]+array[8]+array[11]+array[5]+array[9]+array[6]+array[4]+array[1]+array[12]+array[2]+array[10];

console.log(result)


/* 
    Задание 4:

    Напишите функцию, в теле которой будет находится следующий код:

    const fullName = `${firstName} ${lastName}`;
    console.log(fullName);

    firstName и lastName - это параметры функции

    При вызове функции передайте ей, в качестве аргумента, свое имя и фамилию.
*/

function myName(firstName, lastName) {
    const fullName = `${firstName} ${lastName}`;
    console.log(fullName);
}

myName('Daniil', 'Zolotov')
/* 
    Задание 5:

    Вывести в консоль с помощью цикла WHILE все нечетные числа от 21 до 67
    
*/
let x=21;

while (x<=67){
    if (x%2!=0) {
    console.log(' Нечётное число - ', x);
    }
    x++;
}