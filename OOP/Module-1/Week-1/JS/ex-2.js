// 1. Объявление различных видов переменных, используя let
let int = 42;                         // Целочисленное значение
let float= 3.14;                     // Число с плавающей точкой
let str = "I'm stupid hehe!";       // Строка, текст
let bool = true;                   // Булевый тип (истина/ложь)
let nu11 = null;                  // Null, значение "ничего", но не пусто)
let undef;                       // Объявленная переменная без заданного значения
let arr = [1, "text", true, 20];// Объявление массива

// 2. Вывод типов данных с текстом "Тип переменной [...]", обозначенных выше 
console.log(`Тип переменной int: ${typeof int}`);           //number
console.log(`Тип переменной float: ${typeof float}`);      //number
console.log(`Тип переменной str: ${typeof str}`);         //string
console.log(`Тип переменной bool: ${typeof bool}`);      //boolean
console.log(`Тип переменной null: ${typeof nu11}`);     //object
console.log(`Тип переменной undef: ${typeof undef}`);  //undefined
console.log(`Тип переменной arr: ${typeof arr}`);     //object

console.log(Number.MAX_VALUE);           // 1.7976931348623157e+308
console.log(Number.MIN_VALUE);           // 5e-324
console.log(Number.MAX_SAFE_INTEGER);    // 9007199254740991
console.log(Number.MIN_SAFE_INTEGER);    // -9007199254740991
